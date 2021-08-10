import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: 0 80px;
  @media screen and (max-width: 500px) {
    padding: 0 15px;
  }
`;

export const Container = ({ children }) => <Section>{children}</Section>;
