import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { mainWeight, moSize } from "../../style/GlobalStyled";
import { mainColor } from "../../style/GlobalStyled";

const SMainBanner = styled.section`
  height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 220px 80px;
  @media screen and (max-width: 500px) {
    padding: 220px 20px;
  }
  position: relative;
`;

const Title = styled.h3`
  max-width: 550px;
  width: 100%;
  font-size: 70px;
  font-weight: ${mainWeight.titleWeight};
  line-height: 1.2em;
  margin-bottom: 25px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 500px) {
    font-size: 45px;
    margin-bottom: 15px;
    margin-top: 100px;
  }
  position: relative;
  z-index: 10;
`;
const Desc = styled.p`
  max-width: 600px;
  width: 100%;
  font-size: 18px;
  opacity: 0.9;
  line-height: 1.4em;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
  position: relative;
  z-index: 10;
`;
const Button = styled.button`
  all: unset;
  padding: 20px 50px;
  border: 1px solid #fff;
  font-weight: ${mainWeight.titleWeight};
  margin-top: 30px;
  cursor: pointer;
  transition: 0.3s;
  span {
    transition: 0.3s;
  }
  &:hover {
    background-color: ${mainColor.fontColor};
    color: ${mainColor.bgColor};
    span {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
  position: relative;
  z-index: 10;
`;

const MoreBanner = styled.section`
  height: ${(props) => props.moreHeight};
  background-color: #111;
  margin-top: 100px;
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.5s;
  /* display: none; */
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const ConWrap = styled.div`
  width: 30%;
`;
const MoreTitle = styled.div`
  font-size: 80px;
  font-weight: ${mainWeight.titleWeight};
  line-height: 1.2em;
  margin: 50px 0 30px 0;
`;
const MoreDesc = styled.div`
  font-size: 20px;
  font-weight: ${mainWeight.titleWeight};
  line-height: 2em;
  opacity: 0.8;
`;
const CoverImg = styled.div`
  width: 65%;
  height: 100%;
  background-position: center;
  background-size: cover;
  div {
    float: right;
    font-size: 30px;
    margin: 15px 15px 0 0;
    cursor: pointer;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 60vh;
  position: absolute;
  left: 0;
  bottom: 0;
  /* background-color: black; */
  background: linear-gradient(0deg, black, transparent);
`;

export const MainBanner = ({ data, num }) => {
  const [height, setHeight] = useState(0);
  const [moreNum, setMoreNum] = useState(0);

  const onClickMore = () => {
    if (moreNum === 0) {
      setHeight("80vh");
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
      setMoreNum(moreNum + 1);
    } else if (moreNum === 1) {
      setHeight("0");
      setMoreNum(moreNum - 1);
    }
  };

  const onClickClose = () => {
    setHeight("0");
  };

  return (
    <>
      <SMainBanner
        style={{
          backgroundImage: `URL(
      https://image.tmdb.org/t/p/original${data[`${num}`].backdrop_path}
)`,
        }}
      >
        <Title> {data[`${num}`].title}</Title>
        <Desc>{data[`${num}`].overview.slice(0, 70) + "..."}</Desc>
        <BlackBg></BlackBg>
        <Button onClick={onClickMore}>
          더 보기 <span>&rarr;</span>
        </Button>
      </SMainBanner>

      <MoreBanner moreHeight={height}>
        <ConWrap>
          <MoreTitle>{data[`${num}`].title}</MoreTitle>
          <MoreDesc>{data[`${num}`].overview.slice(0, 300) + "..."}</MoreDesc>
        </ConWrap>
        <CoverImg
          style={{
            backgroundImage: `url( https://image.tmdb.org/t/p/original${
              data[`${num}`].backdrop_path
            })`,
          }}
        >
          <div onClick={onClickClose}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </div>
        </CoverImg>
      </MoreBanner>
    </>
  );
};
