import { useCallback } from "react";
import { TodoListData } from "../../pages/Todo";
import { deleteTodo, getTodos, updateTodo } from "../../request/Api";

interface TodoListProps {
  todolist: TodoListData[];
  onGetNewTodoList: (value: TodoListData[]) => void;
}

const TodoList = ({ todolist, onGetNewTodoList }: TodoListProps) => {
  const handleTodoDelete = useCallback(async (id: number) => {
    try {
      const deleteResponse = await deleteTodo(id);
      if (deleteResponse.status === 204) {
        const newTodoList = await getTodos();
        onGetNewTodoList(newTodoList.data);
      }
    } catch (error) {
      throw error;
    }
  }, []);

  const handleTodoUpdate = useCallback(
    async (id: number, todo: string, isCompleted: boolean) => {
      try {
        const updateResponse = await updateTodo(id, todo, isCompleted);
        if (updateResponse.status === 200) {
          const newTodoList = await getTodos();
          onGetNewTodoList(newTodoList.data);
        }
      } catch (error) {
        throw error;
      }
    },
    []
  );

  const MyTodoList = todolist.map(
    (value) => {
      return (
        <li key={value.id}>
          <label>
            <input
              type='checkbox'
              checked={value.isCompleted}
              onChange={() =>
                handleTodoUpdate(value.id, value.todo, !value.isCompleted)
              }
            />
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
