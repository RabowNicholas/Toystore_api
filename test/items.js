import supertest from "supertest";
import { assert } from "chai";

const request = supertest("localhost:3000");

describe("Smoketest", function () {
  it("Can connect to API", () => {
    request.get("/").end((err, res) => {
      assert.equal(err, null);
      assert.equal(res.text, "Successful Deploy");
    });
  });
});

describe("/item", function () {
  let item = "Car";
  let itemPrice = 1.99;

  describe("GET", function () {
    it("Get item that exists", () => {
      request.get(`/item/${item}`).end((err, res) => {
        console.log(err);
        console.log(res.text);
      });
    });
    it("Get item that does not exist", () => {});
  });

  describe("POST", function () {
    it("Post item", () => {});
  });

  describe("DELETE", function () {
    it("Delete Item", () => {});
  });
});
