import { NonEmptyArray } from 'type-graphql'
import { PostMutation } from './post'
import { UserMutation } from './user'

export const mutations: NonEmptyArray<Function> = [
    UserMutation,
    PostMutation,
]