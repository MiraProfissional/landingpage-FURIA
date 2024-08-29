import React from "react";
import "./styles.css";
import SocialMediaFuria from "../SocialMediaFuria";
import ListaStreamers from "../ListaStreamers";

function Furiosos() {
	return (
		<div id="container-furiosos">
			<h2>Acompanhe nossos FURIOSOS!</h2>
			<div className="conteudo-container-furiosos">
				<SocialMediaFuria />
				<div className="divisoria-furiosos">
					
				</div>
				<ListaStreamers />
			</div>
		</div>
	);
}

export default Furiosos;
