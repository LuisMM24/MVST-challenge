
import { createContext } from "react";
import useFetchUserProfile from "../hooks/useFetchUserProfile";


interface Props {
    children: JSX.Element | JSX.Element[]
}

export const UserProfileContext = createContext<IUserProfile | null>(null)

const UserProfileProvider: React.FC<Props> = ({ children }) => {
    const [userProfile] = useFetchUserProfile<IUserProfile>("/luismm24")

    return (
        <UserProfileContext.Provider value={userProfile}>
            {children}
        </UserProfileContext.Provider>
    )
}


export default UserProfileProvider