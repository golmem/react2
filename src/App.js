//importation de notre premier Hook useState
import { useState } from "react";
//importation de notre composant enfant Formulaire
import Formulaire from "./components/Formulaire";
//importation de notre composant enfant Fruit
import Fruit from "./components/Fruit";

function App() {
	//state(boite1)
	const [fruits, setFruits] = useState([
		{ id: 1, name: "Abricot" },
		{ id: 2, name: "Banane" },
		{ id: 3, name: "Cerise" },
	]);

	//comportements (BOITE 2)
	//const handleClickSupp = (id) => {
	//	const fruitsCopy = [...fruits];
	//	const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
	//	setFruits(fruitsCopyUpdated);
	//};

	const handleAdd = (fruitToAdd) => {
		const fruitsCopy = [...fruits];
		fruitsCopy.push(fruitToAdd);
		setFruits(fruitsCopy);
	};

	const afficherFruitPrefere = (fruitNom) => {
		//alert('mon fruit préféré: '+fruitNom)
		alert(`j'adore ce fruit : ${fruitNom}`);
	};

	//render (boite3)
	return (
		<div>
			<h1>Liste de fruit</h1>
			<ul>
				{fruits.map((fruit) => {
					return (
						<div>
							<Fruit
								fruitInfo={fruit}
								actionClick={() => afficherFruitPrefere(fruit.name)}
								key={fruit.id}
							/>
						</div>
					);
				})}
			</ul>

			{/*le tableau fruits et son mutateur setFruits sont passés en tant que props recupérés par le formulaire */}
			<Formulaire handleAdd={handleAdd} />
		</div>
	);
}
export default App;
