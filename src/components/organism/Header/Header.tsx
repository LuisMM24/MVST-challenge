import React from 'react'
// github icon
import githubIcon from "../../../assets/img/github.svg"
const Header: React.FC = () => {
    return (
        <header className='header'>
            <img src={githubIcon} alt="Github" />
        </header>
    )
}

export default Header