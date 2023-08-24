'use client'

import Image from 'next/image'
import PostElement from './components/PostElement'
import CreatePostForm from './components/CreatePostForm'
import { useState, useEffect } from 'react'

export default function Home() {

  const [dataList, setDataList] = useState([
    {
      text: 'hello 1',
      id: 0
    },
    {
      text: 'hello 2',
      id: 1
    },
    {
      text: 'hello 3',
      id: 2
    },
    {
      text: 'hello 4',
      id: 3
    },
  ])
  const [postList, setPostList] = useState([])
  const [cou, setCou] = useState(4)

  useEffect(() => {
    setPostList(dataList.map((data) => <PostElement data={data} key={data.id} />))
  },
  [dataList])

  function createPost(value) {
    setDataList(
      [...dataList, {
        text: value,
        id: cou
      }]
    )
    setCou(cou + 1)
  }

  return (
    <main className="flex min-h-screen flex-col p-24">
      {postList}
      <CreatePostForm createPost={createPost} />
    </main>
  )
}
