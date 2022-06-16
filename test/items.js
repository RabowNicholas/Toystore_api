import supertest from "supertest";
import { assert } from "chai";
import Toy from "../models/Toy.js";

const request = supertest("localhost:3000");
const token = "01234567899876543210";

describe("Smoketest", function () {
  it("Can connect to API", (done) => {
    request.get("/").end((err, res) => {
      assert.equal(res.text, "Successful Deploy");
      done();
    });
  });
});

describe("/item", function () {
  describe("GET", function () {
    let expected = new Toy("Car", 1.99);
    it("Get item that exists", (done) => {
      request
        .get(`/item/${expected.name}`)
        .set("Authorization", token)
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, expected);
          done();
        });
    });

    it("Get item that does not exist", (done) => {
      request
        .get("/item/Lego")
        .set("Authorization", token)
        .end((err, res) => {
          assert.equal(res.status, 404);
          assert.deepEqual(res.body, { error: "Item does not exist." });
          done();
        });
    });

    it("User not authorized", (done) => {
      request.get("/item/Car").end((err, res) => {
        assert.equal(res.status, 401);
        assert.deepEqual(res.body, { error: "User not authorized." });
        done();
      });
    });
  });

  // describe("POST", function () {
  //   it("Post item", () => {});
  // });
  //
  // describe("DELETE", function () {
  //   it("Delete Item", () => {});
  // });
});
