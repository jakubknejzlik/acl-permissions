"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PermissionResource {
    constructor(text) {
        this.name = text;
        if (text.indexOf('*') !== -1) {
            const expression = '^' + text.replace(/\*/g, '[^:]*') + '$';
            this.regexp = new RegExp(expression);
        }
    }
    match(resource) {
        if (!this.regexp) {
            return this.name === resource;
        }
        return this.regexp.test(resource);
    }
}
exports.PermissionResource = PermissionResource;
//# sourceMappingURL=PermissionResource.js.map