import { useCallback, useEffect, useState } from "react";
import { getTodos, updateTodo } from "../../api/todo/todo";
import Todo from "./Todo";
import TodoUpdateForm from "./TodoUpdateForm";

export interface TodoListProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);
  const [isEditing, setIsEditing] = useState<number>();

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

  const handleIsComplete = async ({ id, todo, isCompleted }: TodoListProps) => {
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

  const handleIsEditing = useCallback(
    (todoId: number) => {
      if (!isEditing) {
        setIsEditing(todoId);
      } else if (isEditing && todoId === isEditing) {
        setIsEditing(undefined);
      } else if (isEditing && todoId !== isEditing) {
        setIsEditing(todoId);
      }
    },
    [isEditing]
  );

  return (
    <div>
      {todoList.map((todos) => (
        <li key={todos.id}>
          {isEditing === todos.id ? (
            <TodoUpdateForm />
          ) : (
            <Todo
              todos={todos}
              handleIsComplete={handleIsComplete}
              handleIsEditing={handleIsEditing}
            />
          )}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
