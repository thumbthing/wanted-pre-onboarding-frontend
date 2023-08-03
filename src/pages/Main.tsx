import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <header>원티드 프리온보딩 프론트엔드 - 선발과제</header>
      <div>
        <ul>
          <li>
            <Link to={`signin`}>로그인</Link>
          </li>
          <li>
            <Link to={`signup`}>회원가입</Link>
          </li>
          <li>
            <Link to={`todo`}>TodoList</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Main;
