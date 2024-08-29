import React from 'react'
import "./styles.css";

import { FaYoutube, FaInstagram, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialMediaFuria() {
  return (
    <div className="furiosos-social-media">
					<ul className="lista-redes">
						<a
							href={"https://www.google.com.br/"}
							className="link-social-media-furia"
							rel="noreferrer"
							target="_blank"
						>
							<li>
								<FaInstagram />
							</li>
						</a>

						<a
							href={"https://www.google.com.br/"}
							className="link-social-media-furia"
							rel="noreferrer"
							target="_blank"
						>
							<li>
								<FaYoutube />
							</li>
						</a>
						<a
							href={"https://www.google.com.br/"}
							className="link-social-media-furia"
							rel="noreferrer"
							target="_blank"
						>
							<li>
								<FaXTwitter />
							</li>
						</a>
						<a
							href={"https://www.google.com.br/"}
							className="link-social-media-furia"
							rel="noreferrer"
							target="_blank"
						>
							<li>
								<FaTwitch />
							</li>
						</a>
					</ul>
				</div>
  )
}

export default SocialMediaFuria
