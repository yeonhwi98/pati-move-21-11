import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { movieApi } from "../../api";
import { Loader } from "../Loader";
import { MainBanner } from "./MainBanner";
import { Container } from "../Container";
import { Movies } from "./Movies";
// import { movieData } from "./movieApi"
// import { movieApi } from "./Movies";

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
  const [getReview, setgetReview] = useState();

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

        const {
          data: { results: getReview },
        } = await movieApi.upComing();
        setgetReview(getReview);

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
      <Helmet>
        <title> 홈 | PN movie</title>
      </Helmet>

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
                  <Movies movieData={getReview} title="리뷰 많은 영화" />
                  <Movies movieData={upComing} title="최근 상영 영화" />
                </Container>
              </Section>
            </Wrap>
          )}
        </>
      )}
    </div>
  );
};
