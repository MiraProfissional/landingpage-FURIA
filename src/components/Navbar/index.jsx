import "./styles.css";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="div-img">
				<img src={'../images/Logos/logo-furia-navbar.png'} alt="logo-furia-navbar" />
				<img src={'../images/Logos/logo-valorant-navbar.png'} alt="logo-furia-navbar" />
			</div>

			<ul className="lista-nav">
				<li className="itens-lista-navbar">
					Home
				</li>
				<li className="itens-lista-navbar">
					História
				</li>
				<li className="itens-lista-navbar">
					Elenco
				</li>
				<li className="itens-lista-navbar">
					Campeonatos
				</li>
				<li className="itens-lista-navbar">
					Furiosos
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
