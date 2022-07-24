//importation de notre premier Hook
import { useState } from "react";

function App() {
	//state(boite1)
	const [compteur, setCompteur] = useState(1);

	//comportements
	const handleClick = () => {
		//modifcation de la valeur de compteur
		setCompteur(compteur + 1);
	};
	//render (boite3)
	return (
		<div>
			<h1>{compteur}</h1>
			{/*
			 *ajout de l'evenement onClick qui signifie au click du bouton appel moi la fonction handleClick
			 *le handleClick est defini au niveau de la boite2 etant un comportement
			 */}
			<button onClick={handleClick}>increment</button>
		</div>
	);
}
export default App;
