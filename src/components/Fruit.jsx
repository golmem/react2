
//recupération des données (props) transmises en paramètre par destructuring
export default function Fruit ({fruitInfo,actionClick}){
    //state (boite1)

    //comportements (boite2)

    //render(boite3)
    return (
        <li>
			{fruitInfo.name}
		    <button onClick={actionClick}>X</button>
		</li>
    );
};

