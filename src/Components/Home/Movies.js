import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { mainWeight, moSize } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";
import "../../style/swiper.css";

const Title = styled.h3`
  font-size: 35px;
  font-weight: ${mainWeight.titleWeight};
  margin: 80px 0px 30px 0px;
  @media screen and (max-with: 500px) {
    font-size: 25px;
    margin-top: 50px;
  }
`;

const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 15px;
  @media screen and (max-with: 500px) {
    font-size: ${moSize.movieTitle};
  }
`;

const CoverImg = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;

SwiperCore.use([Navigation]);

export const Movies = ({ movieData, title }) => {
  const params = {
    breakpoints: {
      1024: { slidesPerView: 5.2, spaceBetween: 20 },
      320: { slidesPerView: 2.1, spaceBetween: 10 },
    },
  };

  return (
    <div>
      <Title> {title}</Title>
      <Swiper
        module={[Navigation]}
        {...params}
        navigation
        slidesPerView={5}
        spaceBetween={20}
      >
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            {/* <Link to={router.detail`${play.id}`}> */}
            <Link to={`/detail/${play.id}`}>
              <CoverImg
                style={{
                  backgroundImage: `URL(https://image.tmdb.org/t/p/original${play.backdrop_path})`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
