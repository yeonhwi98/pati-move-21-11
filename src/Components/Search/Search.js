import { PageTitle } from "../PageTitle";
import { Container } from "../Container";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { movieApi } from "../../api";
import { useState } from "react";
import { NotFound } from "../../NotFound";
import { Loader } from "../Loader";
import { Link } from "react-router-dom";

const Form = styled.form`
  margin-top: 120px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 60px;
  border: 1px solid #555;
  padding: 10px 20px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 18px;
  }
  font-size: 18px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  margin-top: 50px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Con = styled.div``;
const ConBg = styled.div`
  height: 180px;
`;
const Title = styled.h3`
  margin-top: 10px;
`;

export const Search = () => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [noSearch, setNoSearch] = useState("");

  const { register, getValues, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async () => {
    const { term } = getValues();
    setLoading(true);

    // console.log(term);

    // api에서 search 불러와서 매개변수로 term전달하여 결과값을 콘솔로 찍기

    try {
      // console.log(await movieApi.search(term));
      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setNoSearch("검색 결과가 없습니다.");
      } else {
        setNoSearch("");
        setSearch(results);
      }

      setSearch(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  // console.log(search);

  return (
    <div>
      <PageTitle title="영화검색" />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("term", {
              required: true,
            })}
            type="text"
            placeholder="검색..."
          ></Input>
        </Form>

        {error ? (
          <NotFound />
        ) : (
          <div>
            {loading ? (
              <Loader />
            ) : (
              <ConWrap>
                {noSearch === "" && search ? (
                  search.map((searchData) => (
                    <Link to={`/detail/${searchData.id}`} key={searchData.id}>
                      <Con>
                        <ConBg
                          style={{
                            background: `url(${
                              searchData.backdrop_path
                                ? `https://image.tmdb.org/t/p/original${searchData.backdrop_path}`
                                : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrx5-KvfGEWBiWrNz_dHvCCucvnw1uyypUAQ&usqp=CAU`
                            } )center /cover`,
                          }}
                        ></ConBg>
                        <Title>{searchData.title}</Title>
                      </Con>
                    </Link>
                  ))
                ) : (
                  <h3>{noSearch}</h3>
                )}
              </ConWrap>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};
