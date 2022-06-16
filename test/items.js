const request = require("supertest")("localhost:3000");
const assert = require("chai").assert;
const app = "../app";

describe("Smoketest", function () {
  it("Can connect to API", () => {
    // const response = await request.get("/");
    request.get("/").end((err, res) => {
      assert.equal(err, null);
      assert.equal(res.text, "Successful Deploy");
    });
  });
});

describe("/item", function () {
  describe("GET", function () {
    it("Get item", () => {});
  });

  describe("POST", function () {
    it("Post item", () => {});
  });

  describe("DELETE", function () {
    it("Delete Item", () => {});
  });
});
