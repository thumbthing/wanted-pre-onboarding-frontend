import { TodoListData } from "../../pages/Todo";
import { deleteTodo } from "../../request/Api";

interface TodoListProps {
  todolist: TodoListData[];
}

const TodoList = ({ todolist }: TodoListProps) => {
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
                deleteTodo(value.id);
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
