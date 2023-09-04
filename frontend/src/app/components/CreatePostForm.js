'use client'

import { useState } from "react"
import { usePostsDispatch } from "../PostsContext"

export default function CreatePostForm() {

    // context imports
    const postsActionDispatch = usePostsDispatch()

    // states
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    // funs
    function handleSubmitButton(text) {
        // validation
        if (text === '') return
        // submition
        postsActionDispatch({
            type: 'add',
            name: 'test1',
            number: 13,
            links: [],
            text: 'test',
            id: 1
        })
        // cleanin
        setText('')
        setName('')
    }

    return (
        <div className="mt-5 mx-2">
            <div className="py-2">
                <div>
                    Ваше имя
                </div>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="p-3 mr-2"
                />
            </div>
            <div className="py-2">
                <div>
                    Текст поста
                </div>
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="p-3 mr-2"
                >
                </textarea>
            </div>
            <button
                className="p-3 bg-green-500"
                onClick={() => handleSubmitButton(text)}
            >
                Создать пост
            </button>
        </div>
    )
}