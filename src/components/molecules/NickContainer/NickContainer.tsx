import React from "react";
import "./NickContainer.css";

interface Props {
  avatar: string | undefined;
  nickName: string | undefined;
  fullName: string | undefined;
}

const NickContainer: React.FC<Props> = ({ avatar, nickName, fullName }) => {
  return (
    <article className="nickContainer">
      <div className="avatarWrapper">
        <img src={avatar} alt="user avatar" />
      </div>
      <div className="userNamesWrapper">
        <span className="fullNameText">{fullName}</span>
        <span className="nickNameText grayText">{nickName}</span>
      </div>
    </article>
  );
};

export default NickContainer;
