//importation de notre premier Hook
import { useState } from "react";

function App() {
	//state(boite1)
	const [fruits, setFruits] = useState([
		{ id: 1, name: "Abricot" },
		{ id: 2, name: "Banane" },
		{ id: 3, name: "Cerise" },
	]);
	//comportements
	const handleClickSupp = () => {
		console.log("connecté");
	};

	//render (boite3)
	return (
		<div>
			<h1>Liste de fruit</h1>
			<ul>
				{fruits.map((fruit) => {
					return (
						<div>
							<li key={fruit.id}>
								{fruit.name}
								<button onClick={handleClickSupp}>X</button>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
export default App;
