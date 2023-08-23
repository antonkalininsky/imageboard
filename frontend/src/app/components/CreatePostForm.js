'use client'

import { useState } from "react"

export default function CreatePostForm() {
    function createPost() {
        console.log('creating post');
    }

    const [text, setText] = useState('')
    return (
        <div className="mt-5">
            <input 
                value={text} 
                onChange={e => setText(e.target.value)} 
                className="p-3 mr-2" 
            />
            <button 
                className="p-3 bg-green-500"
                onClick={() => createPost()}    
            >
                Создать пост
            </button>
            {text}
        </div>
    )
}