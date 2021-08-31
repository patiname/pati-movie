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
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding-top: 80px;
  }
`;

const CoverImg = styled.div`
  width: 52%;
  height: 700px;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 60vh;
  }
`;

const Video = styled.iframe`
  width: 52%;
  height: 700px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 400px;
  }
`;

const Con = styled.div`
  width: 46%;
  height: 700px;
  padding: 50px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    padding: 50px 0 0 0;
  }
`;

const ConTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 55px;
  }
`;

const Release = styled.div`
  margin: 30px 0 20px 0;
  font-size: 20px;
  @media screen and (max-width: 500px) {
    margin: 20px 0;
    font-size: 16px;
  }
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
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const Detail = () => {
  const params = useParams();
  const [video, setVideo] = useState();
  const [detail, setDetail] = useState();

  useEffect(() => {
    const movieDetailData = async () => {
      try {
        const { data: movieDetail } = await moviesApi.movieDetail(params.id);
        setDetail(movieDetail);

        const {
          data: { results: videoData },
        } = await moviesApi.video(params.id);
        // console.log(results.length > 0 ? results[0].key : false);
        videoData.length > 0 ? setVideo(videoData[0].key) : setVideo("");
      } catch (error) {}
    };
    movieDetailData();
  }, [params]);
  // console.log(detail);

  return (
    <div>
      <Helmet>
        <title>상세 | PaitMovie</title>
      </Helmet>
      <Container>
        <ConWrap>
          {video === "" ? (
            <CoverImg
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  detail && detail.backdrop_path
                })`,
              }}
            />
          ) : (
            <Video
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          )}

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
