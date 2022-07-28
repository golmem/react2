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
							{/*notre composant fruit a besoin des 
							   données du composant parent pour fonctionner sans problème 
							   nous abordons donc la notion de props des composants
							   ce sont des attributs definis pour passer des données
							   du parent à l'enfant
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
