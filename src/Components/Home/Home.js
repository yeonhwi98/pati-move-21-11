import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import { movieApi } from "../../api";
import { Loader } from "../Loader";
import { MainBanner } from "./MainBanner";
import { Container } from "../Container";
import { Movies } from "./Movies";

// console.log(movieApi.nowPlaying());
// console.log(movieApi.upComing());

const Wrap = styled.div``;

const Section = styled.section``;

export const Home = () => {
  // *과제
  // useState를 이용하여 results 저장하고,
  // useEffect밖으로 변수 호출할 수 있도록 만들기
  //  upComing 콘솔로 불러오기

  const [nowPlay, setNowplay] = useState();
  const [upComing, setUpComing] = useState();
  const [loading, setLoading] = useState(true);
  const movieNum = 0;

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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {nowPlay && (
            <Wrap>
              <MainBanner data={nowPlay} num={movieNum} />
              <Section>
                <Container>
                  <Movies movieData={nowPlay} title="현재 상영 영화" />
                  <Movies movieData={upComing} title="개봉 예정 영화" />
                </Container>
              </Section>
            </Wrap>
          )}
        </>
      )}
    </div>
  );
};
