"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermissionResource = (function () {
    function PermissionResource(text) {
        this.name = text;
        if (text.indexOf('*') !== -1) {
            var expression = '^' + text.replace(/\*/g, '[^:]*') + '$';
            this.regexp = new RegExp(expression);
        }
    }
    PermissionResource.prototype.match = function (resource) {
        if (!this.regexp) {
            return this.name === resource;
        }
        return this.regexp.test(resource);
    };
    return PermissionResource;
}());
exports.PermissionResource = PermissionResource;
//# sourceMappingURL=PermissionResource.js.map