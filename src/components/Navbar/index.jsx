import "./styles.css";

function Navbar() {
	return (
		<nav id="container-navbar">
			<div className="div-img">
				<img
					src={"../images/Logos/logo-furia-navbar.png"}
					alt="logo-furia-navbar"
				/>
				<img
					src={"../images/Logos/logo-valorant-navbar.png"}
					alt="logo-furia-navbar"
				/>
			</div>

			<ul className="lista-nav">
				<li className="itens-lista-navbar">
					<a href="#container-carrossel">Home</a>
				</li>
				<li className="itens-lista-navbar">
					<a href="#container-historia">História</a>
				</li>
				<li className="itens-lista-navbar">
					<a href="#container-elenco">Elenco</a>
				</li>
				<li className="itens-lista-navbar">
					<a href="#container-campeonatos">Campeonatos</a>
				</li>
				<li className="itens-lista-navbar">
					<a href="#container-furiosos">Furiosos</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
