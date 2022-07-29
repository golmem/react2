
//recupération des données (props) transmises en paramètre par destructuring
export default function Fruit ({fruitInfo,onFruitDelete}){
    //state (boite1)

    //comportements (boite2)

    //render(boite3)
    return (
        <li key={fruitInfo.id}>
			{fruitInfo.name}
		    <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
		</li>
    );
};

