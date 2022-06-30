import { NonEmptyArray } from 'type-graphql'
import { PostQuery } from './post'
import { UserQuery } from './user'

export const queries: NonEmptyArray<Function> = [
    UserQuery,
    PostQuery,
]