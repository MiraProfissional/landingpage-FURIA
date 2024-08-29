import React from "react";
import "./styles.css";
import SocialMediaFuria from "../SocialMediaFuria";

function Furiosos() {
	return (
		<div id="container-furiosos">
			<h2>Acompanhe nossos FURIOSOS!</h2>
			<div className="conteudo-container-furiosos">
				<SocialMediaFuria />
				<div className="divisoria-furiosos"> </div>
				<div className="furiosos-streamers">
					<ul>
						<li>Streamer 1</li>
						<li>Streamer 2</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Furiosos;
