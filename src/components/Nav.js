import React from "react";

// The Nav component is declared with an arrow function
// Ideally we would make this a normal function for consistency
const Nav = ({ filterGreased, setFilterGreased }) => {
	// PROPS: filterGreased, setFilterGreased

	function handleClick() {
		setFilterGreased( filterGreased === "all" ? "greased" : "all")
	}
	// the handleClick sets filterGreased to "all" or "greased" depending on whether
	// it's already "all" or not

	// Best practice is to make the "handleClick" function name more specific
	// We may have more than one click event so "handleClick" could be too generic

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
			{/* button onClick: handleClick in order to change filterGreased */}
			{/* the ternary in the button will show "Show All" or "Show Greased" depending on state */}

		</div>
	);
};

export default Nav;
