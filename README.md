# acl-permissions

[![Build Status](https://travis-ci.org/jakubknejzlik/acl-permissions.svg?branch=master)](https://travis-ci.org/jakubknejzlik/acl-permissions)

Library for handling Access Control List permissions

## Example usage

```
import { PermissionList } from 'acl-permissions'

const acl = new PermissionList(
    'allow|users:*name\n' + 'deny|users:password\n' + 'allow|tasks:*'
);

acl.isAllowed('users:username') // => true
acl.isAllowed('users:name') // => true
acl.isAllowed('users:password') // => false
acl.isAllowed('tasks:anything') // => true
```
