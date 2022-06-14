import React, { useContext, useState } from 'react'
// components
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton'
import InputText from '../../atoms/InputText/InputText'
import RepositoryCard from '../../molecules/RepositoryCard/RepositoryCard'
// context
import { UserProfileContext } from '../../../context/UserProfileContext'
// custom hook
import useFetchUserProfile from '../../../hooks/useFetchUserProfile'
// styles
import "./UserRepositories.css"
// icons
import bookIcon from "../../../assets/img/book.svg"

const UserRepositories: React.FC = () => {
    const [inputSearchValue, setInputSearchValue] = useState<string>("")
    const userProfile = useContext(UserProfileContext)
    const [repos, isLoading, error] = useFetchUserProfile<IUserRepository[]>(`/${userProfile?.login}/repos`)
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
            <section className='reposWrapper'>
                {(isLoading && <h1>Loading</h1>) || (
                    (error && <h1>Error</h1>) ||
                    repos?.map(repo => (
                        <RepositoryCard
                            key={repo.id}
                            isPrivateRepo={repo.private}
                            language={repo.language}
                            name={repo.name}
                            updateAt={repo.updated_at}
                        />
                    ))
                )
                }

            </section>
        </article>
    )
}

export default UserRepositories