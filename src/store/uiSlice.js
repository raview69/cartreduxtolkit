import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: { cartView: false },
	reducers: {
		toggle(state) {
			state.cartView = !state.cartView;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
