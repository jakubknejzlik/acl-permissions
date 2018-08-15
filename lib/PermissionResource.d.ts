export declare class PermissionResource {
    name: string;
    regexp?: RegExp;
    constructor(text: string);
    match(resource: string): boolean;
}
