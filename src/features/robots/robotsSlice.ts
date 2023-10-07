import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type Status = 'idle' | 'pending' | 'fulfilled' | 'failed';
type AsyncError = string | null | undefined;

interface Robot {
    id: number;
    name: string;
    email: string;
}

interface iRobotState {
    robots: Robot[];
    status: Status;
    error: AsyncError;
}

const initialState: iRobotState = {
    robots: [],
    status: 'idle',
    error: null,
}

export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
});

const robotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchRobots.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchRobots.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.robots = action.payload;
            })
            .addCase(fetchRobots.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default robotsSlice.reducer;

export const selectRobots = (state: any) => state.robots.robots;