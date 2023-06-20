"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHook = exports.generatePage = exports.generateComponent = void 0;
const actions_1 = __importDefault(require("../actions"));
const generateComponent = (baseCommand) => {
    baseCommand
        .command('make:component <name>')
        .option('-m, --module <name>', 'Generate component under a module', 'common')
        .action(actions_1.default.component)
        .description('Generates a component');
};
exports.generateComponent = generateComponent;
const generatePage = (baseCommand) => {
    baseCommand.command('make:page <name>').action(actions_1.default.page).description('Generates a page');
};
exports.generatePage = generatePage;
const generateHook = (baseCommand) => {
    baseCommand
        .command('make:hook <name>')
        .option('-m, --module <name>', 'Generate hook under a module')
        .action(actions_1.default.hook)
        .description('Generates a hook');
};
exports.generateHook = generateHook;
