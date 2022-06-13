import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "uiredux",
	initialState: { cartView: false },
	reducers: {
		toggle(state) {
			state.cartView = !state.cartView;
		},
	}, //reducers or actions
});

export const uiActions = uiSlice.actions;

export default uiSlice;
