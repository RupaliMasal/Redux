import React from "react";
import { incCartCount, decCartCount } from "../ReduxStore/CartCountSlice"
import { useDispatch } from "react-redux";

const Card = () => {
	const dispatch = useDispatch();

	const handleInc = () => {
		dispatch(incCartCount());
	};
    const handleDec = () => {
		dispatch(decCartCount());
	};

	return (
		<div className="card">
			<h3>Product Name:Apple</h3>
			<button onClick={handleInc}>Add To Cart</button>
            <button onClick={handleDec}>Remove To Cart</button>
		</div>
	);
};

export default Card;
