import { ChangeEvent, useCallback } from "react";
import { createTodo } from "../../request/Api";

interface TodoInputProps {
  onChange: (value: string) => void;
  todo: string;
}

const TodoCreate: React.FC<TodoInputProps> = ({ onChange, todo }) => {
  const handleTodoInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  const handleTodoCreate = useCallback(async () => {
    try {
      const response = await createTodo(todo);
      console.log("a;osidfja;woeihgaoeirhg;oaiewr", response.data);
    } catch (error) {
      throw error;
    }
  }, [todo]);

  return (
    <div>
      <input
        type='text'
        data-testid='new-todo-input'
        onChange={handleTodoInput}
        value={todo}
      />
      <input
        type='button'
        data-testid='new-todo-add-button'
        onClick={handleTodoCreate}
        value={"추가"}
      />
    </div>
  );
};

export default TodoCreate;
