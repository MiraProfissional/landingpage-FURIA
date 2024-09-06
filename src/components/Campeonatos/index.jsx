import React from "react";
import "./styles.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Campeonatos() {
	return (
		<div id="container-campeonatos">
			<div className="campeonato-container-texto">
				<h2>Campeonatos</h2>
				<br />
				<p>
					A FURIA é sinônimo de competitividade e paixão nos esports. No
					Valorant, a equipe brasileira já deixou sua marca em diversos
					campeonatos, enfrentando os melhores times do mundo e levando a
					torcida à loucura. <br />
					<br />
					Desde sua estreia no Valorant, a FURIA tem acumulado vitórias
					importantes e conquistado o respeito da comunidade. A equipe já
					participou de grandes torneios internacionais, como VCT-Americas
					Kickoff, VCT-Americas Stage 1 e 2, onde demonstrou um jogo consistente
					e estratégico. Acompanhe a FURIA em suas próximas aventuras e celebre
					cada vitória conosco!
					<br />
				</p>
			</div>
			<div className="campeonato-container-imagens">
				<div className="chamada-imagens-campeonatos">
					<a
						href={
							"https://www.vlr.gg/event/2004/champions-tour-2024-americas-stage-1/regular-season"
						}
						className="links-campeonatos"
						rel="noreferrer"
						target="_blank"
					>
						<h3>
							VCT 2024: Americas Stage 1 <FaExternalLinkAlt size={20} />
						</h3>
						<img
							src={
								"../images/TimeMasculino/xand-nzr-havoc-furia-vct-americas-2024.jpg"
							}
							className="imagens-chamada-campeonato"
							alt="xand-nzr-havoc-furia-vct-americas-2024"
						/>
					</a>
				</div>
				<div className="chamada-imagens-campeonatos">
					<a
						href={"https://www.instagram.com/furiagg/"}
						className="links-campeonatos"
						rel="noreferrer"
						target="_blank"
					>
						<h3>
							VCT 2024: GC Series 2 - Qualifier 2{" "}
							<FaExternalLinkAlt size={20} />
						</h3>
						<img
							src={
								"../images/TimeInclusivo/furia-elemento-f-valorant-game-changers.jpg"
							}
							className="imagens-chamada-campeonato"
							alt="furia-elemento-f-valorant-game-changers"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Campeonatos;
