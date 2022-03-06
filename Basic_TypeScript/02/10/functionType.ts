/**
 * Function type
 */
{
  const hello: (name: string) => string = (name: string): string => {
    return "hello " + name;
  };
  console.log(hello("Taro"));

  const goodMornig: (name: string) => void = (name: string): void => {
    console.log(`hello ${name}`);
  };
  goodMornig("Jiro");
}
