import React from "react";
import "./styles.css";
import listaStreamers from "../../utilities/listaStreamers.json";
import { FaRegUser, FaTwitch } from "react-icons/fa";
import CardStreamers from "../CardStreamers";

function ListaStreamers() {
	return (
		<div className="container-lista-streamers">
			<div className="conteudo-lista-streamers">
				<div className="labels-lista-streamers">
					<FaRegUser className="icon-user-label"/><p className="p-label-nomes">Nome</p><p>Seguidores</p><FaTwitch className="icon-twitch-label"/>
				</div>
				<ul className="lista-streamers">
					{
						listaStreamers.map((data) => (
							<CardStreamers key={data.id} data={data}/>
						))
					}
				</ul>
			</div>
		</div>
	);
}

export default ListaStreamers;
