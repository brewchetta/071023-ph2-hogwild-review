import React, { useState } from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"

import hogs from "../porkers_data";

//// There's no reason for us to create a console.hog method, this is for fun
console.hog = console.log
////

function App() {

	const [filterGreased, setFilterGreased] = useState("all")
	// all OR greased
	// ideally if state is on/off we would use a boolean (true/false)

	const [sortBy, setSortBy] = useState("none")
	// sort by: none, name, or weight
	// because sort has three possible states we'll use a string

	return (
		<div className="App">

			<Nav setFilterGreased={setFilterGreased}
			filterGreased={filterGreased}
			sortBy={sortBy}
			setSortBy={setSortBy} />
			{/* Nav -> prop: setFilterGreased so Nav can change what we're filtering */}
			{/* Nav -> prop: filterGreased so Nav can change the text on the filter button */}
			{/* Nav -> prop: sortBy so the select tag inside knows what the current state is */}
			{/* Nav -> prop: setSortBy so Nav can change the sortBy state */}

			<HogsList hogs={hogs} filterGreased={filterGreased} sortBy={sortBy} />
			{/* HogsList -> prop: hogs because HogsList will display them */}
			{/* HogsList -> prop: filterGreased so HogsList knows whether or not to filter hogs */}
			{/* HogsList -> prop: sortBy so HogsList knows how to sort */}

		</div>
	);
}

export default App;
