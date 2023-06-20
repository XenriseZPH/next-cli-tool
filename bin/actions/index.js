"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateComponent_1 = __importDefault(require("./generateComponent"));
const generatePage_1 = __importDefault(require("./generatePage"));
const generateHook_1 = __importDefault(require("./generateHook"));
const generateHoc_1 = __importDefault(require("./generateHoc"));
const actions = { component: generateComponent_1.default, page: generatePage_1.default, hook: generateHook_1.default, hoc: generateHoc_1.default };
exports.default = actions;
