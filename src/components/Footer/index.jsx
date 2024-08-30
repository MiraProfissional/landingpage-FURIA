import React from 'react'
import './styles.css'
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div id='container-footer'>
      <div className="container-footer-conteudo">
        <div>
          <a href="#container-navbar">
            <img src="../images/Logos/logo-furia-footer.png" alt="logo-furia-footer" />          
          </a>

        </div>
        <div className='div-paginas-footer'>
          <h4>Páginas</h4>
          <ul>
            <li><a href="#container-navbar">Home</a></li>
            <li><a href="#container-historia">História</a></li>
            <li><a href="#container-elenco">Elenco</a></li>
            <li><a href="#container-campeonatos">Campeonatos</a></li>
            <li><a href="#container-furiosos">Furiosos</a></li>
          </ul>
        </div>
        <div className='div-politicas-footer'>
          <h4>Políticas</h4>
          <ul>
            <li><a href="https://furia.gg/terms-and-conditions/" rel="noreferrer"
						target="_blank">Termos e Condições</a></li>
            <li><a href="https://furia.gg/privacy-policy/" rel="noreferrer"
						target="_blank">Política de Privacidade</a></li>
            <li><a href="https://furia.gg/cookie-policy/" rel="noreferrer"
						target="_blank">Política de Cookies</a></li>
          </ul>
        </div>
        <div className='div-social-media-footer'>
          <h4>Redes Sociais</h4>
            <ul>
            <li className="item-lista-social-media-footer">
					<a
						href={"https://www.instagram.com/furiagg/"}
						className="link-social-media-furia"
						rel="noreferrer"
						target="_blank"
					>
						<FaInstagram /> <p>Instagram</p>
					</a>
				</li>

				<li className="item-lista-social-media-footer">
					<a
						href={"https://www.youtube.com/channel/UCE4elIT7DqDv545IA71feHg"}
						className="link-social-media-furia"
						rel="noreferrer"
						target="_blank"
					>
						<FaYoutube /> <p>Youtube</p>
					</a>
				</li>
				<li className="item-lista-social-media-footer">
					<a
						href={"https://x.com/FURIA"}
						className="link-social-media-furia"
						rel="noreferrer"
						target="_blank"
					>
						<FaXTwitter /> <p>X</p>
					</a>
				</li>
            </ul>
        </div>
        </div>
        <div className="sepador-copyright">

        </div>
        <div className="copyright">
          <p>
            <a href="https://www.linkedin.com/in/jvitor-gmira/"
              rel="noreferrer"
						target="_blank"
            >
              &copy; Joao Vitor Mira
            </a>
          </p>
        </div>

      </div>
  )
}

export default Footer
