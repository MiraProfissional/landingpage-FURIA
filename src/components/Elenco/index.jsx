import React from "react";
import "./styles.css";
import CardPlayer from "../CardPlayers";
import playersMasculinos from "../../utilities/playersMasculinos.json";

function Elenco() {
	return (
		<div id="container-elenco">
			<div className="background-elenco-masculino">
				<h2>Homens</h2>
          {playersMasculinos.map((player) => (
            <CardPlayer key={player.id} data={player}/>
          ))}
			</div>
			<div className="background-elenco-feminino">
				<h2>Mulheres</h2>
			</div>
		</div>
	);
}

export default Elenco;
