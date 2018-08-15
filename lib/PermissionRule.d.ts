import { PermissionResource } from './PermissionResource';
declare enum RuleType {
    allow = "allow",
    deny = "deny"
}
export declare class PermissionRule {
    type: RuleType;
    resources: PermissionResource[];
    constructor(text: string);
    readonly allowed: boolean;
    match(resource: string): boolean;
}
export {};
