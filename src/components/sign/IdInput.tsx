import { ChangeEvent, useCallback } from 'react';
import { StyledUserInformationBox } from '../style';

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
		<IdContainer>
			<span>이메일</span>
			<input
				data-testid="email-input"
				type="text"
				onChange={handleIdValidation}
			/>
		</IdContainer>
	);
};

export default IdInput;

const IdContainer = StyledUserInformationBox;
