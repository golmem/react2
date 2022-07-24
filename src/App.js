//importation de notre premier Hook
import { useState } from "react";

function App() {
	//state(boite1)
	/*
		//on crée notre const tableau qui recuperera la valeur du state defini
		//on utilisera le destructuring pour affecter et modifier notre variable tableau
		//on aura donc un tableau avec 
			-compteur pour le nom la variable 
			-et setCompteur comme setter ou mutateur de notre compteur
			c'est avec le setter que la modification des données de notre variable aura lieu
	*/
	const [compteur, setCompteur] = useState(1);

	//render (boite3)
	//utilisation de l'interpolation JSX pour afficher du javascript
	return <h1>{compteur}</h1>;
}
export default App;
