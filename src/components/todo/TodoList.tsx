import { useCallback } from "react";
import { TodoListData } from "../../pages/Todo";
import { deleteTodo, getTodos } from "../../request/Api";

interface TodoListProps {
  todolist: TodoListData[];
  onTodoDelete: (value: TodoListData[]) => void;
}

const TodoList = ({ todolist, onTodoDelete }: TodoListProps) => {
  const handleTodoDelete = useCallback(async (id: number) => {
    try {
      const deleteResponse = await deleteTodo(id);
      if (deleteResponse.status === 204) {
        const newTodoList = await getTodos();
        onTodoDelete(newTodoList.data);
      }
    } catch (error) {
      throw error;
    }
  }, []);

  const MyTodoList = todolist.map(
    (value) => {
      return (
        <li key={value.id}>
          <label>
            <input type='checkbox' checked={value.isCompleted} />
            <span>{value.todo}</span>
            <input type='button' data-testid='modify-button' value={"수정"} />
            <input
              type='button'
              data-testid='delete-button'
              value={"삭제"}
              onClick={() => {
                handleTodoDelete(value.id);
              }}
            />
          </label>
        </li>
      );
    },
    [todolist]
  );

  return <ul>{MyTodoList}</ul>;
};

export default TodoList;
