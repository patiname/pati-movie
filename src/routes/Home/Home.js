import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { moviesApi } from "../../api";
import { useState } from "react";
import { useEffect } from "react";
import { Content } from "./Content";
import { Helmet } from "react-helmet-async";
// import { Testing } from "../../components/Testing";

const Main = styled.section`
  width: 100%;
  height: 55vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 500px) {
    background-size: cover;
    background-position: top;
  }
`;

const TitleWrap = styled.div`
  width: 540px;
  padding: 200px 0 0 80px;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 250px 15px 0 15px;
  }
`;

const Title = styled.h3`
  font-size: 70px;
  font-weight: 700;
  line-height: 90px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 500px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  line-height: 30px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 20px;
    margin-top: 20px;
  }
`;

export const Home = () => {
  const [nowPlaying, setNowPlaying] = useState();
  const [upComing, setUpComing] = useState();
  const [popular, setpPopular] = useState();

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        setNowPlaying(nowPlaying);

        const {
          data: { results: upComing },
        } = await moviesApi.upComing();
        setUpComing(upComing);

        const {
          data: { results: popular },
        } = await moviesApi.popular();
        setpPopular(popular);
      } catch (error) {}
    };
    movieData();
  }, []);

  // console.log("현재상영", nowPlaying);
  // console.log("업커밍", upComing);
  // console.log("인기", popular);
  // console.log(nowPlaying[0].backdrop_path);

  return (
    <div>
      <Helmet>
        <title>홈 | PaitMovie</title>
      </Helmet>

      {/* <Testing /> */}

      <Main
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${
            nowPlaying && nowPlaying[0].backdrop_path
          })`,
        }}
      >
        <TitleWrap>
          <Title>{nowPlaying && nowPlaying[0].title}</Title>
          <SubTitle>
            {nowPlaying && nowPlaying[0].overview.slice(0, 50) + "..."}
          </SubTitle>
        </TitleWrap>
      </Main>
      <Container>
        <Content title={"현재 상영 영화"} movie={nowPlaying} />

        <Content title={"개봉 예정 영화"} movie={upComing} />

        <Content title={"인기 영화"} movie={popular} />
      </Container>
    </div>
  );
};
