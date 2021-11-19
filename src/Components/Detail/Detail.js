import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";
import { useEffect } from "react";
import { NotFound } from "../../NotFound";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react/cjs/react.development";
import { Loader } from "../Loader";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;
const Section = styled.div`
  width: 100%;
  height: 100%;
`;
const Container = styled.div``;
const DetailImg = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;
const Title = styled.div``;
const DetailTitle = styled.div``;
const Date = styled.div``;
const Genre = styled.div``;
const Runtime = styled.div``;
const Content = styled.div``;

export const Detail = () => {
  // const location = useLocation();
  // console.log(location);
  // 매우 귀찮음

  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    const MovieDetail = async () => {
      try {
        // console.log(await movieApi.detail(566525));
        const { data } = await movieApi.detail(id);
        setMovieData();
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        <NotFound></NotFound>;
      }
    };
    MovieDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieData && (
            <>
              <PageTitle title="영화리뷰"></PageTitle>
              <Wrap>
                <Section>
                  <Container>
                    <DetailImg
                      style={{
                        backgroundImage: `URL(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
                      }}
                    ></DetailImg>
                    <Title>
                      <DetailTitle>{movieData.title}</DetailTitle>
                      <Date>{movieData.release_date}</Date>
                      <Genre>
                        {movieData.genres.map((genre) => genre.name + ",")}
                      </Genre>
                      <Runtime>{movieData.runtime}</Runtime>
                      <Content>{movieData.overview}</Content>
                    </Title>
                  </Container>
                </Section>
              </Wrap>
            </>
          )}
        </>
      )}
    </div>
  );
};
