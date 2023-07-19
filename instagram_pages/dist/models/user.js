"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const user = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true,
        minlength: 8
    },
    password: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    gender: {
        type: String,
        enum: ['F', 'M', 'ts']
    }
});
const users = mongoose_1.default.model('user', user);
exports.users = users;
