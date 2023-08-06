import { styled } from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    display: flex;
    margin: 10px;

    div {
      display: flex;
      flex: 5;
      flex-direction: row;
      background-color: grey;
      border-radius: 10px;
      height: 2rem;
      width: 20rem;
      text-align: center;
      input {
        border: none;
        width: 26px;
        display: flex;
        flex-direction: row;
      }

      span {
        display: flex;
      }
    }
    button {
      border: none;
      background-color: #fff;
      border-radius: 10px;
      margin: 3px;
    }
  }
`;

export const StyledInputForm = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 10px;
`;
