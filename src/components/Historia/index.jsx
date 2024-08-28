import React from "react";
import "./styles.css";

function Historia() {
	return (
		<div id="container-historia">
			<div className="historia-container-imagem">
				<img
					src={"../images/TimeMasculino/furia-timeinicio-cs.webp"}
					alt="time-furia-inicio-cs"
				/>
			</div>
			<div className="divisoria-container-historia"></div>
			<div className="historia-container-texto">
				<h2>História</h2>
				<br />
				<p>
					Nascida nas arenas do Counter-Strike: Global Offensive em 2017, a
					FURIA rapidamente se tornou um símbolo de orgulho e paixão para os fãs
					de esports brasileiros. Com uma visão clara de elevar o patamar dos
					esports no país, a organização rapidamente conquistou seu espaço no
					cenário internacional, mostrando a força e o talento dos jogadores
					brasileiros. <br />
					<br />
					Com a chegada de Valorant, uma nova era se abriu para a FURIA. A
					organização, sempre atenta às novas oportunidades, não demorou a
					montar uma equipe competitiva no novo título da Riot Games. Com a
					mesma garra e determinação de sempre, os jogadores da FURIA se
					destacaram nos campeonatos, levando a torcida brasileira à loucura a
					cada vitória.
					<br />
					<br />A FURIA Valorant não é apenas uma equipe, mas um movimento que
					inspira uma nova geração de jogadores e fãs. Com uma comunidade
					apaixonada e um time de atletas de alto nível, a FURIA continua a
					escrever sua história, buscando sempre a excelência e a conquista de
					novos títulos.
				</p>
			</div>
		</div>
	);
}

export default Historia;
