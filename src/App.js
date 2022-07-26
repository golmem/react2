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
		const fruitsCopy = [...fruits];
		const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
		setFruits(fruitsCopyUpdated);
	};
	//on defini la fonction qui permettra de traiter la soumission du formulaire
	const handleSubmit = (event) => {
		//empecher le rechargement de la page
		event.preventDefault();
		alert("handleSubmit");
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
			{/* 2. SOUMISSION DU FORMULAIRE */}
			<form action="submit" onSubmit={handleSubmit}>
				<input type="text" placeholder="ajouter un fruit" />
				<button>Ajouter +</button>
			</form>
		</div>
	);
}
export default App;
