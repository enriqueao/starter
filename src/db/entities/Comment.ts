import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Post } from './Post';
import { User } from './User';

@ObjectType()
export class Comment {
    @Field((type) => ID)
    id: string

    @Field((type) => String, { nullable: true })
    content: string | null

    @Field((type) => User)
    author: User

    @Field((type) => ID)
    authorId: string

    @Field((type) => Post)
    post: Post

    @Field((type) => ID)
    postId: string

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date
}

