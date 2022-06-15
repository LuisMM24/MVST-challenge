import React, { useContext, useState } from 'react'
// react debounce input
import debounce from "lodash.debounce"
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
    /* User context */
    const profileContext = useContext(UserProfileContext)
    /* Custom hook  */
    const [repos, isLoading, error] = useFetchUserProfile<IUserRepository[]>(`/${profileContext?.userProfile?.login}/repos`)
    /* State to filter repos */
    const [filteredRepos, setFilteredRepos] = useState<IUserRepository[] | null>(null)

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (repos) {
            /* In this filtering we use lowerCase method to ignore case sensitive */
            /* Includes method tries to find this input value in the repo array */
            const reposFound = repos.filter((repo) =>
                repo.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
            setFilteredRepos([...reposFound])
        }
    }

    const handleFilterDebounced = debounce(handleFilter, 300);

    return (
        <article>
            <div className='manageReposWrapper'>
                <PrimaryButton className='newRepoBtn' type="button">
                    <img src={bookIcon} alt="repository" />
                    <span>New</span>
                </PrimaryButton>
                <div className='repoFiltersWrapper'>
                    <InputText
                        placeholder="Find a repository"
                        handleChange={handleFilterDebounced}
                    />
                </div>
            </div>
            <section className='reposWrapper'>

                {filteredRepos && <p className='grayText'>{`${filteredRepos?.length} results matched`}</p>}

                {(isLoading && <h1>Loading</h1>) || (

                    (error && <h1>{error}</h1>) || (
                        /* Complex condition, if filteredRepos state is null, map the repos state */
                        (filteredRepos || repos)?.map(repo => (
                            <RepositoryCard
                                key={repo.id}
                                isPrivateRepo={repo.private}
                                language={repo.language}
                                name={repo.name}
                                updateAt={repo.updated_at}
                            />
                        ))
                    )
                )

                }

            </section>
        </article>
    )
}

export default UserRepositories