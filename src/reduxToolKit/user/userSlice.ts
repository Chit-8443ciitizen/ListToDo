import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userCurrent: UserCurrentFirebase | null;
}

interface UserCurrentFirebase {
    user_ID: string;
    user_email: string;
    accessToken: string
}

const initialState: UserState = {
    userCurrent: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<UserCurrentFirebase>) {
            state.userCurrent = action.payload;
          },
        logoutUser(state) {
            state.userCurrent = null;
        },
        clearUser(state) {
            state.userCurrent = null;
        },
    },
});

export const { setUserData, logoutUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
