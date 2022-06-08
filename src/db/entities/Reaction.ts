import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Post } from './Post';
import { User } from './User';

@ObjectType()
export class Reaction {
    @Field((type) => ID)
    id: string

    @Field((type) => User)
    user: User

    @Field((type) => ID)
    userId: string

    @Field((type) => Post)
    post: Post

    @Field((type) => ID)
    postId: string

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date
}

