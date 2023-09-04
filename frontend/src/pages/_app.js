'use client'

import { PostsProvider } from '@/app/PostsContext';
import Home from '@/app/page'

export default function MyApp() {
    return (
        <PostsProvider>
            <Home />
        </PostsProvider>
    );
}