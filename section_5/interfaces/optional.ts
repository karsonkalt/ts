interface Person {
  name: string;
  location: string;
  favoriteFood?: string;
}

// The ? means that it is an optional property
// We can use an optioanl property in a constructor for a class as well.

class NewPerson {
  name?: string;

  constructor(name?: string) {
    this.name = name;
  }
}
