import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
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
  );
};

export default Main;
