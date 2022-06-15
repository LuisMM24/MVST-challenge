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
    const userProfile = useContext(UserProfileContext)
    return (
        <>
            <NickContainer
                avatar={userProfile?.avatar_url}
                fullName={userProfile?.name}
                nickName={userProfile?.login}
            />
            <p className='userBio'>{userProfile?.bio}</p>
            <PrimaryButton type='button' className='followUserBtn'>Follow</PrimaryButton>
            <div className='followersFollowingContainer'>
                <div className='followersWrapper'>
                    <img src={usersIcon} alt="users" />
                    <p>{userProfile?.followers} <span className='grayText'>followers</span></p>
                </div>
                ◦ <p>{userProfile?.following} <span className='grayText'>following</span></p>
            </div>
            {userProfile?.location && (
                <div className='locationWrapper'>
                    <img src={locationIcon} alt="location" /> {userProfile?.location}
                </div>
            )}

        </>
    )
}

export default UserPersonalInfo