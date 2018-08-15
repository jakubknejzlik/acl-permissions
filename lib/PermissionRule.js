"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PermissionResource_1 = require("./PermissionResource");
var RuleType;
(function (RuleType) {
    RuleType["allow"] = "allow";
    RuleType["deny"] = "deny";
})(RuleType || (RuleType = {}));
const ruleTypeFromString = (type) => {
    return type === 'allow' ? RuleType.allow : RuleType.deny;
};
class PermissionRule {
    constructor(text) {
        const [type, _resources] = text.split('|');
        this.type = ruleTypeFromString(type);
        this.resources = _resources
            .split(':')
            .filter(x => x)
            .map(x => new PermissionResource_1.PermissionResource(x));
    }
    get allowed() {
        return this.type === RuleType.allow;
    }
    match(resource) {
        const resourceParts = resource.split(':');
        for (let i = 0; i < resourceParts.length; i++) {
            if (i >= this.resources.length) {
                break;
            }
            if (this.resources[i].match(resourceParts[i])) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
exports.PermissionRule = PermissionRule;
//# sourceMappingURL=PermissionRule.js.map