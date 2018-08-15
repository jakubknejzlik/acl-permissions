import { PermissionRule } from './PermissionRule';
export declare class PermissionList {
    rules: PermissionRule[];
    constructor(text: string);
    private matchedRules;
    hasMatch(resource: string): boolean;
    isAllowed(resource: string): boolean;
}
