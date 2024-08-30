import React from "react";
import "./styles.css";
import ListaStreamers from "../ListaStreamers";
import SocialMediaFuriaFuriosos from "../SocialMediaFuriaFuriosos";

function Furiosos() {
	return (
		<>
		<div className='divisoria-top-furiosos'></div>
		<div id="container-furiosos">
			<h2>Acompanhe nossos FURIOSOS!</h2>
			<div className="conteudo-container-furiosos">
				<SocialMediaFuriaFuriosos />
				<div className="divisoria-conteudo-furiosos">
				</div>
				<ListaStreamers />
			</div>
		</div>
		</>
		
	);
}

export default Furiosos;
