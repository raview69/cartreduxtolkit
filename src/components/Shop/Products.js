import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { inventoryData } from "../../data";

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{inventoryData.map((item) => (
					<ProductItem
						key={item.id}
						id={item.id}
						title={item.title}
						price={item.price}
						description={item.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
