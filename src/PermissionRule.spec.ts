import { expect } from 'chai';
import 'mocha';
import { PermissionRule } from './PermissionRule';

describe('PermissionRule', () => {
  it('should parse and match', () => {
    const resource = new PermissionRule('allow|field:test');

    const expectations = {
      'field:test': true,
      'field:test2': false,
      'fieldaa:test': false
    };

    for (const key of Object.keys(expectations)) {
      const value = resource.match(key);
      expect(value).to.equal(
        expectations[key],
        `expected "${key}" => ${expectations[key]} (instead of ${value})`
      );
    }
  });

  it('should parse and match with wildcards', () => {
    const resource = new PermissionRule('allow|field*:test');

    const expectations = {
      'fieldaa:test': true,
      'fiel:test2': false,
      'field:testaa': false
    };

    for (const key of Object.keys(expectations)) {
      const value = resource.match(key);
      expect(value).to.equal(
        expectations[key],
        `expected "${key}" => ${expectations[key]} (instead of ${value})`
      );
    }
  });
});
