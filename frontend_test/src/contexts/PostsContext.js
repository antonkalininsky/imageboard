import { createContext, useContext, useReducer } from "react";

export const PostContext = createContext({})
export const PostDispatchContext = createContext(null)

export function PostsProvider({ children }) {
    const [posts, dispatch] = useReducer(
        postsReducer,
        initialPosts
    )
    return (
        <PostContext.Provider value={posts}>
            <PostDispatchContext.Provider value={dispatch}>
                {children}
            </PostDispatchContext.Provider>
        </PostContext.Provider>
    )
}

function postsReducer(posts, action) {
    switch (action.type) {
        case 'add': {
            // parsing for answers
            parseForAnswers(posts, action.text, posts.idCounter)
            // adding post
            const newPosts = [...posts.posts, {
                name: action.name,
                dateTime: getDateTime(),
                number: posts.numberCounter,
                answers: [],
                text: action.text,
                id: posts.idCounter
            }]
            return {
                idCounter: posts.idCounter + 1,
                numberCounter: posts.numberCounter + 1,
                posts: newPosts
            }
        }
        case 'delete': {
            return posts.posts.filter(post => post.id !== action.id)
        }
        default: {
            throw Error(`Unknown action: ${action.type}`)
        }
    }
}

function parseForAnswers(posts, str, targetId) {
    const matches = new Set([...str.matchAll(/>>\d+/g)].map((match) => match[0]))
    matches.forEach((match) => {
        const id = Number(match.slice(2))
        posts.posts.find((post) => post.id === id).answers.push(targetId)
    })
}

function getDateTime() {
    const dateSrc = new Date()
    const date = dateSrc.toLocaleDateString('ru')
    const weekday = dateSrc.getDay()
    const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    const time = `${dateSrc.getHours()}:${dateSrc.getMinutes()}:${dateSrc.getSeconds()}`
    return `${date} ${weekdays[weekday]} ${time}`
}

const initialPosts = {
    idCounter: 2,
    numberCounter: 3,
    posts: [
    {
        name: 'ОП',
        dateTime: '24.08.2023 Чт 9:28:40',
        number: 1,
        answers: [33],
        text: 'Сап',
        id: 0
    },
    {
        name: 'Аноним',
        dateTime: '25.08.2023 Пт 9:28:40',
        number: 2,
        answers: [],
        text: 'Нет',
        id: 1
    },
]
}

export function usePosts() {
    return useContext(PostContext)
}

export function usePostsDispatch() {
    return useContext(PostDispatchContext)
}

