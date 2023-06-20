"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize = (str) => {
    return !!str ? str[0].toUpperCase() + str.substring(1) : str;
};
exports.default = capitalize;
