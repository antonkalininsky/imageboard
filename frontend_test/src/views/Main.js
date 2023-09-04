import Post from '/src/components/Post'
import { useState, useEffect } from 'react'

export default function Main() {

    const posts = [
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
    ]

    // states
    const [postList, setPostList] = useState([])

    // hooks
    useEffect(() => {
        setPostList(posts.map((data) => <Post data={data} key={data.id} />))
    },
        [posts])

    return (
        <div>
            {postList}
        </div>
    )
}


// <PostsProvider>
        //   <main className="flex min-h-screen flex-col p-24">
        //     {postList}
        //     <CreatePostForm />
        //   </main>
        // </PostsProvider>