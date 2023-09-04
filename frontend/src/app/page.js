'use client'

import PostElement from './components/PostElement'
import CreatePostForm from './components/CreatePostForm'
import { useState, useEffect } from 'react'
import { PostsProvider, usePosts } from './PostsContext'

export default function Home() {
  // context imports
  const posts = usePosts()

  // states
  const [postList, setPostList] = useState([])

  // hooks
  useEffect(() => {
    setPostList(posts.map((data) => <PostElement data={data} key={data.id} />))
  },
    [posts])

  return (
    <PostsProvider>
      <main className="flex min-h-screen flex-col p-24">
        {postList}
        <CreatePostForm />
      </main>
    </PostsProvider>
  )
}
