import { ChangeEvent, useCallback, useState } from "react";
import { TodoListData } from "../../pages/Todo";
import { deleteTodo, getTodos, updateTodo } from "../../request/Api";
import { styled } from "styled-components";

interface TodoListProps {
  todolist: TodoListData[];
  onGetNewTodoList: (value: TodoListData[]) => void;
}

const TodoList = ({ todolist, onGetNewTodoList }: TodoListProps) => {
  const [isModify, setIsModify] = useState<number>();
  const [modifiedTodo, setModifiedTodo] = useState<string>("");

  const handleTodoDelete = useCallback(async (id: number) => {
    try {
      const deleteResponse = await deleteTodo(id);
      if (deleteResponse.status === 204) {
        const newTodoList = await getTodos();
        onGetNewTodoList(newTodoList.data);
      }
    } catch (error) {
      throw error;
    }
  }, []);

  const handleModifyTodoText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setModifiedTodo(event.target.value);
    },
    []
  );

  const handleTodoUpdate = useCallback(
    async (id: number, todo: string, isCompleted: boolean) => {
      try {
        const updateResponse = await updateTodo(id, todo, isCompleted);
        if (updateResponse.status === 200) {
          const newTodoList = await getTodos();
          onGetNewTodoList(newTodoList.data);
        }
      } catch (error) {
        throw error;
      }
    },
    []
  );

  const MyTodoList = todolist.map(
    (value) => {
      return (
        <li key={value.id}>
          {isModify === value.id ? (
            <label>
              <input
                type='checkbox'
                checked={value.isCompleted}
                onChange={() =>
                  handleTodoUpdate(value.id, value.todo, !value.isCompleted)
                }
              />
              <input
                type='text'
                data-testid='modify-input'
                value={modifiedTodo}
                onChange={(e) => handleModifyTodoText(e)}
              ></input>
              <button
                data-testid='submit-button'
                onClick={() => {
                  handleTodoUpdate(value.id, modifiedTodo, value.isCompleted);
                  setIsModify(undefined);
                }}
              >
                제출
              </button>

              <button
                data-testid='cancel-button'
                onClick={() => {
                  setIsModify(undefined);
                }}
              >
                취소
              </button>
            </label>
          ) : (
            <label>
              <input
                type='checkbox'
                checked={value.isCompleted}
                onChange={() =>
                  handleTodoUpdate(value.id, value.todo, !value.isCompleted)
                }
              />
              <span>{value.todo}</span>
              <input
                type='button'
                data-testid='modify-button'
                value={"수정"}
                onClick={() => (
                  setIsModify(value.id), setModifiedTodo(value.todo)
                )}
              />
              <input
                type='button'
                data-testid='delete-button'
                value={"삭제"}
                onClick={() => {
                  handleTodoDelete(value.id);
                }}
              />
            </label>
          )}
        </li>
      );
    },
    [todolist]
  );

  return <StyledUl>{MyTodoList}</StyledUl>;
};

export default TodoList;

const StyledUl = styled.ul`
  list-style-type: none;
`;
