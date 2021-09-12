import { world } from "./world";

export function hello(): string {
  const name = world("world");
  console.log(name);
  return name;
}

hello();
