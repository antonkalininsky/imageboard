import React from 'react';
import { wrapper } from './store'

function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    );
}

export default wrapper.withRedux(App)