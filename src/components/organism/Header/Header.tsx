import React from 'react'
// router navigate 
import { useNavigate } from 'react-router-dom'
// debounce input
import debounce from 'lodash.debounce'
// styles
import "./Header.css"
// components
import InputText from '../../atoms/InputText/InputText'
// github icon
import githubIcon from "../../../assets/img/github.svg"
const Header: React.FC = () => {

    const navigate = useNavigate()

    const searchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        navigate(`/${e.target.value}`)
    }

    const debounceSearch = debounce(searchUser, 400)
    return (
        <header className='header'>
            <img src={githubIcon} alt="Github" />
            <InputText placeholder='Search users' handleChange={debounceSearch} />
        </header>
    )
}

export default Header