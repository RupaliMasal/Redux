import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cartCount = useSelector((store) => store.cart.count);  //Subscribing to Store

	return (
		<div className="navbar">
			<div className="logo">LOGO</div>
			<div className="others">AboutUs</div>
			<div className="cart">Cart: {cartCount}</div>
		</div>
	);
};

export default Navbar;
