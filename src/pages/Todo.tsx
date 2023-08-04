import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [accessToken] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  return <div>Todo</div>;
};

export default Todo;
