class Depart {
  public readonly name: string;
  private employees: string[] = [];

  constructor(name: string, employees: string[]) {
    this.name = name;
    this.employees = employees;
  }

  public addEmployee(name: string): void {
    if (name.length < 6)
      throw new Error("Employee name must be longer than 6 characters");
    if (this.employees.includes(name))
      throw new Error("Employee already included");

    this.employees.push(name);
  }

  get newestEmployee() {
    return this.employees[this.employees.length - 1];
  }

  set newestEmployee(name: string) {
    this.addEmployee(name);
  }
}
