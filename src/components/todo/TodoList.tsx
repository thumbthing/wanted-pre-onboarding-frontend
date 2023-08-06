import { useEffect, useState } from "react";
import { getTodos, updateTodo } from "../../api/todo/todo";
import Todo from "./Todo";

export interface TodoListProps {
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

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div>
      {todoList.map((todos, index) => (
        <li key={index}>
          <Todo todos={todos} handleTodoUpdate={handleTodoUpdate} />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
