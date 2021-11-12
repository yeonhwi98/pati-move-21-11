import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const mainColor = {
  fontColor: "white",
  bgColor: "#1d1d1d",
};

export const mainWeight = {
  titleWeight: 600,
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{box-sizing:border-box;}

    a{
        color: ${mainColor.fontColor};
        text-decoration:none;

    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainColor.bgColor};
        color: ${mainColor.fontColor};
        letter-spacing:-1px;
    }
`;
