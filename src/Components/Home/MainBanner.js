import styled from "styled-components";
import { mainWeight } from "../../style/GlobalStyled";

const SMainBanner = styled.section`
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

export const MainBanner = ({ data, num }) => {
  return (
    <SMainBanner
      style={{
        backgroundImage: `URL(
      https://image.tmdb.org/t/p/original${data[`${num}`].backdrop_path}
)`,
      }}
    >
      <Title> {data[`${num}`].title}</Title>
      <Desc>{data[`${num}`].overview.slice(0, 70) + "..."}</Desc>
    </SMainBanner>
  );
};
