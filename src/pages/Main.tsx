import { useNavigate } from "react-router-dom";

const Main = () => {
  const BASE_URL = "localhost:3000";

  const navigate = useNavigate();

  return (
    <div>
      <div>메인페이지</div>
      <div>
        <button value='로그인' onClick={() => navigate("/login")} />
        <button value='회원가입' onClick={() => navigate("/register")} />
        <button value='Todo' onClick={() => navigate("/todo")} />
      </div>
    </div>
  );
};

export default Main;
