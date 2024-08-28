import React from "react";
import "./styles.css";
import { FaTwitch, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function CardPlayer(props) {

	const player = props.data

	const avaliarNacionalidade = (nacionalidade) => {
		if (nacionalidade === "Brasileira") {
			return (
				<img
					src={'../images/Bandeiras/brazil-flag-icon.webp'}
					className="foto-nacionalidade-player"
					alt="bandeira-brasileira"
				/>
			);
		} else if (nacionalidade === "Argentina") {
			return (
				<img
					src={'../images/Bandeiras/argentina-flag-icon.png'}
					className="foto-nacionalidade-player"
					alt="bandeira-argentina"
				/>
			);
		} else if (nacionalidade === "Chilena") {
			return (
				<img
					src={'../images/Bandeiras/chile-flag-icon.png'}
					className="foto-nacionalidade-player"
					alt="bandeira-chilena"
				/>
			);
		}
		return null;
	};

	const avaliarCapitao = (capitao) => {
		if (capitao === "true") {
			return <p className="informacao-capitao">Capitão</p>;
		} else {
			return null;
		}
	};


	return (
		<div className="container-card-player">
			<div className="card-player-imagem">
				<img src={player.imagem} className="foto-player" alt="" />
			</div>
			<div className="card-player-informacoes">
				<div className="informacoes-pessoais-players">
					<div className="header-informacoes">
						<p className="informacao-posicao">{player.posicao}</p>
						{avaliarCapitao(player.capitao)}
						{avaliarNacionalidade(player.nacionalidade)}
					</div>
					<div className="header-informacoes-pessoais">
						<h4>{player.nome}</h4>
						<p className="informacao-props-nascimento">{player.nascimento}</p>
					</div>
				</div>
				<div className="redes-sociais-players">
					<li>
						<FaTwitch />
					</li>
					<li>
						<FaInstagram />
					</li>
					<li>
						<FaSquareXTwitter />
					</li>
				</div>
			</div>
		</div>
	);
}

export default CardPlayer;
