import userReducer from "./features/signinSlice";
import driverReducer from './features/driverSlice'
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    user: userReducer,
    driverData: driverReducer
})


const persistConfig = {
    key: 'root',
    storage,
}
// const driverPersistConfig = {
//     key: 'confirmDriver',
//     storage,
// }

const persistedReducer = persistReducer(persistConfig, rootReducer); 

export const store = configureStore({
    reducer: {
        root:persistedReducer,
        devTools: true,
        middleware: [ thunk]
    },
})

export const persistor = persistStore(store);