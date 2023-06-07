import { ChangeEvent, useCallback } from "react";
import { styled } from "styled-components";

interface IdInputProps {
  onChange: (value: string) => void;
}

const IdInput: React.FC<IdInputProps> = ({ onChange }) => {
  const handleIdValidation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.includes("@")) {
        console.log("id has @");
      } else {
        console.log("id does not have @");
      }
      onChange(event.target.value);
    },
    []
  );

  return (
    <StyledIdBox>
      <span>이메일</span>
      <input
        data-testid='email-input'
        type='text'
        onChange={handleIdValidation}
      />
    </StyledIdBox>
  );
};

export default IdInput;

const StyledIdBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;
