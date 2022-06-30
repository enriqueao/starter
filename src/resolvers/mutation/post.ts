import 'reflect-metadata'
import {
    Resolver,
    Mutation,
    Arg,
    Ctx,
    FieldResolver,
    Root,
    Int,
} from 'type-graphql'
import { Post, User } from '../../db/entities';
import { Context } from '../../config/context';
import { PostCreateInput } from '../query/inputs';



@Resolver(Post)
export class PostMutation {

    @Mutation((returns) => Post)
    async createDraft(
        @Arg('data') data: PostCreateInput,
        @Arg('authorEmail') authorEmail: string,
        @Ctx() ctx: Context,
    ) {
        return ctx.prisma.post.create({
            data: {
                title: data.title,
                content: data.content,
                author: {
                    connect: { email: authorEmail },
                },
            },
        })
    }

    @Mutation((returns) => Post, { nullable: true })
    async togglePublishPost(
        @Arg('id', (type) => String) id: string,
        @Ctx() ctx: Context,
    ) {
        const post = await ctx.prisma.post.findUnique({
            where: { id: id || undefined },
            select: {
                published: true,
            },
        })

        return ctx.prisma.post.update({
            where: { id: id || undefined },
            data: { published: !post?.published },
        })
    }

    @Mutation((returns) => Post)
    async updateTitleById(
        @Arg('id', (type) => String) id: string,
        @Arg('content', (type) => String) content: string,
        @Ctx() ctx: Context,
    ): Promise<Post> {
        return ctx.prisma.post.update({
            where: { id: id || undefined },
            data: { content },
        })
    }

    @Mutation((returns) => Post, { nullable: true })
    async incrementPostViewCount(
        @Arg('id', (type) => Int) id: string,
        @Ctx() ctx: Context,
    ) {
        return ctx.prisma.post.update({
            where: { id: id || undefined },
            data: {
                viewCount: {
                    increment: 1,
                },
            },
        })
    }

    @Mutation((returns) => Post, { nullable: true })
    async deletePost(
        @Arg('id', (type) => Int) id: string,
        @Ctx() ctx: Context
    ) {
        return ctx.prisma.post.delete({
            where: { id, },
        })
    }
}