// testing utilities
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
// components
import UserRepositories from "./UserRepositories";
// context
import { UserProfileContext } from "../../../context/UserProfileContext";
// memory router
import { MemoryRouter } from "react-router-dom";

const mockResponse = {

    name: "repo test",
    private: false

}


// jest.spyOn(global, 'fetch').mockImplementation(() =>
//     Promise.resolve({
//         json: () => Promise.resolve(mockResponse),
//     } as Response),
// );

describe("UserRepositories component", () => {
    beforeEach(() => jest.clearAllMocks())
    it("should render", () => {
        render(<UserRepositories />)
        const inputText = screen.getByPlaceholderText(/find a repository/i)
        expect(inputText).toBeInTheDocument()

    })

})