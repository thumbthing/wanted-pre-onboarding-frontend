import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
