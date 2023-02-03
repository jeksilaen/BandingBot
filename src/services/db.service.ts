import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const bcrypt = require('bcrypt')


async function createUser(data: any) {
    try {
        const user = await prisma.user.create({
            data: {
                fName: data.fName,
                lName: data.lName,
                dateOfBirth: new Date(data.dOb),
                email: data.email,
                password: await bcrypt.hash(data.password, 8)
            }
        });
        console.log("User created!");
        return true;
    
    } catch (err) {
        console.log("Failed to create user!");
        return false
    }
}

async function loginUser(data: any) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (user) {
            return user
        }
        
        return false
    
    } catch (err) {
        console.log("Failed to find user!");
        return false
    }
}

module.exports = {
    createUser,
    loginUser
}








// async function main() {

//     await prisma.user.deleteMany()
//     await prisma.userPreference.deleteMany()


//     const user = await prisma.user.create({
//         data: {
//             name: "Jek",
//             email: "jek@prisma.com",
//             age: 25,
//             userPreferences: {
//                 create: {
//                     emailUpdates: true
//                 }
//             }
//         },
//         select: {
//             email: true,
//             userPreferences: {
//                 select: {emailUpdates: true}
//             }
//         }
//     });

//     const user = await prisma.user.findMany({
//         where: {
//             email: "jek@prisma.com"
//         },
//         orderBy: {
//             age: 'asc'
//         }
//     })

//     const user = await prisma.user.findMany({
//         where: {
//             writtenPosts: {
//                 every: {
//                     title: "Test"
//                 }
//             }
//         },
//         orderBy: {
//             age: 'asc'
//         }
//     })

//     const user = await prisma.post.findMany({
//         where: {
//             author: {
//                 is: {
//                     age: 27
//                 }
//             }
//         }
//     })

//     const user = await prisma.user.update({
//         where: {
//             email: 'jek@prisma.com'
//         },
//         data: {
//             email: 'jekskuy@prisma.com'
//         }
//     })

//     await prisma.user.delete({
//         where: {
//             email: 'jek@prisma.com'
//         }
//     })

//     console.log(user);
    
// }

// main()
//     .catch(err => console.error(err.message))
//     .finally(async()=>{
//         await prisma.$disconnect();
//     })