import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './task/taskSlice'
import userReducer from './user/userSlice';


export const store = configureStore({
  reducer: { 
    task: taskReducer,  
    user: userReducer
  }
})


// Lấy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
