import { Link } from "react-router-dom";
import { styled } from "styled-components";
import getCurrentDomain from "../components/Domain";

const Main = () => {
  const domain = getCurrentDomain();

  console.log("domian: ", domain);

  return (
    <StyledMainPageContainer>
      <div>
        <h1>Wanted preOnboarding 사전과제</h1>
      </div>
      <div>
        <StyledList>
          <li>
            <Link to={`${domain}/login`}>
              <div>
                <h1>로그인</h1>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`${domain}/register`}>
              <div>
                <h1>회원가입</h1>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`${domain}/todo`}>
              <div>
                <h1>Todo 리스트</h1>
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
