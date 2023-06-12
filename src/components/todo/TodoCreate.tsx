import { ChangeEvent, useCallback } from 'react';
import { createTodo } from '../../request/Api';
import { TodoListData } from '../../pages/Todo';
import { styled } from 'styled-components';

interface TodoInputProps {
  onChange: (value: string) => void;
  todo: string;
  onTodoCreate: (value: TodoListData) => void;
}

const TodoCreate: React.FC<TodoInputProps> = ({
  onChange,
  todo,
  onTodoCreate,
}) => {
  const handleTodoInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  const handleTodoCreate = useCallback(async () => {
    try {
      const response = await createTodo(todo);
      onTodoCreate(response?.data);
    } catch (error) {
      throw error;
    }
  }, [todo, onTodoCreate]);

  return (
    <StyledTodoInput>
      <input
        type="text"
        data-testid="new-todo-input"
        onChange={handleTodoInput}
        value={todo}
      />
      <button data-testid="new-todo-add-button" onClick={handleTodoCreate}>
        추가
      </button>
    </StyledTodoInput>
  );
};

export default TodoCreate;

const StyledTodoInput = styled.div`
  display: flex;

  input[type='text'] {
    margin-right: 8px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    width: 300px;
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
