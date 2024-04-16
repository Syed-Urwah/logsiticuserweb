"use client"
import { store } from "./store";
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const { Provider } = require("react-redux");

export function ReduxProvider({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}