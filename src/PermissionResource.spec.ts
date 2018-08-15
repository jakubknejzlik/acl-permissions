import { expect } from 'chai';
import 'mocha';
import { PermissionResource } from './PermissionResource';

describe('PermissionResource', () => {
  it('should parse and match', () => {
    const resource = new PermissionResource('test');

    const expectations = {
      test: true,
      testaa: false,
      aatest: false
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
    const resource = new PermissionResource('*test');

    const expectations = {
      test: true,
      aatest: true,
      testaa: false
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
