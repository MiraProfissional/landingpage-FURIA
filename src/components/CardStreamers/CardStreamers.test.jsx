import { render } from "@testing-library/react";
import CardStreamers from ".";

describe("</ CardStreamers>", () => {
	it("should render </CardStreamers>", () => {
		const mockData = {
			nomeTwitch: "gafallen",
			qtdSeguidores: "1,5 mi",
			linkTwitch: "https://www.twitch.tv/gafallen",
			imagem: "../images/Streamers/fallen.png",
		};

		render(<CardStreamers data={mockData} />);
	});
});
