import React from "react";
import "./styles.css";
import playersFemininos from "../../utilities/playersFemininos.json";
import playersMasculinos from "../../utilities/playersMasculinos.json";
import CardPlayer from "../CardPlayers";

function Elenco() {
	return (
		<div id="container-elenco">
			<div className="background-elenco-masculino">
				<h2>Elenco Masculino</h2>
				<div className="secao-impar">
					<CardPlayer data={playersMasculinos[0]} />
					<CardPlayer data={playersMasculinos[1]} />
				</div>
				<div className="secao-par">
					<CardPlayer data={playersMasculinos[2]} />
					<CardPlayer data={playersMasculinos[3]} />
					<CardPlayer data={playersMasculinos[4]} />
				</div>
				<div className="secao-impar">
					<CardPlayer data={playersMasculinos[5]} />
					<CardPlayer data={playersMasculinos[6]} />
				</div>
			</div>
			<div className="background-elenco-feminino">
				<h2>Elenco Inclusivo</h2>
				<div className="secao-impar">
					<CardPlayer data={playersFemininos[0]} />
					<CardPlayer data={playersFemininos[1]} />
					<CardPlayer data={playersFemininos[2]} />
				</div>
				<div className="secao-par">
					<CardPlayer data={playersFemininos[3]} />
					<CardPlayer data={playersFemininos[4]} />
				</div>
			</div>
		</div>
	);
}

export default Elenco;

// {playersMasculinos.map((player) => (
// 	<CardPlayer key={player.id} data={player} />
// ))}
