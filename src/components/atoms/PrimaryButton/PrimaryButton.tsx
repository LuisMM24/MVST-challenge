import React from 'react'
import "./PrimaryButton.css"
interface Props {
    handleClick?: () => void
    type: "button" | "submit",
    className?: string,
    children: JSX.Element | JSX.Element[] | string | string[]
}

const PrimaryButton: React.FC<Props> = ({
    handleClick,
    type,
    className,
    children
}) => {
    return (
        <button
            type={type}
            className={`primaryButton ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default PrimaryButton