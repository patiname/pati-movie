import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../swiper/swiper.min.css";
import { Link } from "react-router-dom";

const NowWrap = styled.div``;

const NowPlayTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const ConTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ConBg = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 500px) {
    height: 100px;
  }
`;

SwiperCore.use([Navigation]);

export const Content = ({ title, movie }) => {
  const params = {
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
    },
  };
  return (
    <NowWrap>
      <NowPlayTitle>{title}</NowPlayTitle>
      <Swiper navigation {...params}>
        {movie &&
          movie.map((now) => (
            <SwiperSlide className="swiper-container" key={now.id}>
              <Link className="bgLink" to={{ pathname: `/detail/${now.id}` }}>
                <ConBg
                  style={{
                    backgroundImage: `url(${
                      now.backdrop_path
                        ? `https://image.tmdb.org/t/p/original/${
                            now && now.backdrop_path
                          }`
                        : "https://hacwon.kr/modules/board/m.skins/sketchbook5_DW/img/none280.gif"
                    })`,
                  }}
                />
                <ConTitle className="title">{now.title}</ConTitle>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </NowWrap>
  );
};
