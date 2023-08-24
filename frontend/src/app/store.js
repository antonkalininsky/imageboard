import {configureStore} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

const makeStore = () => configureStore({
    reducer: {}
});

export const wrapper = createWrapper(makeStore, {debug: true});