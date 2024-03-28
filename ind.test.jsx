import { describe, it } from "mocha";
import { expect } from "chai";

import { commonUtils } from "./ind";

describe("commonUtils", () => {
  describe("isString", () => {
    it("should return true if value is a string", () => {
      const result = commonUtils.isString("hello");
      expect(result).to.be.true;
    });

    it("should return false if value is not a string", () => {
      const result = commonUtils.isString(123);
      expect(result).to.be.false;
    });
  });

  describe("addNumbers", () => {
    it("should add two numbers", () => {
      const result = commonUtils.addNumbers(1, 2);
      expect(result).to.equal(3);
    });

    it("should return 0 if no arguments", () => {
      const result = commonUtils.addNumbers();
      expect(result).to.equal(0);
    });
  });
});
