import React from "react";
import "./styles.css";
import ListaStreamers from "../ListaStreamers";
import SocialMediaFuriaFuriosos from "../SocialMediaFuriaFuriosos";

function Furiosos() {
	return (
		<div id="container-furiosos">
			<h2>Acompanhe nossos FURIOSOS!</h2>
			<div className="conteudo-container-furiosos">
				<SocialMediaFuriaFuriosos />
				<div className="divisoria-furiosos">
					
				</div>
				<ListaStreamers />
			</div>
		</div>
	);
}

export default Furiosos;
