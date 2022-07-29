
//recupération des données transmises
export default function Fruit (props){
    //state (boite1)
    //les variables fruitInfo et onFruitDelete ont pour valeur props.fruitInfo et props.onFruitDelete
    //utilisons le destructuring
    const { fruitInfo, onFruitDelete } = props;
    //comportements (boite2)

    //render(boite3)
    return (
        <li key={fruitInfo.id}>
			{fruitInfo.name}
		    <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
		</li>
    );
};

