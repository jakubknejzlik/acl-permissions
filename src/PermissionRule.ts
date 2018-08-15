import { PermissionResource } from './PermissionResource';

enum RuleType {
  allow = 'allow',
  deny = 'deny'
}

const ruleTypeFromString = (type: string): RuleType => {
  return type === 'allow' ? RuleType.allow : RuleType.deny;
};

export class PermissionRule {
  type: RuleType;
  resources: PermissionResource[];

  constructor(text: string) {
    const [type, _resources] = text.split('|');
    this.type = ruleTypeFromString(type);
    this.resources = _resources
      .split(':')
      .filter(x => x)
      .map(x => new PermissionResource(x));
  }

  public get allowed(): boolean {
    return this.type === RuleType.allow;
  }

  match(resource: string): boolean {
    const resourceParts = resource.split(':');
    for (let i = 0; i < resourceParts.length; i++) {
      if (i >= this.resources.length) {
        break;
      }

      if (this.resources[i].match(resourceParts[i])) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
}
