import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title> {title} 영화리뷰 | PN movie</title>
    </Helmet>
  );
};
