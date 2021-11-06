import api from '../../api';
import query from './query';

const search = async (vars) => {
	const response = await api(query, vars);
	if (response === undefined)
		return {
			data: null,
			error: 'No response from the server.',
		};
	if (response.error) return response;
	return response;
};

export default search;
