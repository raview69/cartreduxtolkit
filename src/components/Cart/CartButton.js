import classes from "./CartButton.module.css";
import { uiActions } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartQuantity = useSelector((state) => state.cart.totalquantity);

	const toggleCartHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
