import { createContext, useContext, useReducer } from "react";

export const PostContext = createContext([])
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
            return [...posts, {
                name: action.name,
                dateTime: getDateTime(),
                number: action.number,
                links: action.links,
                text: action.text,
                id: action.id
            }]
        }
        case 'delete': {
            return posts.filter(post => post.id !== action.id)
        }
        default: {
            throw Error(`Unknown action: ${action.type}`)
        }
    }
}

function getDateTime() {
    const dateSrc = new Date()
    const date = dateSrc.toLocaleDateString('ru')
    const weekday = dateSrc.getDay()
    const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    const time = `${dateSrc.getHours()}:${dateSrc.getMinutes()}:${dateSrc.getSeconds()}`
    return `${date} ${weekdays[weekday]} ${time}`
}

const initialPosts = [
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

export function usePosts() {
    return useContext(PostContext)
}

export function usePostsDispatch() {
    return useContext(PostDispatchContext)
}

