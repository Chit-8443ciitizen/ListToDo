import { createSlice } from '@reduxjs/toolkit';
interface UserState {
  uid: string | null;
  email: string | null;
  loading: boolean
  // Add other user properties if needed
}
const initialState: UserState = {
  uid: null,
  email: null,
  loading: true
};
const userSliceTest = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.loading = false
    },
  },
});

export const { setUser } = userSliceTest.actions;
export default userSliceTest.reducer;