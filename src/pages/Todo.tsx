import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";

const Todo = () => {
  const [accessToken] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <TodoInput />
    </div>
  );
};

export default Todo;
