// testing utilities
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
// components
import UserRepositories from "./UserRepositories";
// context
import { UserProfileContext } from "../../../context/UserProfileContext";
// memory router
import { MemoryRouter } from "react-router-dom";

const mockResponse = [{

    name: "repo test",
    private: false

}]




describe("UserRepositories component", () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockResponse),
        } as Response),
    );
    it("should render", () => {
        render(<UserRepositories />)
        const inputText = screen.getByPlaceholderText(/find a repository/i)
        expect(inputText).toBeInTheDocument()

    })
    it("should fetch repos", async () => {
        const userMock = {
            avatar_url: "https://avatars.githubusercontent.com/u/91225705?v=4",
            bio: "Hi, my name is Luis, im 22 years old.\r\nI'm a front end developer and I love playing the guitar and videogames.",
            followers: 4,
            following: 8,
            repos_url: "https://api.github.com/users/LuisMM24/repos",
            location: "España, Castilla la mancha",
            login: "LuisMM24",
            name: "Luis Molina",
        }
        render(
            <MemoryRouter>
                <UserProfileContext.Provider value={
                    {
                        userProfile: userMock,
                        isLoading: false,
                        error: null
                    }
                }>
                    <UserRepositories />
                </UserProfileContext.Provider>
            </MemoryRouter>
        )
        await waitFor(async () => expect(await screen.findByText(/loading/i)).toBeNull())

    })

})