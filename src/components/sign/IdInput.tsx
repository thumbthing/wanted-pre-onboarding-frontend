import { ChangeEvent, useCallback } from 'react';
import { styled } from 'styled-components';

interface IdInputProps {
	onChange: (value: string) => void;
}

const IdInput: React.FC<IdInputProps> = ({ onChange }) => {
	const handleIdValidation = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	return (
		<StyledIdBox>
			<span>이메일</span>
			<input
				data-testid="email-input"
				type="text"
				onChange={handleIdValidation}
			/>
		</StyledIdBox>
	);
};

export default IdInput;

const StyledIdBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 10px;
`;
