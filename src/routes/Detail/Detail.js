import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { moviesApi } from "../../api";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const ConWrap = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: space-between;
`;

const CoverImg = styled.div`
  width: 52%;
  height: 700px;
  background-size: cover;
  background-position: center;
`;

const Con = styled.div`
  width: 46%;
  height: 700px;
  padding: 50px;
`;

const ConTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
`;

const Release = styled.div`
  margin: 30px 0 20px 0;
  font-size: 20px;
`;

const Genres = styled.div``;

const RunTime = styled.div`
  margin: 20px 0;
`;

const Desc = styled.div`
  width: 70%;
  line-height: 32px;
  font-size: 18px;
  font-weight: 300;
  opacity: 0.7;
  margin-top: 50px;
`;

export const Detail = () => {
  const params = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    const movieDetailData = async () => {
      try {
        const { data: movieDetail } = await moviesApi.movieDetail(params.id);
        setDetail(movieDetail);
      } catch (error) {}
    };
    movieDetailData();
  }, [params]);

  return (
    <div>
      <Helmet>
        <title>상세 | PaitMovie</title>
      </Helmet>
      <Container>
        <ConWrap>
          <CoverImg
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                detail && detail.backdrop_path
              })`,
            }}
          />
          <Con>
            <ConTitle>{detail && detail.title}</ConTitle>
            <Release>개봉일: {detail && detail.release_date}</Release>
            <Genres>
              장르 : &nbsp;
              {detail &&
                detail.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}, &nbsp;</span>
                ))}
            </Genres>
            <RunTime>런타임: &nbsp;{detail?.runtime} 분</RunTime>
            <Desc>{detail?.overview}</Desc>
          </Con>
        </ConWrap>
      </Container>
    </div>
  );
};
