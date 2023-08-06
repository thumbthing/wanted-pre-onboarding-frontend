import { useCallback, useState } from "react";
import Todo from "./Todo";
import TodoUpdateForm from "./TodoUpdateForm";
import { TodosProps } from "../../pages/Todo";
import { StyledList } from "../../style/todo.styled";

interface TodoListProps {
  todos: TodosProps[];
  handleIsComplete: (todos: TodosProps) => Promise<void>;
  handleDeleteTodo: (todosId: number) => void;
  handleUpdateTodo: (todo: TodosProps) => void;
}

const TodoList = ({
  todos,
  handleIsComplete,
  handleDeleteTodo,
  handleUpdateTodo,
}: TodoListProps) => {
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
    <StyledList>
      {todos.map((todos) => (
        <li key={todos.id}>
          {isEditing === todos.id ? (
            <TodoUpdateForm
              todos={todos}
              handleIsEditing={handleIsEditing}
              handleUpdateTodo={handleUpdateTodo}
            />
          ) : (
            <Todo
              todos={todos}
              handleIsComplete={handleIsComplete}
              handleIsEditing={handleIsEditing}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </li>
      ))}
    </StyledList>
  );
};

export default TodoList;
