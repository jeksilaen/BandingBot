"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const bcrypt = require('bcrypt');
function createUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.user.create({
                data: {
                    fName: data.fName,
                    lName: data.lName,
                    dateOfBirth: new Date(data.dOb),
                    email: data.email,
                    password: yield bcrypt.hash(data.password, 8)
                }
            });
            console.log("User created!");
            return true;
        }
        catch (err) {
            console.log("Failed to create user!");
            return false;
        }
    });
}
function loginUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.user.findUnique({
                where: {
                    email: data.email
                }
            });
            if (user) {
                return user;
            }
            return false;
        }
        catch (err) {
            console.log("Failed to find user!");
            return false;
        }
    });
}
module.exports = {
    createUser,
    loginUser
};
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
//# sourceMappingURL=db.service.js.map