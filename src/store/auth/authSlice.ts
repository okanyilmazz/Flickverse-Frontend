import { createSlice } from "@reduxjs/toolkit";
import tokenService from "../../../../../../../../Tobeto/1C/reactdemos/TobetoPlatform/tobeto-platform/src/core/services/tokenService";

const getInitialState = () => {
    if (tokenService.hasToken()) return { isAuthenticated: true };

    return { isAuthenticated: false };
};

const authSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    reducers: {
        addToken: (state, action) => {
            const newToken = action.payload.token;
            state.isAuthenticated = true;
            tokenService.setToken(newToken);
        },
        removeToken: (state) => {
            state.isAuthenticated = false;
            tokenService.removeToken();
        },
    },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;