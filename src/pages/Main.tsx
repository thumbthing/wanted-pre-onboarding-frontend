import { useNavigate } from "react-router-dom";

const Main = () => {
  const BASE_URL = "localhost:3000";

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Wanted preOnboarding 사전과제</h1>
      </div>
      <div>
        <ul>
          <li>
            <button value='로그인' onClick={() => navigate("/login")}>
              로그인
            </button>
          </li>
          <li>
            <button value='회원가입' onClick={() => navigate("/register")}>
              회원가입
            </button>
          </li>
          <li>
            <button value='Todo' onClick={() => navigate("/todo")}>
              Todo 리스트
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
