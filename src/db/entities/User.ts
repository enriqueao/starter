import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { Post } from './Post';
import { Reaction } from './Reaction';
import { Comment } from './Comment';

@ObjectType()
export class User {
    @Field((type) => ID)
    id: string

    @Field()
    @IsEmail()
    email: string

    @Field((type) => String, { nullable: true })
    name?: string | null

    @Field((type) => Post, { nullable: true })
    post?: Post[] | null

    @Field((type) => Comment)
    comments?: Comment[]

    @Field((type) => Reaction)
    reactions?: Reaction[]

    @Field((type) => Date, { nullable: true })
    createdAt: Date | null

    @Field((type) => Date, { nullable: true })
    updatedAt: Date | null
}