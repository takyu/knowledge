{
  const greeter = (person: string) => {
    return "Hello, " + person;
  };

  const user = "takyu";

  const greet: HTMLDivElement = <HTMLDivElement>document.querySelector('#greet');

  greet.textContent = greeter(user);
}
