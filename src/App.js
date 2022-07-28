//importation de notre premier Hook useState
import { useState } from "react";
//importation de notre composant enfant Fruit
import Fruit from "./components/Fruit";

function App() {
	//state(boite1)
	const [fruits, setFruits] = useState([
		{ id: 1, name: "Abricot" },
		{ id: 2, name: "Banane" },
		{ id: 3, name: "Cerise" },
	]);

	const [nouveauFruit, setNouveauFruit] = useState("");

	//comportements (BOITE 2)
	const handleClickSupp = (id) => {
		const fruitsCopy = [...fruits];
		const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
		setFruits(fruitsCopyUpdated);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const fruitsCopy = [...fruits];

		const id = new Date().getTime();
		const name = nouveauFruit;
		const fruitToAdd = { id, name };
		fruitsCopy.push(fruitToAdd);

		setFruits(fruitsCopy);
		setNouveauFruit("");
	};

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
							{/**appel de notre composant enfant Fruit*/}
							{/*l'utilisation des props se deroule en 3 etapes
								// 1. Passage des données dans le composant enfant à partir du composant parent
								// 2. Recupération des données dans le composant enfant en mettant props comme parametre
								// 3. Consommation des données
							*/}
							<Fruit fruitInfo={fruit} onFruitDelete={handleClickSupp} />
						</div>
					);
				})}
			</ul>
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
