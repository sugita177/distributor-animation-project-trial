import { createSlice } from "@reduxjs/toolkit";

export const positionSlice = createSlice({
    name: 'position',
    initialState: {
        centerX: 0,
        centerY: 0,
        angle: 0,
        radius: 0,
    },
    reducers: {
        increaseAngle: (state) => {
            state.angle += 1;
        },
        decreaseAngle: (state) => {
            state.angle -= 1;
        },
        changeAngle: (state, action) => {
            state.angle = action.payload;
        }
    },
});

export const {increaseAngle, decreaseAngle, changeAngle} = positionSlice.actions;

export default positionSlice.reducer;