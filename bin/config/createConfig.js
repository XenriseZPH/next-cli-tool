"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextConfigPath = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const nextConfigPath = (0, path_1.resolve)(process.cwd(), 'next.json');
exports.nextConfigPath = nextConfigPath;
const createConfig = (answers) => {
    (0, fs_1.writeFile)(nextConfigPath, JSON.stringify(answers, null, 2), { encoding: 'utf-8' }, err => {
        if (err)
            console.log(err);
        else
            console.log('Successfully created next.json config file.');
    });
};
exports.default = createConfig;
