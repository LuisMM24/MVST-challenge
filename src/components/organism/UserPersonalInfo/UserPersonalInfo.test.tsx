// testing utilities
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import UserPersonalInfo from "./UserPersonalInfo";
// router
import { MemoryRouter } from "react-router-dom";
// context
import { UserProfileContext } from "../../../context/UserProfileContext";
// mocks
import userMock from "../../../mocks/UserMock";

describe("UserPersonalInfo component", () => {
  it("should render", () => {
    render(<UserPersonalInfo />);
    const followBtn = screen.getByRole("button", { name: /follow/i });
    expect(followBtn).toBeInTheDocument();
  });

  it("should render the profile when context it's working", () => {
    render(
      <MemoryRouter>
        <UserProfileContext.Provider
          value={{ userProfile: userMock, isLoading: false, error: null }}
        >
          <UserPersonalInfo />
        </UserProfileContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/luismm24/i)).toBeInTheDocument();
  });
});
