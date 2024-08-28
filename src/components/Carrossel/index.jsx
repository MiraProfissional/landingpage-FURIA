import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./styles.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Carrossel() {
	return (
		<div className="container-carrousel">
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 4000 }}
				loop={true}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				className="swiper-container"
			>
				<SwiperSlide className="slide-item">
					<img
						src={"../images/TimeMasculino/time-masculino-furia-1.png"}
						className="images-carrossel"
						alt="Time Masculino Furia"
					/>
					<div className="sombra-overlay"></div>
					<div className="slide-title">
						<h2>SOMOS FURIA!</h2>
						<p>
							Uma organização de esports que nasceu do desejo de representar o
							Brasil no CS e conquistou muito mais que isso
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide-item">
					<img
						src={"../images/TimeMasculino/time-masculino-furia-2.png"}
						className="images-carrossel"
						alt="Time Feminino Furia"
					/>
					<div className="sombra-overlay"></div>
					<div className="slide-title">
						<h2>SOMOS FURIA!</h2>
						<p>
							Uma organização de esports que nasceu do desejo de representar o
							Brasil no CS e conquistou muito mais que isso
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide-item">
					<img
						src={"../images/TimeFeminino/time-feminino-furia.png"}
						className="images-carrossel"
						alt="Time Feminino Furia"
					/>
					<div className="sombra-overlay"></div>
					<div className="slide-title">
						<h2>SOMOS FURIA!</h2>
						<p>
							Uma organização de esports que nasceu do desejo de representar o
							Brasil no CS e conquistou muito mais que isso
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Carrossel;
