import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Main = () => {
  return (
    <StyledMainPageContainer>
      <div>
        <h1>Wanted preOnboarding 사전과제</h1>
      </div>
      <div>
        <StyledList>
          <li>
            <Link to={`/login`}>
              <div>
                <StyledH1>로그인</StyledH1>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/register`}>
              <div>
                <StyledH1>회원가입</StyledH1>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/todo`}>
              <div>
                <StyledH1>Todo 리스트</StyledH1>
              </div>
            </Link>
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

const StyledH1 = styled.h1`
  color: #ffffff;
`;
