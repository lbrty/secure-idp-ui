import { transformQueryParams } from "@/helpers/browser";

describe("browser helpers", () => {
  it("query string builder works", () => {
    const qs = transformQueryParams({ a: "a", b: 1, c: "123" });
    expect(qs).toEqual({ a: "a", b: 1, c: 123 });
  });
});
