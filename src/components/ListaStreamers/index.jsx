import React from "react";
import "./styles.css";

import { FaTwitch, FaExternalLinkAlt } from "react-icons/fa";

function ListaStreamers() {
	return (
		<div className="container-lista-streamers">
			<h4>Streamers</h4>
			<div className="conteudo-lista-streamers">
				<ul className="lista-streamers">
					<li className="linha-streamer">
						<p>Nome</p> <p>Seguidores</p>
						<FaTwitch size={20} />
					</li>
					<li className="linha-streamer">
						<p>Pedro </p> <FaExternalLinkAlt size={20} />{" "}
					</li>
					<li className="linha-streamer">
						<p>julio </p> <FaExternalLinkAlt size={20} />{" "}
					</li>
					<li className="linha-streamer">
						<p>Nome </p> <FaExternalLinkAlt size={20} />{" "}
					</li>
					<li className="linha-streamer">
						<p>Nome </p> <FaExternalLinkAlt size={20} />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ListaStreamers;
