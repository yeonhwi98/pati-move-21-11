import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { mainWeight } from "../../style/GlobalStyled";
import { Loader } from "../Loader";
// console.log(movieApi.nowPlaying());
// console.log(movieApi.upComing());

const Wrap = styled.div``;

const MainBanner = styled.section`
  height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 220px 80px;
`;

const Title = styled.h3`
  max-width: 550px;
  width: 100%;
  font-size: 70px;
  font-weight: ${mainWeight.titleWeight};
  line-height: 1.2em;
  margin-bottom: 25px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;
const Desc = styled.p`
  max-width: 600px;
  width: 100%;
  font-size: 18px;
  opacity: 0.8;
  line-height: 1.4em;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
`;

export const Home = () => {
  // *과제
  // useState를 이용하여 results 저장하고,
  // useEffect밖으로 변수 호출할 수 있도록 만들기
  //  upComing 콘솔로 불러오기

  const [nowPlay, setNowplay] = useState();
  const [upComing, setUpComing] = useState();
  const [loading, setLoading] = useState(true);
  const movieNum = 1;

  useEffect(() => {
    const movieData = async () => {
      try {
        //   console.log(await movieApi.nowPlaying());
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        //   console.log(results);

        setNowplay(nowPlaying);

        const {
          data: { results: upComing },
        } = await movieApi.upComing();
        setUpComing(upComing);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재상영영화", nowPlay);
  // console.log("개봉예정영화", upComing);

  // console.log(nowPlay && nowPlay[0]);

  // *mainbanner컴포넌트 분해하기 과제

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Wrap>
          {nowPlay && (
            <MainBanner
              style={{
                backgroundImage: `URL(
            https://image.tmdb.org/t/p/original${
              nowPlay[`${movieNum}`].backdrop_path
            }
          )`,
              }}
            >
              <Title> {nowPlay[`${movieNum}`].title}</Title>
              <Desc>
                {nowPlay[`${movieNum}`].overview.slice(0, 70) + "..."}
              </Desc>
            </MainBanner>
          )}
        </Wrap>
      )}
    </>
  );
};
