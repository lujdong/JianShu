import React, { FC } from 'react'
import AuthorList from '../AuthorList'

const Sidebar: FC = () => {
    return (
        <div className="sidebar">
            sidebar
            <AuthorList />
        </div>
    )
}

export default Sidebar
