"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = __importDefault(require("../utils/capitalize"));
const fs_1 = require("fs");
const path_1 = require("path");
const generateComponent = (name, options) => {
    const tmpPath = (0, path_1.resolve)(process.cwd(), 'templates/component/index.txt');
    const tmpContent = (0, fs_1.readFileSync)(tmpPath, { encoding: 'utf-8' });
    const [_name] = name.toLowerCase().split('component');
    const filename = (0, capitalize_1.default)(_name);
    if ((0, fs_1.existsSync)(`${filename}.tsx`)) {
        console.log('File already exists!');
    }
    else {
        (0, fs_1.writeFile)(`${filename}.tsx`, tmpContent.replaceAll('Template', filename), { encoding: 'utf-8' }, err => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Successfully created next.json config file.');
            }
        });
    }
    console.log(filename, options);
    console.log('Component generated');
};
exports.default = generateComponent;
