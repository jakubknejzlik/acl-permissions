"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermissionRule_1 = require("./PermissionRule");
var PermissionList = (function () {
    function PermissionList(text) {
        var _this = this;
        this.matchedRules = function (resource) {
            return _this.rules.filter(function (x) { return x.match(resource); });
        };
        var lines = text.split('\n').filter(function (x) { return x; });
        this.rules = lines.map(function (line) { return new PermissionRule_1.PermissionRule(line); });
    }
    PermissionList.prototype.hasMatch = function (resource) {
        return this.matchedRules(resource).length > 0;
    };
    PermissionList.prototype.isAllowed = function (resource) {
        var rules = this.matchedRules(resource);
        if (rules.length === 0) {
            return false;
        }
        for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
            var rule = rules_1[_i];
            if (!rule.allowed) {
                return false;
            }
        }
        return true;
    };
    return PermissionList;
}());
exports.PermissionList = PermissionList;
//# sourceMappingURL=PermissionList.js.map