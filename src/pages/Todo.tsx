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
      <div>
        <input type='text' data-testid='new-todo-input' />
        <input type='button' data-testid='new-todo-add-button' value={"추가"} />
      </div>
      <div>
        <ul>
          <li>
            <label>
              <input type='checkbox' />
              <span>todo 1</span>
              <input type='button' data-testid='modify-button' value={"수정"} />
              <input type='button' data-testid='delete-button' value={"삭제"} />
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
