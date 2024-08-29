import Campeonatos from "../components/Campeonatos";
import Carrossel from "../components/Carrossel";
import Elenco from "../components/Elenco";
import Furiosos from "../components/Furiosos";
import Historia from "../components/Historia";
import Navbar from "../components/Navbar";
import "./styles.css";

function Page() {
	return (
		<div className="Page">
			<Navbar />
			<Carrossel />
			<Historia />
			<Elenco />
			<Campeonatos />
			<Furiosos />
		</div>
	);
}

export default Page;
