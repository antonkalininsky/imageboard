import Image from 'next/image'
import PostElement from './components/PostElement'
import CreatePostForm from './components/CreatePostForm'

export default function Home() {
  const dataList = [
    {
      text: 'hello 1'
    },
    {
      text: 'hello 2'
    },
    {
      text: 'hello 3'
    },
    {
      text: 'hello 4'
    },
  ]
  const postList = dataList.map((data) => <PostElement data={data}/>)
  return (
    <main className="flex min-h-screen flex-col p-24">
      {postList}
      <CreatePostForm />
    </main>
  )
}
