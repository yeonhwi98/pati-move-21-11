import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { mainWeight } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";
import "../../style/swiper.css";

const Title = styled.h3`
  font-size: 35px;
  font-weight: ${mainWeight.titleWeight};
  margin: 80px 0px 30px 0px;
`;

const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 15px;
`;

const CoverImg = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;

export const Movies = ({ movieData }) => {
  return (
    <div>
      <Title>현재 상영 영화</Title>
      <Swiper
        module={[Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        navigation
      >
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to="#">
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
