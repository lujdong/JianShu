import React, { FC } from 'react'

import Header from '../components/Header'
import PostList from '../components/PostList'
import Sidebar from '../components/Sidebar'
type Props = {

};
const IndexView: FC = (props: Props) => {
    return (
        <>
            <Header></Header>
            <div className="main-content">
                <PostList />
                <Sidebar />
            </div>
        </>
    )
}

export default IndexView
