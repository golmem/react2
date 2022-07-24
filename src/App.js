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
	const handleClickSupp = (id) => {
		console.log(id);
		//1.Copier le state
		//const fruitsCopy = fruits.slice;
		const fruitsCopy = [...fruits]; //utilisation du spread operator

		//2.Manipuler la copie du state

		//3.Modifier le state avec le setter
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
								{/*
								 *ici pour obtenir l'id on passe par une fonction fléchée
								 *qui appel notre fonction pour la suppression et on passe en parametre fruit.id
								 *cela nous permet de recuperer l'id
								 */}
								<button onClick={() => handleClickSupp(fruit.id)}>X</button>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
export default App;
