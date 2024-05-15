const { createSlice } = require("@reduxjs/toolkit");

const driverSlice = createSlice({
    name:"acceptDriver",
    initialState:{ 
        acceptedDrivers:null,
        confirmDriver:null,
        acceptedOrderDrivers:null,
        confirmOrderDrivers:[],
        noOfOrderVehicles:0
    },
    reducers:{
        // book a ride state setup
        setConfirmDriver: (state, action) => {  
            state.confirmDriver = action.payload; 
        },
        ResetConfirmDriver: (state, action)=>{
            state.confirmDriver = null;
        },
        setDriverslist: (state, action) =>{
            state.acceptedDrivers = action.payload;
        },
        ResetDriverslist: (state, action) =>{
            state.acceptedDrivers = null;
        },


        // order placement state setup
        setAcceptedOrderDrivers:(state, action)=>{
            state.acceptedOrderDrivers = action.payload;
        },
        setConfirmOrderDrivers:(state, action)=>{
            state.confirmOrderDrivers = action.payload;
        },
        ResetAcceptOrderDrivers: (state, action)=>{
            state.acceptedOrderDrivers = null;
        },
        ResetConfirmOrderDrivers: (state, action)=>{
            state.confirmOrderDrivers = [];
        },

        
        // order placement confirm drivers tacking handling 
        setNoOfOrderVehicles:(state, action) =>{
            state.noOfOrderVehicles = action.payload;
        },
        ResetNoOfOrderVehicles: (state, action)=>{
            state.noOfOrderVehicles = 0;
        }
    } 
});

export default driverSlice.reducer;
export const { setConfirmDriver, setDriverslist, ResetConfirmDriver, ResetDriverslist, setAcceptedOrderDrivers, setConfirmOrderDrivers, ResetAcceptOrderDrivers, ResetConfirmOrderDrivers, setNoOfOrderVehicles, ResetNoOfOrderVehicles } = driverSlice.actions;