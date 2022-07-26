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

	//utilisation de notre second hook useRef
	//le hook useRef ne permet pas le re-render ce qui fait qu'il est tres peu utilisé
	const inputRef = useRef();

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
		console.log(inputRef.current.value);
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
			{/* 3. TRAITEMENT DES DONNÉES DU FORMULAIRE METHODE 1 */}
			<form action="submit" onSubmit={handleSubmit}>
				{/**on utilise le mot clé ref pour lier notre const inputRef a notre input */}
				<input ref={inputRef} type="text" placeholder="ajouter un fruit" />
				<button>Ajouter +</button>
			</form>
		</div>
	);
}
export default App;
