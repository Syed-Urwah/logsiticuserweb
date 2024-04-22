import userReducer from "./features/signinSlice";
import storage from 'redux-persist/lib/storage';
const { configureStore } = require("@reduxjs/toolkit");
import { persistReducer, persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user: persistedReducer,
        devTools: true,
        middleware: [thunk]
    }
})

export const persistor = persistStore(store)
