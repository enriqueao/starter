import { PrismaClient } from "@prisma/client";
import { User } from "../db/entities";

export const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient;
    jwt?: string;
    user?: User;
}

export const context: Context = {
    prisma,
    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    user: {
        id: "",
        email: "",
        name: "No tiene nombre"
    }
}