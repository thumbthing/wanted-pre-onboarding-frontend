import React from "react";
import { Container, LinkContainer, StyledLink } from "../style/main.styled";

const Main = () => {
  return (
    <Container>
      <header>
        <h1>원티드 프리온보딩 프론트엔드 - 선발과제</h1>
      </header>
      <LinkContainer>
        <ul>
          <li>
            <StyledLink to={`signin`}>로그인</StyledLink>
          </li>
          <li>
            <StyledLink to={`signup`}>회원가입</StyledLink>
          </li>
          <li>
            <StyledLink to={`todo`}>TodoList</StyledLink>
          </li>
        </ul>
      </LinkContainer>
    </Container>
  );
};

export default Main;
