import { waiter } from "@/helpers/asyncHelper";

describe("promise waiter", () => {
  it("returns result and empty error", async () => {
    const [err, result] = await waiter(new Promise((resolve, _) => resolve("Ok")));

    expect(err).toBe(null);
    expect(result).toBe("Ok");
  });

  it("returns empty result and error if promise failed", async () => {
    const [err, result] = await waiter(new Promise((_, reject) => reject(new Error("reject"))));

    expect(typeof err).toBe("object");
    expect(err.message).toBe("reject");
    expect(result).toBe(null);
  });
});
