import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sliceFirst from '../slice';

const rootReducers = combineReducers({
    rootSelector: sliceFirst
});

export const store = configureStore({
    reducer: rootReducers
});