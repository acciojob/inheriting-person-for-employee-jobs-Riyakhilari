describe('Example To-Do App', () => {
  let person;
  let employee;

  // beforeEach hook to set up the tests
  beforeEach(() => {
    person = new Person("Alice", 25);
    employee = new Employee("Bob", 30, "Manager");
  });

  it('can greet and job greet', () => {
    // Testing the greet method for Person
    const greetSpy = cy.spy(person, 'greet');
    person.greet();
    expect(greetSpy).to.have.been.calledOnce;
    expect(greetSpy).to.have.returned('Hello, my name is Alice, I am 25 years old');

    // Testing the jobGreet method for Employee
    const jobGreetSpy = cy.spy(employee, 'jobGreet');
    employee.jobGreet();
    expect(jobGreetSpy).to.have.been.calledOnce;
    expect(jobGreetSpy).to.have.returned('Hello, my name is Bob, I am 30 years old, and my job title is Manager');
  });
});
