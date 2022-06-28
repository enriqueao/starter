import { NonEmptyArray } from 'type-graphql'
import { UserQuery } from './user'

export const queries: NonEmptyArray<Function> = [
    UserQuery
]