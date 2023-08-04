import React, { useState } from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"

import hogs from "../porkers_data";

console.hog = console.log

function App() {

	const [filterGreased, setFilterGreased] = useState("all")
	// all OR greased

	// make extra emphasis on PROPS
	// make notes about optimal solution / what Chett would do

	return (
		<div className="App">
			<Nav setFilterGreased={setFilterGreased} filterGreased={filterGreased} />
			<HogsList hogs={hogs} filterGreased={filterGreased} />
		</div>
	);
}

export default App;

// POTENTIAL CODE CHALLENGE THINGS

// PROPS

// COMPONENT

// FILTER

// useEffect fetch

// fetch POST

// STATE