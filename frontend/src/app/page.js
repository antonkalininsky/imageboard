'use client'

import PostElement from './components/PostElement'
import CreatePostForm from './components/CreatePostForm'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Home() {

  // store
  // const test = useSelector(state => state.test)

  // states
  const [dataList, setDataList] = useState([
    {
      name: 'ОП',
      dateTime: '24.08.2023 Чт 9:28:40',
      number: 1,
      links: [
        {
          id: 0,
          targetId: 1,
          targetNumber: 2
        }
      ],
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

  // hooks
  useEffect(() => {
    setPostList(dataList.map((data) => <PostElement data={data} key={data.id} />))
  },
  [dataList])

  // funs
  function createPost(text, name = 'Аноним') {
    setDataList(
      [...dataList, {
        name,
        dateTime: getDateTime(),
        number,
        links: [],
        text,
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
      {/* {test} */}
    </main>
  )
}
