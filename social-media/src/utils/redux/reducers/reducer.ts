import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    isLoggedIn: false,
};

const sliceState = createSlice({
    name: "state",
    initialState: intialState,
    reducers: {
        handleAuth: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

const reducer = {
    state: sliceState.reducer,
};

export const { handleAuth } = sliceState.actions;
export default reducer;