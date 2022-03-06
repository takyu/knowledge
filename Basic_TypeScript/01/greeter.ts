{
  const greeter = (person: string) => {
    return "Hello, " + person;
  };

  const user = "takyu";

  document.body.textContent = greeter(user);
}
