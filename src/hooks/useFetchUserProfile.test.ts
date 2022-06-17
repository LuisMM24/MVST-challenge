import "@testing-library/jest-dom";
import { renderHook, waitFor } from "@testing-library/react";
// fn
import useFetchUserProfile from "./useFetchUserProfile";

describe("useFetchUserProfile custom hook", () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.reject(),
    } as Response)
  );
  beforeEach(() => jest.restoreAllMocks());
  afterEach(() => jest.clearAllMocks());

  it("should give null", async () => {
    const { result } = renderHook(() => useFetchUserProfile("/luismm24"));
    await waitFor(async () => {
      expect(result.current[0]).toBe(null);
    });
  });
});
