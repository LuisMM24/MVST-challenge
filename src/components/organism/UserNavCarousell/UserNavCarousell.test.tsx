import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// component
import UserNavCarousell from "./UserNavCarousell";
// memory router
import { MemoryRouter } from "react-router-dom";

describe("UserNavCarousell component", () => {
  it("should display repositories link", () => {
    render(
      <MemoryRouter>
        <UserNavCarousell />
      </MemoryRouter>
    );
    const repoText = screen.getByText(/repositories/i);
    expect(repoText).toBeInTheDocument();
  });
});
