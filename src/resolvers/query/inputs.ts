import { Field, InputType } from 'type-graphql'
@InputType()
export class PostCreateInput {
    @Field()
    title: string

    @Field({ nullable: true })
    content: string
}

@InputType()
export class PostOrderByUpdatedAtInput {
    @Field((type) => String)
    createdAt?: SortOrder
}

export enum SortOrder {
    asc = 'asc',
    desc = 'desc',
}