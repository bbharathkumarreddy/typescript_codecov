import { world } from "../src/world";
import { expect } from "chai";
import "mocha";

describe("World function", () => {
  it("should return hello world", () => {
    const result = world("world");
    expect(result).to.equal("Hello world!");
  });
});
