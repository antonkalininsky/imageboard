import Post from '/src/components/Post'
import CreatePostForm from '/src/components/CreatePostForm'
import { usePosts } from '/src/contexts/PostsContext'
import { useState, useEffect } from 'react'

export default function Main() {
    // context import
    const posts = usePosts()

    // states
    const [postList, setPostList] = useState([])

    // hooks
    useEffect(() => {
        setPostList(posts.posts.map((data) => <Post data={data} key={data.id} />))
    },
        [posts])

    return (
        <div className='main'>
            {postList}
            <CreatePostForm />
        </div>
    )
}