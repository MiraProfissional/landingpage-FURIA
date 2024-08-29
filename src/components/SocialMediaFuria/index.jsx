import React from "react";
import "./styles.css";

import { FaYoutube, FaInstagram, FaTwitch, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialMediaFuria() {
	return (
		<div className="furiosos-social-media">
			<ul className="lista-social-media">
				<li className="item-lista-social-media">
					<a
						href={"https://www.instagram.com/furiagg/"}
						className="link-social-media-furia"
						rel="noreferrer"
						target="_blank"
					>
						<FaInstagram /> <p>Instagram</p>
					</a>
				</li>

				<li className="item-lista-social-media">
					<a
						href={"https://www.youtube.com/channel/UCE4elIT7DqDv545IA71feHg"}
						className="link-social-media-furia"
						rel="noreferrer"
						target="_blank"
					>
						<FaYoutube /> <p>Youtube</p>
					</a>
				</li>
				<li className="item-lista-social-media">
					<a
						href={"https://x.com/FURIA"}
						className="link-social-media-furia"
						rel="noreferrer"
						target="_blank"
					>
						<FaXTwitter /> <p>X</p>
					</a>
				</li>
				<li className="item-lista-social-media">
					<a
						href={"https://www.twitch.tv/furiatv"}
						className="link-social-media-furia"
						rel="noreferrer"
						target="_blank"
					>
						<FaTwitch /> <p>Twitch</p>
					</a>
				</li>
                <li className="item-lista-social-media">
					<a
						href={"https://www.linkedin.com/company/furiagg/"}
						className="link-social-media-furia"
						rel="noreferrer"
						target="_blank"
					>
						<FaLinkedin /> <p>Linkedin</p>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default SocialMediaFuria;
