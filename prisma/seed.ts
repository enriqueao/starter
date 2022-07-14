import { PrismaClient, Prisma  } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        email: "enrique@gmail.com",
        name: "Enrique",
    }
]
/* const postData: Prisma.PostCreateInput[] = [
    {

    }
]
const commentData: Prisma.CommentCreateInput[] = [
    {

    }
] */

async function main(){
    console.log('seeding...');
    await prisma.user.createMany({ data: userData });
    //await prisma.post.createMany(userData);
    //await prisma.comment.createMany(commentData);
}

main()
    .catch((e)=> {
        console.error(e)
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    });