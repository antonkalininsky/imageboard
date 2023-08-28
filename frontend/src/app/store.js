import {configureStore} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        test: 'hello world'
    },
    reducers: {
        addPost: (state, post) => {
            state.posts.push(post)
        }
    }
})

const makeStore = () => configureStore({
    reducer: {
        posts: postsSlice.reducer
    }
});

export const wrapper = createWrapper(makeStore, {debug: true});