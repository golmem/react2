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
							<li key={fruit.id}>
								{fruit.name}
								<button onClick={() => handleClickSupp(fruit.id)}>X</button>
							</li>
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
