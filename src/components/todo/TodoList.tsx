import { useCallback, useEffect, useState } from "react";
import Todo from "./Todo";
import TodoUpdateForm from "./TodoUpdateForm";
import { TodosProps } from "../../pages/Todo";

interface TodoListProps {
  todos: TodosProps[];
  handleIsComplete: (todos: TodosProps) => Promise<void>;
}

const TodoList = ({ todos, handleIsComplete }: TodoListProps) => {
  const [isEditing, setIsEditing] = useState<number>();

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
      {todos.map((todos) => (
        <li key={todos.id}>
          {isEditing === todos.id ? (
            <TodoUpdateForm todos={todos} handleIsEditing={handleIsEditing} />
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
