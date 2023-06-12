import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <ErrorPage>
      <div>
        <div>
          <h1>요청을 수행하지 못했습니다</h1>
          <p>해당 페이지가 존재하지 않습니다.</p>
          <p>홈으로 돌아가주세요</p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로
      </button>
    </ErrorPage>
  );
};

export default NotFound;

const ErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #222222;
  color: #ffffff;

  > div {
    margin: 10px;
    text-align: center;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    color: #222222;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #cccccc;
    }
  }
`;
