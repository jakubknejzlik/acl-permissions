import { PermissionRule } from './PermissionRule';

export class PermissionList {
  rules: PermissionRule[];

  constructor(text: string) {
    const lines = text.split('\n').filter(x => x);
    this.rules = lines.map(line => new PermissionRule(line));
  }

  private matchedRules = (resource: string): PermissionRule[] => {
    return this.rules.filter(x => x.match(resource));
  };

  hasMatch(resource: string): boolean {
    return this.matchedRules(resource).length > 0;
  }

  isAllowed(resource: string): boolean {
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
