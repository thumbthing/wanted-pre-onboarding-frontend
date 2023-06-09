import { ChangeEvent, useCallback, useState } from 'react';
import { TodoListData } from '../../pages/Todo';
import { deleteTodo, getTodos, updateTodo } from '../../request/Api';
import { styled } from 'styled-components';

interface TodoListProps {
  todolist: TodoListData[];
  onGetNewTodoList: (value: TodoListData[]) => void;
}

const TodoList = ({ todolist, onGetNewTodoList }: TodoListProps) => {
  const [isModify, setIsModify] = useState<number>();
  const [modifiedTodo, setModifiedTodo] = useState<string>('');

  const handleTodoDelete = useCallback(
    async (id: number) => {
      try {
        const deleteResponse = await deleteTodo(id);
        if (deleteResponse) {
          const newTodoList = await getTodos();
          onGetNewTodoList(newTodoList?.data);
        }
      } catch (error) {
        console.log('handleTodoDelete:', error);
      }
    },
    [onGetNewTodoList],
  );

  const handleModifyTodoText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setModifiedTodo(event.target.value);
    },
    [],
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
        console.log('handleTodoUpdate:', error);
      }
    },
    [onGetNewTodoList],
  );

  const myTodoList = todolist.map((value) => {
    return (
      <li key={value.id}>
        <label>
          <input
            type="checkbox"
            checked={value.isCompleted}
            onChange={() => {
              handleTodoUpdate(value.id, value.todo, !value.isCompleted);
            }}
          />
          {isModify === value.id ? (
            <input
              type="text"
              data-testid="modify-input"
              value={modifiedTodo}
              onChange={(e) => handleModifyTodoText(e)}
            />
          ) : (
            <span>{value.todo}</span>
          )}
          <button
            data-testid={
              isModify === value.id ? 'submit-button' : 'modify-button'
            }
            onClick={() => {
              if (isModify === value.id) {
                handleTodoUpdate(value.id, modifiedTodo, value.isCompleted);
                setIsModify(undefined);
              } else {
                setIsModify(value.id);
                setModifiedTodo(value.todo);
              }
            }}
          >
            {isModify === value.id ? '제출' : '수정'}
          </button>
          <button
            data-testid={
              isModify === value.id ? 'cancel-button' : 'delete-button'
            }
            onClick={() => {
              if (isModify === value.id) {
                setIsModify(undefined);
              } else {
                handleTodoDelete(value.id);
              }
            }}
          >
            {isModify === value.id ? '취소' : '삭제'}
          </button>
        </label>
      </li>
    );
  });

  return (
    <StyledUl>
      {todolist.length !== 0 ? (
        myTodoList
      ) : (
        <div>
          <h3>할일 를 입력해주세요</h3>
        </div>
      )}
    </StyledUl>
  );
};

export default TodoList;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    label {
      display: flex;
      align-items: center;
      color: white;
      font-size: 25px;
      width: 400px;
    }

    span {
      display: flex;
      align-items: flex-start;
      width: 250px;
    }

    input[type='checkbox'] {
      margin-right: 8px;
      width: 20px;
      height: 20px;
      appearance: none;
      border: 2px solid white;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    input[type='checkbox']:checked {
      background-color: white;
      border-color: white;
    }

    input[type='text'] {
      margin-right: 8px;
      padding: 8px;
      border: none;
      border-radius: 4px;
      font-size: 20px;
      width: 250px;
    }

    button {
      margin-right: 8px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background-color: gray;
      color: white;
      font-size: 14px;
      font-weight: bold;
      height: 40px;
      width: 60px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
`;
