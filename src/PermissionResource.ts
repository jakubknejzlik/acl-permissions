export class PermissionResource {
  name: string;
  regexp?: RegExp;

  constructor(text: string) {
    this.name = text;

    if (text.indexOf('*') !== -1) {
      const expression = '^' + text.replace(/\*/g, '[^:]*') + '$'; //.replace(/:/g, '(())?');
      this.regexp = new RegExp(expression);
    }
  }

  match(resource: string): boolean {
    if (!this.regexp) {
      return this.name === resource;
    }
    return this.regexp.test(resource);
  }
}
