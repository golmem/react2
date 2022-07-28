//importation de notre premier Hook useState
//importation de notre second Hook useRef
import { useState, useRef } from "react";

function App() {
	//state(boite1)
	const [fruits, setFruits] = useState([
		{ id: 1, name: "Abricot" },
		{ id: 2, name: "Banane" },
		{ id: 3, name: "Cerise" },
	]);

	const [nouveauFruit, setNouveauFruit] = useState("");

	//comportements
	const handleClickSupp = (id) => {
		const fruitsCopy = [...fruits];
		const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
		setFruits(fruitsCopyUpdated);
	};

	//on defini la fonction qui permettra de traiter la soumission du formulaire
	const handleSubmit = (event) => {
		//empecher le rechargement de la page
		event.preventDefault();

		// 1. Copy du state
		const fruitsCopy = [...fruits];

		// 2. Manipulation de la copy du state
		const id = new Date().getTime();
		const name = nouveauFruit;
		const fruitToAdd = { id, name };
		fruitsCopy.push(fruitToAdd); //VERSION 2 REFACTORÉ

		// 3. modifier le state avec le setter
		setFruits(fruitsCopy);
		//liberer le champ input
		setNouveauFruit("");
	};

	//on defini notre fonction fléchée handleChange qui sera appelé lors du changement
	//du champ input de type texte
	const handleChange = (event) => {
		setNouveauFruit(event.target.value);
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
								<button onClick={() => handleClickSupp(fruit.id)}>X</button>
							</li>
						</div>
					);
				})}
			</ul>
			{/* 3. TRAITEMENT DES DONNÉES DU FORMULAIRE METHODE 2 */}
			<form action="submit" onSubmit={handleSubmit}>
				<input
					type="text"
					value={nouveauFruit}
					onChange={handleChange}
					placeholder="ajouter un fruit"
				/>
				<button>Ajouter +</button>
			</form>
		</div>
	);
}
export default App;
