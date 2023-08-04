import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ filterGreased, setFilterGreased }) => {

	function handleClick() {
		setFilterGreased( filterGreased === "all" ? "greased" : "all")
	}

	return (
		<div className="navWrapper">
			<span className="headerText">TrashPandaWild</span>
			<div className="TwirlyPig">
				<img src={'https://i.pinimg.com/originals/76/38/ae/7638ae657ade274bd98a0ef815d57297.png'} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Fans
			</span>

			<button onClick={ handleClick }>{filterGreased === "greased" ? "Show All" : "Show Greased"}</button>

		</div>
	);
};

export default Nav;
