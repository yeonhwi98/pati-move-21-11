import styled from "styled-components";

const SFooter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #555;
  font-size: 14px;
  color: gray;
  margin-top: 200px;
  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const Footer = () => {
  return <SFooter>&copy; copyright Pncoding</SFooter>;
};
