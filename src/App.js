//importation de notre premier Hook
import { useState } from "react";

function App() {
	//state(boite1)
	/*
		//on crée notre const tableau qui recuperera la valeur du state defini
		//on utilisera le destructuring pour affecter et modifier notre variable tableau
		//on aura donc un tableau avec 
			-tableau pour le nom la variable 
			-et setTableau comme setter ou mutateur de notre tableau
			c'est avec le setter que la modification des données de notre variable aura lieu
	*/
	const [tableau, setTableau] = useState(1);

	//render (boite3)
	return <h1>1</h1>;
}
export default App;
