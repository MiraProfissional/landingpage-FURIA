import Campeonatos from '../components/Campeonatos';
import Carrossel from '../components/Carrossel';
import Elenco from '../components/Elenco';
import Footer from '../components/Footer';
import Furiosos from '../components/Furiosos';
import Historia from '../components/Historia';
import Navbar from '../components/Navbar';
import Patrocionadores from '../components/Patrocinadores';
import './styles.css';

function Page() {
  return (
    <div className="Page">
      <Navbar />
      <Carrossel />
      <Historia />
      <Elenco />
      <Campeonatos />
      <Furiosos />
      <Patrocionadores />
      <Footer />
    </div>
  );
}

export default Page;
