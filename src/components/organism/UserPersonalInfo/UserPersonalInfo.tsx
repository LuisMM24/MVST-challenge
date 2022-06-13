import React from 'react'
// components
import NickContainer from '../../molecules/NickContainer/NickContainer'
// styles
import "./UserPersonalInfo.css"
const UserPersonalInfo: React.FC = () => {
    return (
        <section>
            <NickContainer
                avatar="https://avatars.githubusercontent.com/u/91225705?v=4"
                fullName='Luis Molina'
                nickName='luisMm24'
            />
            <p className='userBio'>"Hi, my name is Luis, im 22 years old.I'm a front end developer and I love playing the guitar and videogames."</p>
        </section>
    )
}

export default UserPersonalInfo