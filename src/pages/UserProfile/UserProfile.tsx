import React, { useContext } from "react";
// context
import { UserProfileContext } from "../../context/UserProfileContext";
// components
import UserNavCarousell from "../../components/organism/UserNavCarousell/UserNavCarousell";
import UserPersonalInfo from "../../components/organism/UserPersonalInfo/UserPersonalInfo";
import UserRepositories from "../../components/organism/UserRepositories/UserRepositories";
// styles
import "./UserProfile.css";

const UserProfile: React.FC = () => {
  const profileContext = useContext(UserProfileContext);
  /* states of context to get controlled the re-renders*/
  if (profileContext?.error)
    return <h1 className="centerText">User not found</h1>;
  if (profileContext?.isLoading) return <h1 className="centerText">Loading</h1>;
  return (
    <div className="AppBodySection">
      <section className="userPersonalInfoSection">
        <UserPersonalInfo />
      </section>
      <section className="UserNavWrapper">
        <UserNavCarousell />
        <hr />
        <UserRepositories />
      </section>
    </div>
  );
};

export default UserProfile;
