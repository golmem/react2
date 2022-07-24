//importation de notre premier Hook
import { useState } from "react";

function App() {
	//state(boite1)
	const [compteur, setCompteur] = useState(1);

	//render (boite3)
	return (
		<div>
			<h1>{compteur}</h1>
			<button>increment</button>
		</div>
	);
}
export default App;
