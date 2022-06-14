import React from 'react'
// router
import { Route, Routes } from 'react-router-dom'
import UserNavCarousell from '../../components/organism/UserNavCarousell/UserNavCarousell'
// components
import UserPersonalInfo from '../../components/organism/UserPersonalInfo/UserPersonalInfo'
import UserRepositories from '../../components/organism/UserRepositories/UserRepositories'
import UserProfileProvider from '../../context/UserProfileContext'

// styles
import "./UserProfile.css"

const UserProfile: React.FC = () => {
    return (
        <div className='AppBodySection'>
            <UserProfileProvider>
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
            </UserProfileProvider>
        </div>
    )
}

export default UserProfile