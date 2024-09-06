import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Carrossel() {
	return (
		<div id="container-carrossel">
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
					<div className="sombra-overlay"> </div>
					<div className="slide-title">
						<h1>SOMOS FURIA!</h1>
						<br />
						<p>
							Uma organização de esports que nasceu do desejo de representar o
							Brasil no CS <br />e conquistou muito mais que isso
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide-item">
					<img
						src={"../images/TimeInclusivo/time-inclusivo-furia.png"}
						className="images-carrossel"
						alt="Time Inclusivo Furia"
					/>
					<div className="sombra-overlay"> </div>
					<div className="slide-title">
						<h1>SOMOS FURIA!</h1>
						<br />
						<p>
							Uma organização de esports que nasceu do desejo de representar o
							Brasil no CS <br />e conquistou muito mais que isso
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide-item">
					<img
						src={"../images/TimeMasculino/time-masculino-furia-2.png"}
						className="images-carrossel"
						alt="Time Feminino Furia"
					/>
					<div className="sombra-overlay"> </div>
					<div className="slide-title">
						<h1>SOMOS FURIA!</h1>
						<br />
						<p>
							Uma organização de esports que nasceu do desejo de representar o
							Brasil no CS <br />e conquistou muito mais que isso
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Carrossel;
