import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const mainFontColor = {
  fontColor: "white",
};

const mainBgColor = {
  bgColor: "#1d1d1d",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{box-sizing:border-box;}

    a{
        color: ${mainFontColor.fontColor};
        text-decoration:none;

    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainBgColor.bgColor};
        color: ${mainFontColor.fontColor};
        letter-spacing:-1px;
    }
`;
