import { useEffect, useState } from "react";
import { getTodos, updateTodo } from "../../api/todo/todo";

interface TodoListProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await getTodos();

        setTodoList(response?.data);
      } catch (error) {
        console.log("todo list get error : ", error);
      }
    };
    getTodoList();
  }, []);

  const handleTodoUpdate = async ({ id, todo, isCompleted }: TodoListProps) => {
    try {
      const response = await updateTodo(id, todo, !isCompleted);
      const updatedTodo = todoList.map((item) =>
        item.id === response?.data.id ? { ...response.data } : item
      );
      setTodoList(updatedTodo);
    } catch (error) {
      console.log("update error :", error);
    }
  };

  return (
    <div>
      {todoList.map((todos, index) => (
        <li key={index}>
          <label>
            <input
              type='checkbox'
              onChange={() => handleTodoUpdate(todos)}
              checked={todos.isCompleted}
            />
            <span>{todos.todo}</span>
          </label>
          <button data-testid='modify-button'>수정</button>
          <button data-testid='delete-button'>삭제</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
