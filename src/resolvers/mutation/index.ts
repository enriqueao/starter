import { NonEmptyArray } from 'type-graphql'
import { UserMutation } from './user'

export const mutations: NonEmptyArray<Function> = [
    UserMutation
]