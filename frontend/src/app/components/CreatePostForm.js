'use client'

import { useState } from "react"

export default function CreatePostForm({createPost}) {

    const [text, setText] = useState('')
    return (
        <div className="mt-5 mx-2">
            <input 
                value={text} 
                onChange={e => setText(e.target.value)} 
                className="p-3 mr-2" 
            />
            <button 
                className="p-3 bg-green-500"
                onClick={() => createPost(text)}    
            >
                Создать пост
            </button>
        </div>
    )
}