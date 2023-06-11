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

  const handleTodoDelete = useCallback(
    async (id: number) => {
      try {
        const deleteResponse = await deleteTodo(id);
        if (deleteResponse) {
          const newTodoList = await getTodos();
          onGetNewTodoList(newTodoList?.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [onGetNewTodoList]
  );

  const handleModifyTodoText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setModifiedTodo(event.target.value);
    },
    []
  );

  const handleTodoUpdate = useCallback(
    async (id: number, todo: string, isCompleted: boolean) => {
      try {
        const response = await updateTodo(id, todo, isCompleted);
        if (response) {
          const newTodoList = await getTodos();
          onGetNewTodoList(newTodoList?.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [onGetNewTodoList]
  );

  const MyTodoList = todolist.map(
    (value) => {
      return (
        <li key={value.id}>
          <label>
            <input
              type='checkbox'
              checked={value.isCompleted}
              onChange={() => {
                handleTodoUpdate(value.id, value.todo, !value.isCompleted);
              }}
            />
            {isModify === value.id ? (
              <>
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
              </>
            ) : (
              <>
                <span>{value.todo}</span>
                <button
                  data-testid='modify-button'
                  onClick={() => {
                    setIsModify(value.id);
                    setModifiedTodo(value.todo);
                  }}
                >
                  수정
                </button>
                <button
                  data-testid='delete-button'
                  onClick={() => {
                    handleTodoDelete(value.id);
                  }}
                >
                  삭제
                </button>
              </>
            )}
          </label>
        </li>
      );
    },
    [todolist]
  );

  return (
    <StyledUl>
      {todolist.length !== 0 ? MyTodoList : <div>todo 를 입력해주세요</div>}
    </StyledUl>
  );
};

export default TodoList;

const StyledUl = styled.ul`
  list-style-type: none;
`;
