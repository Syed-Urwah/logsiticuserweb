import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api/customer/login';

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (credentials) => {

        try{
            const response = await axios.post(url, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    "Api-Token": process.env.NEXT_PUBLIC_API_TOKEN
                }
            });
            console.log(response);
                return response.data;
        }catch (error){
            return error.response.data 
        }   
    }
);


const signinSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userData: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload.result;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default signinSlice.reducer;
