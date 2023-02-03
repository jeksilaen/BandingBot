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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var bcrypt = require('bcrypt');
function createUser(data) {
    return __awaiter(this, void 0, void 0, function () {
        var user, _a, _b, err_1;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 3, , 4]);
                    _b = (_a = prisma.user).create;
                    _c = {};
                    _d = {
                        fName: data.fName,
                        lName: data.lName,
                        dateOfBirth: new Date(data.dOb),
                        email: data.email
                    };
                    return [4 /*yield*/, bcrypt.hash(data.password, 8)];
                case 1: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.password = _e.sent(),
                            _d),
                            _c)])];
                case 2:
                    user = _e.sent();
                    console.log("User created!");
                    return [2 /*return*/, true];
                case 3:
                    err_1 = _e.sent();
                    console.log("Failed to create user!");
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loginUser(data) {
    return __awaiter(this, void 0, void 0, function () {
        var user, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: {
                                email: data.email
                            }
                        })];
                case 1:
                    user = _a.sent();
                    if (user) {
                        return [2 /*return*/, user];
                    }
                    return [2 /*return*/, false];
                case 2:
                    err_2 = _a.sent();
                    console.log("Failed to find user!");
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
module.exports = {
    createUser: createUser,
    loginUser: loginUser
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