'use client'

import PostElement from './components/PostElement'
import CreatePostForm from './components/CreatePostForm'
import { useState, useEffect } from 'react'

export default function Home() {

  const [dataList, setDataList] = useState([
    {
      name: 'ОП',
      dateTime: '24.08.2023 Чт 9:28:40',
      number: 1,
      links: [1],
      text: 'Сап /б/',
      id: 0
    },
    {
      name: 'Аноним',
      dateTime: '25.08.2023 Пт 9:28:40',
      number: 2,
      links: [],
      text: 'Нет',
      id: 1
    },
  ])
  const [postList, setPostList] = useState([])
  const [idCounter, setIdCounter] = useState(2)
  const [number, setNumber] = useState(3)

  useEffect(() => {
    setPostList(dataList.map((data) => <PostElement data={data} key={data.id} />))
  },
  [dataList])

  function createPost(value) {
    setDataList(
      [...dataList, {
        name: 'Аноним',
        dateTime: getDateTime(),
        number,
        links: [],
        text: value,
        id: idCounter
      }]
    )
    setIdCounter(idCounter + 1)
    setNumber(number + 1)
  }

  function getDateTime() {
    const dateSrc = new Date()
    const date = dateSrc.toLocaleDateString('ru')
    const weekday = dateSrc.getDay()
    const weekdays = ['Вс', 'Пн', 'Вт', 'Ср' ,'Чт' ,'Пт' ,'Сб']
    const time = `${dateSrc.getHours()}:${dateSrc.getMinutes()}:${dateSrc.getSeconds()}`
    return `${date} ${weekdays[weekday]} ${time}`
  }

  return (
    <main className="flex min-h-screen flex-col p-24">
      {postList}
      <CreatePostForm createPost={createPost} />
    </main>
  )
}
