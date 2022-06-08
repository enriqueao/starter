import 'reflect-metadata'
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
} from 'type-graphql'
import { User } from '../../db/entities'
import { Context } from '../../config/context'

@Resolver(User)
export class UserQuery {

    @Query(() => [User])
    async allUsers(@Ctx() ctx: Context) {
        return ctx.prisma.user.findMany()
    }

    @Query(() => User)
    async userById(@Ctx() ctx: Context, params: { userId: string }) {

        const user = ctx.prisma.post.create({
            data: {
                title: "Un titulo"
            }
        })

        return ctx.prisma.user.findUnique({
            where: {
                id: params.userId
            }
        })
    }

}