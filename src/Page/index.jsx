import Carrossel from "../components/Carrossel";
import Elenco from "../components/Elenco";
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
		</div>
	);
}

export default Page;
