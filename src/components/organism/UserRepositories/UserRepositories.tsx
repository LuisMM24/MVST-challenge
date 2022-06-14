import React, { useState } from 'react'
// components
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton'
// styles
import "./UserRepositories.css"
// icons
import bookIcon from "../../../assets/img/book.svg"
import InputText from '../../atoms/InputText/InputText'
import RepositoryCard from '../../molecules/RepositoryCard/RepositoryCard'

const UserRepositories: React.FC = () => {
    const [inputSearchValue, setInputSearchValue] = useState<string>("")
    const handleFilter = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setInputSearchValue(e.target.value)
    }

    return (
        <article>
            <div className='manageReposWrapper'>
                <PrimaryButton className='newRepoBtn' type="button">
                    <img src={bookIcon} alt="repository" />
                    <span>New</span>
                </PrimaryButton>
                <div className='repoFiltersWrapper'>
                    <InputText
                        value={inputSearchValue}
                        placeholder="Find a repository"
                        handleChange={handleFilter}
                    />
                </div>
            </div>
            <section>
                <RepositoryCard
                    isPrivateRepo
                    language='Javascript'
                    name='MVC'
                    updateAt='2021-12-13T08:32:29Z'
                />
            </section>
        </article>
    )
}

export default UserRepositories