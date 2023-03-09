const jwt = require("jsonwebtoken");
const request = require("supertest");

const app = require("../../../app");
const mongoose = require("./../../../server");

const TEST_USER = { email: "example@gmail.com", password: "123456" };

describe("Test loginUser controller", () => {
  beforeAll(() => mongoose.connection);

  test("request.status must be 200", async () => {
    const response = await request(app)
      .post("/api/users/login")
      .send(TEST_USER);
    expect(response.status).toBe(200);
  });
  test("request must contain a token", async () => {
    const response = await request(app)
      .post("/api/users/login")
      .send(TEST_USER);
    const { id } = jwt.decode(response.body.data.token);
    expect(id !== null).toBe(true);
  });
  test("request must contain a 'user' object with two fields 'email' and 'subscription' with typeOf(string)", async () => {
    const response = await request(app)
      .post("/api/users/login")
      .send(TEST_USER);

    const objectValidation = (data) => {
      if (!data.user || typeof data.user !== "object") {
        return false;
      }
      if (!data.user.email || typeof data.user.email !== "string") {
        return false;
      }
      if (
        !data.user.subscription ||
        typeof data.user.subscription !== "string"
      ) {
        return false;
      }
      return true;
    };

    expect(objectValidation(response.body.data)).toBe(true);
  });
});
