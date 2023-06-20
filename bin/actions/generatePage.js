"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = __importDefault(require("../utils/capitalize"));
const generatePage = (name, options) => {
    const [_name] = name.toLowerCase().split('page');
    const filename = (0, capitalize_1.default)(_name) + 'Page';
    console.log(filename, options);
};
exports.default = generatePage;
