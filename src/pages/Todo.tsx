import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!access_token) {
      navigate("/login");
    }
  }, [access_token, navigate]);

  return (
    <div>
      <div>Todo 페이지</div>
    </div>
  );
};

export default Todo;
