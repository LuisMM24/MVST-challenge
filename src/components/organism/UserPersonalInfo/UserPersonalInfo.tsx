import React, { useContext } from 'react'
// context
import { UserProfileContext } from '../../../context/UserProfileProvider'
// components
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton'
import NickContainer from '../../molecules/NickContainer/NickContainer'
// styles
import "./UserPersonalInfo.css"
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
        </>
    )
}

export default UserPersonalInfo