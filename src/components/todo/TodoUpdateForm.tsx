import React from "react";

const TodoUpdateForm = () => {
  return (
    <>
      <label>
        <input type='checkbox' checked={true} />
        <input data-testid='modify-input' />
      </label>
      <button data-testid='submit-button'>제출</button>
      <button data-testid='cancel-button'>취소</button>
    </>
  );
};

export default TodoUpdateForm;
