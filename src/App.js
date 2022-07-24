//importation de notre premier Hook
import { useState } from "react";

function App() {
	//state(boite1)
	/*
		//les fonctions speciales de la librairie react sont appélées des Hooks
		//useState est une fonction Speciale de la librairie react permettant de definir un state
		//notre fonction useState prendra 1 comme valeur d'initialisation
	*/
	useState(1);

	//render (boite3)
	return <h1>1</h1>;
}
export default App;
