import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { createTodo } from "../../api/todo/todo";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");

  const handleTodoInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setTodoInput(inputText);
  }, []);

  const handleTodoCreate = useCallback(async () => {
    try {
      const response = await createTodo(todoInput);
      console.log(response?.status);
    } catch (error) {
      console.log("todo create error: ", error);
    }
  }, [todoInput]);

  useEffect(() => {
    console.log(todoInput);
  }, [todoInput]);

  return (
    <>
      <input data-testid='new-todo-input' onChange={handleTodoInput} />
      <button data-testid='new-todo-add-button' onClick={handleTodoCreate}>
        추가
      </button>
    </>
  );
};

export default TodoInput;
