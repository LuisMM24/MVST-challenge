import React from 'react'
// icons
import starIcon from "../../../assets/img/star.svg"
// styles
import "./RepositoryCard.css"

interface Props {
    name: string;
    isPrivateRepo: boolean;
    language: string | null;
    updateAt: string;
}

const RepositoryCard: React.FC<Props> = ({ name, isPrivateRepo, language, updateAt }) => {
    console.log(language);
    const formatUpdateAt = (date: string): string => {
        const dateFormat = new Date(date)
        const monthString = dateFormat.toLocaleString('ENG', { month: 'short' })
        const updateString = `
            Updated on ${dateFormat.getDay()} ${monthString} of ${dateFormat.getFullYear()}
        `
        return updateString
    }

    return (
        <>
            <hr />
            <article className='repoCardWrapper'>
                <div className='repoInformationWrapper'>
                    <div className='repoTitleWrapper'>
                        <h3 className='repoTitle'>
                            {name}
                        </h3>
                        <span className='repoPrivacyText grayText'>
                            {isPrivateRepo
                                ? "Private"
                                : "Public"}
                        </span>
                    </div>
                    <div className='repoLanguageWrapper'>
                        {language && <span className='repoLanguage grayText'>
                            {language}
                        </span>}
                        <span className='repoUpdateAt grayText'>
                            {formatUpdateAt(updateAt)}
                        </span>
                    </div>
                </div>
                <div className='starWrapper'>
                    <button className='starButton'>
                        <img src={starIcon} alt="star" />
                        <span className='grayText'>
                            star
                        </span>
                    </button>
                </div>
            </article>
        </>
    )
}

export default RepositoryCard