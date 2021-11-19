import styled from "styled-components";

const BoxWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const Box = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Excla = styled.div`
  width: 75px;
  height: 75px;
  color: white;
  font-size: 40px;
  margin-bottom: 50px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;
const ErrorTitle = styled.div`
  font-size: 50px;
  color: crimson;
  opacity: 0.8;
`;

const ErrorsubTitle = styled.div`
  font-size: 20px;
  color: white;
  margin-top: 25px;
  font-weight: 200;
  opacity: 0.7;
  letter-spacing: 2px;
`;

export const NotFound = () => {
  return (
    <BoxWrap>
      <Box>
        <Excla>!</Excla>

        <ErrorTitle>Error</ErrorTitle>
        <ErrorsubTitle>Sorry, page not found</ErrorsubTitle>
      </Box>
    </BoxWrap>
  );
};
