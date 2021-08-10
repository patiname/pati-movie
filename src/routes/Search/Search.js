import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { moviesApi } from "../../api";
import { Container } from "../../components/Container";

const ConWrap = styled.div`
  margin-top: 80px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin: 50px 0;
`;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 20px 0 20px 20px;
  border: 1px solid #333;
  font-size: 18px;
`;

const Con = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
  column-gap: 20px;
  margin-top: 100px;
`;

const ItemWrap = styled.div``;

const Bg = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const ItemTitle = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

export const Search = () => {
  const [search, setSearch] = useState("");
  const { register, getValues, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async () => {
    const { term } = getValues();

    if (term !== "") {
      const {
        data: { results },
      } = await moviesApi.search(term);
      setSearch(results);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>검색 | PaitMovie</title>
      </Helmet>
      <ConWrap>
        <Title>영화 검색</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("term", {
              required: true,
            })}
            type="search"
            placeholder="영화 제목 검색.."
          />
        </Form>

        <Con>
          {search &&
            search.map((term) => (
              <Link to={`/detail/${term.id}`} key={term.id}>
                <ItemWrap>
                  <Bg
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/${term.backdrop_path})`,
                    }}
                  />
                  <ItemTitle>{term.title}</ItemTitle>
                </ItemWrap>
              </Link>
            ))}
        </Con>
      </ConWrap>
    </Container>
  );
};
