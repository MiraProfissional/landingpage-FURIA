import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

function Patrocionadores() {
	return (
		<>
			<div className="divisoria-patrocinadores"></div>
			<div id="container-patrocinadores">
				<Swiper
					modules={[Navigation, Pagination]}
					slidesPerView={4}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 4000 }}
					loop={true}
					effect="fade"
					fadeEffect={{ crossFade: true }}
					className="swiper-container"
				>
					<SwiperSlide className="slide-patrocinadores">
						<img
							src={"../images/Patrocinadores/Betnacional.png"}
							className="images-patrocinadores"
							alt="Betnacional-logo"
						/>
					</SwiperSlide>
					<SwiperSlide className="slide-patrocinadores">
						<img
							src={"../images/Patrocinadores/CruzeiroDoSul.png"}
							className="images-patrocinadores"
							alt="CruzeiroDoSul-logo"
						/>
					</SwiperSlide>
					<SwiperSlide className="slide-patrocinadores">
						<img
							src={"../images/Patrocinadores/Hellmanns.png"}
							className="images-patrocinadores"
							alt="Hellmanns-logo"
						/>
					</SwiperSlide>
					<SwiperSlide className="slide-patrocinadores">
						<img
							src={"../images/Patrocinadores/pokerstars.png"}
							className="images-patrocinadores"
							alt="pokerstars-logo"
						/>
					</SwiperSlide>
					<SwiperSlide className="slide-patrocinadores">
						<img
							src={"../images/Patrocinadores/RedBull.png"}
							className="images-patrocinadores"
							alt="RedBull-logo"
						/>
					</SwiperSlide>
					<SwiperSlide className="slide-patrocinadores">
						<img
							src={"../images/Patrocinadores/Lenovo.png"}
							className="images-patrocinadores"
							alt="Lenovo-logo"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="divisoria-patrocinadores"></div>
		</>
	);
}

export default Patrocionadores;
