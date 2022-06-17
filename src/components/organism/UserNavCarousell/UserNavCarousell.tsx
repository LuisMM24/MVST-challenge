import React from 'react'
// router
import { Link } from 'react-router-dom'
// styles
import "./UserNavCarousell.css"
const UserNavCarousell: React.FC = () => {
    return (
        <nav className='userNavWrapper'>
            <ul>
                <li>
                    <Link to="#">
                        Overview
                    </Link>
                </li>
                <li className='selected'>
                    <Link to="#">
                        Repositories
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        Packages
                    </Link>

                </li>
                <li>
                    <Link to="#">
                        Stars
                    </Link>

                </li>
            </ul>
        </nav>

    )
}

export default UserNavCarousell