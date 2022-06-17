// testing utilities
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// components
import UserRepositories from "./UserRepositories";

describe("UserRepositories component", () => {
  it("should render", () => {
    render(<UserRepositories />);
    const inputText = screen.getByPlaceholderText(/find a repository/i);
    expect(inputText).toBeInTheDocument();
  });
});
