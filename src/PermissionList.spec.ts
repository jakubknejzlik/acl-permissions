import { expect } from 'chai';
import 'mocha';
import { PermissionList } from './PermissionList';

describe('PermissionList', () => {
  it('should parse and match', () => {
    const resource = new PermissionList('allow|field:test\ndeny|field2:test2');

    const expectations = {
      'field:test': true,
      'field:test2': false,
      'field2:test2': false
    };

    for (const key of Object.keys(expectations)) {
      const value = resource.isAllowed(key);
      expect(value).to.equal(
        expectations[key],
        `expected "${key}" => ${expectations[key]} (instead of ${value})`
      );
    }
  });

  it('should parse and match with wildcards', () => {
    const resource = new PermissionList(
      'allow|field:test*\n' + 'deny|field*:test2\n' + 'allow|field*:test2:*'
    );

    const expectations = {
      'field:test': true,
      'field:test:aaa': true,
      'field:testyyy': true,
      'field:test2:xx': false,
      'fieldxx:test2': false,
      'field:test2': false,
      'field2:test2': false
    };

    for (const key of Object.keys(expectations)) {
      const value = resource.isAllowed(key);
      expect(value).to.equal(
        expectations[key],
        `expected "${key}" => ${expectations[key]} (instead of ${value})`
      );
    }
  });
});
