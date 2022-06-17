import { createContext } from "react";
import { useLocation } from "react-router-dom";
import useFetchUserProfile from "../hooks/useFetchUserProfile";

interface Props {
  children: JSX.Element | JSX.Element[];
}
/* interface to put in provider values all the states of the custom hook "useFetchUserProfile" */
interface IProfileContext {
  userProfile: IUserProfile | null;
  isLoading: boolean;
  error: string | null;
}

export const UserProfileContext = createContext<IProfileContext | null>(null);

const UserProfileProvider: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  /* main condition is if client is in "/" path, set the default user profile */
  const [userProfile, isLoading, error] = useFetchUserProfile<IUserProfile>(
    pathname !== "/" ? pathname : "/luismm24"
  );

  return (
    <UserProfileContext.Provider value={{ userProfile, isLoading, error }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
