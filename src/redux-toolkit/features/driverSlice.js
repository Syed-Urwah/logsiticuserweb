const { createSlice } = require("@reduxjs/toolkit");

const driverSlice = createSlice({
    name:"acceptDriver",
    initialState:{ 
        acceptedDrivers:null,
        confirmDriver:null,
    },
    reducers:{
        setAcceptDriver: (state, action) => {  
            state.confirmDriver = action.payload; 
        },
        ResetAcceptDriver: (state, action)=>{
            state.confirmDriver = null;
        },
        setDriverslist: (state, action) =>{
            state.acceptedDrivers = action.payload;
        },
        ResetDriverslist: (state, action) =>{
            state.acceptedDrivers = null;
        }
    }
});

export default driverSlice.reducer;
export const { setAcceptDriver, setDriverslist, ResetAcceptDriver, ResetDriverslist } = driverSlice.actions;