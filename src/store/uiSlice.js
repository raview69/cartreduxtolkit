import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = () => {
	return createSlice({
		name: "",
		initialState: { cartView: false },
		reducers: {
			toggle(state) {
				state.cartView = !state.cartView;
			},
		},
	});
};

export const uiActions = uiSlice.action;

export default uiSlice;
