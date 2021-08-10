import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    padding: 15px;
  }
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: 700;
  a {
    color: crimson;
  }
  text-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
`;

const MenuWrap = styled.ul`
  max-width: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    color: white;
  }
`;

const Menu = styled.li`
  &:hover {
    a {
      color: gray;
    }
  }
`;

export const Header = () => {
  const [headerBg, setHeaderBg] = useState("");

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (sct >= 150) {
      setHeaderBg("#1d1d1d");
    } else {
      setHeaderBg("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader style={{ backgroundColor: headerBg }}>
      <Logo>
        <Link to="/">PATI</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to="/">홈</Link>
        </Menu>
        <Menu>
          <Link to="/search">탐색하기</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
