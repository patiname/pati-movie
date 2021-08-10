import styled from "styled-components";

const SFooter = styled.footer`
  padding: 50px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #333;
  margin-top: 150px;
`;

export const Footer = () => {
  return <SFooter>&copy; 2021 PatiName</SFooter>;
};
