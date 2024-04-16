import userReducer from "./features/signinSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer:{
        user : userReducer
    }
})

export default store;
