"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermissionResource_1 = require("./PermissionResource");
var RuleType;
(function (RuleType) {
    RuleType["allow"] = "allow";
    RuleType["deny"] = "deny";
})(RuleType || (RuleType = {}));
var ruleTypeFromString = function (type) {
    return type === 'allow' ? RuleType.allow : RuleType.deny;
};
var PermissionRule = (function () {
    function PermissionRule(text) {
        var _a = text.split('|'), type = _a[0], _resources = _a[1];
        this.type = ruleTypeFromString(type);
        this.resources = _resources
            .split(':')
            .filter(function (x) { return x; })
            .map(function (x) { return new PermissionResource_1.PermissionResource(x); });
    }
    Object.defineProperty(PermissionRule.prototype, "allowed", {
        get: function () {
            return this.type === RuleType.allow;
        },
        enumerable: true,
        configurable: true
    });
    PermissionRule.prototype.match = function (resource) {
        var resourceParts = resource.split(':');
        for (var i = 0; i < resourceParts.length; i++) {
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
    };
    return PermissionRule;
}());
exports.PermissionRule = PermissionRule;
//# sourceMappingURL=PermissionRule.js.map