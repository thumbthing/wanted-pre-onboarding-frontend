import { ChangeEvent, useCallback } from 'react';
import { createTodo } from '../../request/Api';
import { TodoListData } from '../../pages/Todo';

interface TodoInputProps {
	onChange: (value: string) => void;
	todo: string;
	onTodoCreate: (value: TodoListData) => void;
}

const TodoCreate: React.FC<TodoInputProps> = ({
	onChange,
	todo,
	onTodoCreate,
}) => {
	const handleTodoInput = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	const handleTodoCreate = useCallback(async () => {
		try {
			const response = await createTodo(todo);
			onTodoCreate(response?.data);
		} catch (error) {
			throw error;
		}
	}, [todo, onTodoCreate]);

	return (
		<div>
			<input
				type="text"
				data-testid="new-todo-input"
				onChange={handleTodoInput}
				value={todo}
			/>
			<button data-testid="new-todo-add-button" onClick={handleTodoCreate}>
				추가
			</button>
		</div>
	);
};

export default TodoCreate;
