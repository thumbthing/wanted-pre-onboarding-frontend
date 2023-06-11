import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div>not found page</div>
			<button
				onClick={() => {
					navigate('/');
				}}
			>
				홈으로
			</button>
		</div>
	);
};

export default NotFound;
