import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Main = () => {
  const BASE_URL = "localhost:3000";

  const navigate = useNavigate();

  return (
    <StyledMainPageContainer>
      <div>
        <h1>Wanted preOnboarding 사전과제</h1>
      </div>
      <div>
        <StyledList>
          <li>
            <StyledInput
              type='button'
              value='로그인'
              onClick={() => navigate("/login")}
            />
          </li>
          <li>
            <StyledInput
              type='button'
              value='회원가입'
              onClick={() => navigate("/register")}
            />
          </li>
          <li>
            <StyledInput
              type='button'
              value='Todo 리스트'
              onClick={() => navigate("/todo")}
            />
          </li>
        </StyledList>
      </div>
    </StyledMainPageContainer>
  );
};

export default Main;

const StyledMainPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledList = styled.ul`
  list-style: none;

  li + li {
    margin-top: 5px;
  }
`;

const StyledInput = styled.input`
  display: flex;
  width: 500px;
  height: 100px;
  font-size: 75px;
  text-align: center;
`;
