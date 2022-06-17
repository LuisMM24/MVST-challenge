// testing utilities
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// component
import Header from "./Header";
// memory router
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const inputPlaceholder = screen.getByPlaceholderText(/search users/i);
    expect(inputPlaceholder).toBeInTheDocument();
  });
  it("should redirect when input state change", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const input: HTMLInputElement = screen.getByTestId("inputSearchUser");
    // before change
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "luismm24" } });
    // after change
    expect(input.value).toBe("luismm24");
  });
});
