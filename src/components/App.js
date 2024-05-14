import React, { useState } from "react";
import Nav from "./Nav";
import TileList from "./TileList";
import hogs from "../porkers_data";
import AddHogForm from "./AddHogForm";

function App() {
	const [hogs, setHogs] = useState(hogs);
	const handleAddHog = (newHog) => {
		setHogs([...hogs, newHog]);
	  };

	return (
		<div className="App">
			<Nav />
			<h1>Add Hog</h1>
			<AddHogForm onAddHog={handleAddHog} />
			<TileList hogs={hogs}/>
			</div>
	);
}

export default App;
