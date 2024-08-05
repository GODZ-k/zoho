import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userProfile: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userProfile = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userProfile = null;
        },
        updateAvatar: (state, action) => {
            state.userProfile.avatar = action.payload
        },
        deleteAvatar: (state, action) => {
            state.userProfile.avatar = null
        },
        getUserProfile: (state, action) => {
            state.userProfile = action.payload;
        },
        updateUserProfile: (state, action) => {
            state.userProfile = action.payload;
        },
        verifyOtp: (state, action) => {
            state.userProfile.isPhoneVerified = true
        }
    }
})

export const { login, logout, getUserProfile, updateUserProfile, verifyOtp, updateAvatar , deleteAvatar } = authSlice.actions;

export default authSlice.reducer;