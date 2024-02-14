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
        },
        increaseCenterX: (state) => {
            state.centerX += 1;
        },
        decreaseCenterX: (state) => {
            state.centerX -= 1;
        },
        changeCenterX: (state, action) => {
            state.centerX = action.payload;
        },
        increaseCenterY: (state) => {
            state.centerY += 1;
        },
        decreaseCenterY: (state) => {
            state.centerY -= 1;
        },
        changeCenterY: (state, action) => {
            state.centerY = action.payload;
        },
        increaseRadius: (state) => {
            state.radius += 1;
        },
        decreaseRadius: (state) => {
            state.radius -= 1;
        },
        changeRadius: (state, action) => {
            state.radius = action.payload;
        },
    },
});

export const {
                increaseAngle, decreaseAngle, changeAngle,
                increaseCenterX, decreaseCenterX, changeCenterX,
                increaseCenterY, decreaseCenterY, changeCenterY,
                increaseRadius, decreaseRadius, changeRadius
            } = positionSlice.actions;

export default positionSlice.reducer;