"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractErrorException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.default = AbstractErrorException;
