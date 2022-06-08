import 'reflect-metadata'
import { ID } from 'type-graphql';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
} from 'type-graphql'

@InputType()
export class UserCreateInput {
    @Field()
    email: string;

    @Field()
    name: string;
}


@InputType()
export class FindUserById {
    @Field((type)=> ID)
    id: string;
}
