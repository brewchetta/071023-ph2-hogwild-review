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

	// make extra emphasis on PROPS
	// make notes about optimal solution / what Chett would do

	return (
		<div className="App">

			<Nav setFilterGreased={setFilterGreased} filterGreased={filterGreased} />
			{/* Nav -> prop: setFilterGreased so Nav can change what we're filtering */}
			{/* Nav -> prop: filterGreased so Nav can change the text on the filter button */}

			<HogsList hogs={hogs} filterGreased={filterGreased} />
			{/* HogsList -> prop: hogs because HogsList will display them */}
			{/* HogsList -> prop: filterGreased so HogsList knows whether or not to filter hogs */}

		</div>
	);
}

export default App;
