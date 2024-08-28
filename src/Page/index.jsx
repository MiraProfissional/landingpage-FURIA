import Carrossel from "../components/Carrossel";
import Historia from "../components/Historia";
import Navbar from "../components/Navbar";
import "./styles.css";

function Page() {
	return (
		<div className="Page">
			<Navbar />
			<Carrossel />
			<Historia />
		</div>
	);
}

export default Page;
