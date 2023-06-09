import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoCreate from '../components/todo/TodoCreate';
import { getTodos } from '../request/Api';
import TodoList from '../components/todo/TodoList';
import { styled } from 'styled-components';
import { StyledHeader } from '../components/style';

export interface TodoListData {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoListData[]>([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');

  const handleTodoChange: (value: string) => void = useCallback((value) => {
    setTodoText(value);
  }, []);

  const handleOnTodoCreate: (value: TodoListData) => void = useCallback(
    (value) => {
      setTodoList([...todoList, value]);
    },
    [todoList],
  );

  const handleGetNewTodoList: (value: TodoListData[]) => void = useCallback(
    (value) => {
      setTodoList([...value]);
    },
    [],
  );

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await getTodos();
        setTodoList(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (accessToken) {
      getTodoList();
    } else {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  return (
    <TodoContainer>
      <TodoHeader onClick={() => navigate('/')}>
        <h1>Todo 페이지</h1>
        <button onClick={() => navigate('/')}></button>
      </TodoHeader>
      <TodoCreate
        onChange={handleTodoChange}
        todo={todoText}
        onTodoCreate={handleOnTodoCreate}
      />
      <div>
        <TodoList todolist={todoList} onGetNewTodoList={handleGetNewTodoList} />
      </div>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TodoHeader = StyledHeader;

export default Todo;
