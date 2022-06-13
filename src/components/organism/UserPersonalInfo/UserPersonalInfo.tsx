import React from 'react'
import NickContainer from '../../molecules/NickContainer/NickContainer'

const UserPersonalInfo: React.FC = () => {
    return (
        <section>
            <NickContainer
                avatar="https://avatars.githubusercontent.com/u/91225705?v=4"
                fullName='Luis Molina'
                nickName='luisMm24'
            />
            <p>"Hi, my name is Luis, im 22 years old.\r\nI'm a front end developer and I love playing the guitar and videogames."</p>
        </section>
    )
}

export default UserPersonalInfo