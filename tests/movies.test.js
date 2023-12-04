const request = require("supertest");
const app = require("../app");
const { describe } = require("node:test");

describe("GET /movies", () => {
  it("Should return a list of movies", async () => {
    const response = await request(app).get("/movies");
    expect(response.status).toBe(200);
    expect(response.body.length).not.toBe(0);
  })
  });
describe("GET /movies/:id", () => {
  test("Should return a movie by id", async () => {
    const response = await request(app).get("/movies/1");
    expect(response.status).toBe(200);
    expect(response.headers['Content-Type']).toMatch(/json/);
    expect(response.body).toHaveProperty("title");
  })
  test("Should return empty data with 404 status code", async () => {
    const response = await request(app).get("/movies/0");
    expect(response.status).toBe(404);
    expect(response.headers["Content-Type"]).toMatch(/json/);
  })
});
