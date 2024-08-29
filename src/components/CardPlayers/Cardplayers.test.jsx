import { render } from "@testing-library/react";
import CardPlayer from ".";

describe("</ CardPlayer>", () => {
	it("should render </CardPlayer>", () => {
		const mockData = {
			imagem: "caminho/para/imagem.png",
			nome: "Pancada",
			posicao: "Destruidor",
			capitao: "true",
			nacionalidade: "Brasileira",
			nascimento: "01/01/2000",
		};

		render(<CardPlayer data={mockData} />);
	});
});
