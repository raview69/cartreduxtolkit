import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartredux",
	initialState: {
		items: [],
		totalquantity: 0,
	},
	reducers: {
		addItemToCart(state, actions) {
			const newItems = actions.payload;
			const existingItems = state.items.find((item) => item.id === newItems.id);
			state.totalquantity++;
			if (!existingItems) {
				state.items.push({
					id: newItems.id,
					price: newItems.price,
					quantity: 1,
					totalPrice: newItems.price,
					title: newItems.title,
				});
			} else {
				existingItems.quantity++;
				existingItems.totalPrice = existingItems.totalPrice + newItems.price;
			}
		},
		removeItemToCart(state, actions) {
			const id = actions.payload;
			const existingItems = state.items.find((item) => item.id === id);
			state.totalquantity--;
			if (existingItems.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItems.quantity--;
				existingItems.totalPrice =
					existingItems.totalPrice - existingItems.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
