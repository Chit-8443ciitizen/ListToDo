import { createSlice } from '@reduxjs/toolkit';
import { getAllTask } from '../../func-task-user/taskFunction';
import Task from "../../interfaces/task"
import { AppDispatch } from '../store'; // Đảm bảo import AppDispatch từ store của bạn

interface TaskState {
    taskList: Task[];
    editingTask: Task | null;
    loading: boolean;
}

const initialState: TaskState = {
    taskList: [],
    editingTask: null,
    loading: false,
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTaskList(state, action) {
            state.taskList = action.payload;
        },
        setEditingTask(state, action) {
            state.editingTask = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const { setTaskList, setEditingTask, setLoading } = taskSlice.actions;

// Thunk action creator để lấy dữ liệu tasks từ server
export const fetchTasks = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const tasks = await getAllTask();
        dispatch(setTaskList(tasks));
    } catch (error) {
        // Xử lý lỗi ở đây nếu cần thiết
        console.error('Error fetching tasks:', error);
    } finally {
        dispatch(setLoading(false));
    }
};

export default taskSlice.reducer;
