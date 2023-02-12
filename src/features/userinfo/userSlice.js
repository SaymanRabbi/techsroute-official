import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: "",
    token: null,
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.record.email;
            state.token = action.payload.token;
        }
    }
})

export const { login } = userSlice.actions;

export default userSlice.reducer;