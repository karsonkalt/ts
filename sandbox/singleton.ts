class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInsatnce(): Singleton {
    if (this.instance) return this.instance;
    this.instance = new Singleton();
    return this.instance;
  }
}

const singleton = Singleton.getInsatnce();
console.log(singleton);

const singleton2 = Singleton.getInsatnce();
console.log(singleton2);
