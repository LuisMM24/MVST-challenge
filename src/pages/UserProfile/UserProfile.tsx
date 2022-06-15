import React, { useContext } from 'react'
// router
import { Route, Routes } from 'react-router-dom'
import UserNavCarousell from '../../components/organism/UserNavCarousell/UserNavCarousell'
// components
import UserPersonalInfo from '../../components/organism/UserPersonalInfo/UserPersonalInfo'
import UserRepositories from '../../components/organism/UserRepositories/UserRepositories'
import { UserProfileContext } from '../../context/UserProfileContext'
// styles
import "./UserProfile.css"

const UserProfile: React.FC = () => {
    const profileContext = useContext(UserProfileContext)
    /* states of context to get controlled the re-renders*/
    if (profileContext?.error) return <h1 className='centerText'>User not found</h1>
    if (profileContext?.isLoading) return <h1 className='centerText'>Loading</h1>
    return (
        <div className='AppBodySection'>
            <section className='userPersonalInfoSection'>

                <UserPersonalInfo />
            </section>
            <section className='UserNavWrapper'>
                <UserNavCarousell />
                <hr />
                <Routes>
                    <Route path="*/repositories" element={<UserRepositories />} />
                    <Route path="*" element={<UserRepositories />} />
                </Routes>
            </section>
        </div>
    )
}

export default UserProfile