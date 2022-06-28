import 'reflect-metadata'
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
    FieldResolver,
    Root,
} from 'type-graphql'
import { Prisma } from '@prisma/client';
import { Post, User } from '../../db/entities'
import { Context } from '../../config/context'
import { UserCreateInput } from './inputs';

@Resolver(User)
export class UserMutation {

    @FieldResolver()
    async post(
        @Root() user: User,
        @Ctx() ctx: Context
    ): Promise<Post[]> {
        return ctx.prisma.user
            .findUnique({ where: { id: user.id, }, })
            .posts()
    }

    @Mutation((returns) => User)
    async signupUser(
        @Arg('data') data: UserCreateInput,
        @Ctx() ctx: Context
    ): Promise<User> {
        return ctx.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
            }
        })
    }

    @Mutation((returns) => User)
    async changePassword(
        @Arg('data') data: UserCreateInput,
        @Ctx() ctx: Context
    ): Promise<void> {
        /* return ctx.prisma.user.update({
            where: {
                id: ""
            },
            data: {
                email: data.email,
                name: data.name
            }
        }) */
    }

}