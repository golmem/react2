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
