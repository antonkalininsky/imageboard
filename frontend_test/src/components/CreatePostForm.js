import { useState } from "react"
import { usePostsDispatch } from "/src/contexts/PostsContext"

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
            name: name || 'Аноним',
            text
        })
        // cleanin
        setText('')
        setName('')
    }

    return (
        <div>
            <div>
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
            <div>
                <div>
                    Текст поста
                </div>
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                >
                </textarea>
            </div>
            <button
                onClick={() => handleSubmitButton(text)}
            >
                Создать пост
            </button>
        </div>
    )
}