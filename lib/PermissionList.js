"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PermissionRule_1 = require("./PermissionRule");
class PermissionList {
    constructor(text) {
        this.matchedRules = (resource) => {
            return this.rules.filter(x => x.match(resource));
        };
        const lines = text.split('\n').filter(x => x);
        this.rules = lines.map(line => new PermissionRule_1.PermissionRule(line));
    }
    hasMatch(resource) {
        return this.matchedRules(resource).length > 0;
    }
    isAllowed(resource) {
        const rules = this.matchedRules(resource);
        if (rules.length === 0) {
            return false;
        }
        for (const rule of rules) {
            if (!rule.allowed) {
                return false;
            }
        }
        return true;
    }
}
exports.PermissionList = PermissionList;
//# sourceMappingURL=PermissionList.js.map