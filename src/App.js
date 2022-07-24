function App() {
	//un composant react peut etre decomposer en trois (03) parties (on peut les appelés des boites)
	/*
	  ------------------------------------------------
		EXPLICATION DE LA COMMUNICATION DES 03 BOITES
	  -----------------------------------------------

	  le composant contient d'abord des données ou un état se trouvant au niveau du state(boîte1)
	  ces données ou etats vont etre affichés au niveau du render (boite3)
	  ensuite nous pourrons attribuer de manière arbitraire des comportements(boite2) aux elements affichés
		à travers des evenements
	  cela va jouer sur les données changeant ainsi le state(boite1)
	  et reactualisant l'affichage(boite3)
	  (rerender (terme technique des dev REACT pour parler de reactualisation)) 

	  d'où le dynamisme ou reactivité du composant en question
	*/
	return <h1>Bonjour Ivan</h1>;
}
export default App;
