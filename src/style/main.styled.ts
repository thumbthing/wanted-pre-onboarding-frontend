import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: center;

  ul {
    list-style: none;
    li + li {
      margin-top: 5px;
    }
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 40px;
  color: #007bff;
  text-decoration: none;
  font-size: 2em;
  font-weight: bold;
  margin-right: 10px;
`;
