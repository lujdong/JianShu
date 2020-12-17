import React, { FC } from 'react'
import PostItem from './PostItem'
import './styles/index.less'

const PostList: FC = () => {
    return (
        <div className="post-list">
            post list
            <PostItem />
        </div>
    )
}

export default PostList
