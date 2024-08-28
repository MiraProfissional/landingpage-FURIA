import "./styles.css";
import logoFuria from "../../utilities/images/Logos/logo-furia-navbar.png";
import logoValorant from "../../utilities/images/Logos/logo-valorant-navbar.png";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="div-img">
				<img src={logoFuria} alt="logo-furia-navbar" />
				<img src={logoValorant} alt="logo-furia-navbar" />
			</div>

			<ul className="lista-nav">
				<li className="itens-lista-navbar" data-cy="navbar-link-home">
					Home
				</li>
				<li className="itens-lista-navbar" data-cy="navbar-link-sobre-nos">
					História
				</li>
				<li className="itens-lista-navbar" data-cy="navbar-link-contato">
					Elenco
				</li>
				<li className="itens-lista-navbar" data-cy="navbar-link-produtos">
					Campeonatos
				</li>
				<li className="itens-lista-navbar" data-cy="navbar-link-login">
					Furiosos
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
