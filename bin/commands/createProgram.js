"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const createProgram = (pkg) => {
    const { name, description, version } = pkg;
    const program = new commander_1.Command(name);
    program.description(description);
    program.version(version, '-v, --version');
    return program;
};
exports.default = createProgram;
