/**
 * Undefined type
 *
 * nullとは異なり、まだ値が割り当てられていないことを示す
 */
{
  const value = undefined;
  console.log(value);

  let name: string | undefined = undefined;
  console.log(name);

  name = "Kevin";
  console.log(name);
}
