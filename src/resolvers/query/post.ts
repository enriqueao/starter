import 'reflect-metadata'
import {
    Resolver,
    Query,
    Arg,
    Ctx,
    FieldResolver,
    Root,
    Int,
} from 'type-graphql'
import { Post, User } from '../../db/entities';
import { Context } from '../../config/context';
import { PostOrderByUpdatedAtInput } from './inputs';

@Resolver(Post)
export class PostQuery {

    @FieldResolver()
    author(
        @Root() post: Post,
        @Ctx() ctx: Context
    ): Promise<User | null> {
        return ctx.prisma.post
            .findUnique({
                where: { id: post.id, },
            })
            .author()
    }

    @Query((returns) => Post, { nullable: true })
    async postById(
        @Arg('id') id: string,
        @Ctx() ctx: Context
    ) {
        await ctx.prisma.post.update({
            where: { id: id || undefined },
            data: {
                viewCount: { increment: 1, },
            },
        });
        return ctx.prisma.post.findUnique({
            where: { id },
        });
    }

    @Query((returns) => [Post])
    async searchPost(
        @Arg('searchString', { nullable: true }) searchString: string,
        @Arg('orderBy', { nullable: true }) orderBy: PostOrderByUpdatedAtInput,
        @Ctx() ctx: Context,
    ) {
        const or = searchString
            ? {
                OR: [
                    { title: { contains: searchString } },
                    { content: { contains: searchString } },
                ],
            }
            : {}

        return ctx.prisma.post.findMany({
            where: {
                published: true,
                ...or,
            }
        })
    }

    @Query((returns) => [Post])
    async allPosts(
        @Arg('skip', (type) => Int, { nullable: true }) skip: number,
        @Arg('take', (type) => Int, { nullable: true }) take: number,
        @Ctx() ctx: Context,
    ) {
        return ctx.prisma.post.findMany({
            where: {
                published: true,
            },
            take: take || undefined,
            skip: skip || undefined,
        });
    }

    @Query((returns) => Post, { nullable: true })
    async postByUserId(
        @Arg('authorId') authorId: string,
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.post.findMany({
            where: { authorId },
        });
    }
}