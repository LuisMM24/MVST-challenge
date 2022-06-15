import React, { useContext } from 'react'
// context
import { UserProfileContext } from '../../../context/UserProfileContext'
// components
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton'
import NickContainer from '../../molecules/NickContainer/NickContainer'
// styles
import "./UserPersonalInfo.css"
// icons
import usersIcon from "../../../assets/img/users.svg"
import locationIcon from "../../../assets/img/location.svg"

const UserPersonalInfo: React.FC = () => {

    const profileContext = useContext(UserProfileContext)

    return (
        <>
            <NickContainer
                avatar={profileContext?.userProfile?.avatar_url}
                fullName={profileContext?.userProfile?.name}
                nickName={profileContext?.userProfile?.login}
            />
            <p className='userBio'>{profileContext?.userProfile?.bio}</p>
            <PrimaryButton type='button' className='followUserBtn'>Follow</PrimaryButton>
            <div className='followersFollowingContainer'>
                <div className='followersWrapper'>
                    <img src={usersIcon} alt="users" />
                    <p>{profileContext?.userProfile?.followers} <span className='grayText'>followers</span></p>
                </div>
                ◦ <p>{profileContext?.userProfile?.following} <span className='grayText'>following</span></p>
            </div>
            {profileContext?.userProfile?.location && (
                <div className='locationWrapper'>
                    <img src={locationIcon} alt="location" /> {profileContext?.userProfile?.location}
                </div>
            )}

        </>
    )
}

export default UserPersonalInfo