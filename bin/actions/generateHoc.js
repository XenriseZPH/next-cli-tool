"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = __importDefault(require("../utils/capitalize"));
const generateHoc = (name) => {
    const [, _name] = name.toLowerCase().split('with');
    const filename = 'with' + (0, capitalize_1.default)(_name);
    console.log(filename);
};
exports.default = generateHoc;
