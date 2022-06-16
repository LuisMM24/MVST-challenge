// testing utilities
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"
// components
import UserPersonalInfo from "./UserPersonalInfo";
// router
import { MemoryRouter } from "react-router-dom";
// context
import { UserProfileContext } from "../../../context/UserProfileContext";



describe("UserPersonalInfo component", () => {
    it("should render", () => {
        render(<UserPersonalInfo />)
        const followBtn = screen.getByRole("button", { name: /follow/i })
        expect(followBtn).toBeInTheDocument()

    })

    it("should render the profile when context it's working", () => {
        const mockResponse = {
            avatar_url: "doesn't work",
            bio: "Hi, my name is Luis, im 22 years old.\r\nI'm a front end developer and I love playing the guitar and videogames.",
            followers: 4,
            following: 8,
            repos_url: "fail",
            location: "España, Castilla la mancha",
            login: "LuisMM24",
            name: "Luis Molina",
        }
        render(<MemoryRouter>
            <UserProfileContext.Provider value={{ userProfile: mockResponse, isLoading: false, error: null }}>
                <UserPersonalInfo />
            </UserProfileContext.Provider>
        </MemoryRouter>)

        expect(screen.getByText(/luismm24/i)).toBeInTheDocument();
    })
})
