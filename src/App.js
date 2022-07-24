//importation de notre premier Hook
import { useState } from "react";

function App() {
	//state(boite1)
	//initialisation de notre state en un tableau d'objet
	const [fruits, setFruits] = useState([
		{ id: 1, name: "Abricot" },
		{ id: 2, name: "Banane" },
		{ id: 3, name: "Cerise" },
	]);
	//comportements

	//render (boite3)
	return (
		<div>
			<h1>Liste de fruit</h1>
			<ul>
				{/*
				 *map va nous permettre de boucler sur notre state fruits
				 * et de retourner une par une les valeurs a linterieur
				 * comme une boucle foreach
				 */}

				{fruits.map((fruit) => {
					return <li key={fruit.id}>{fruit.name}</li>;
				})}
			</ul>
		</div>
	);
}
export default App;
