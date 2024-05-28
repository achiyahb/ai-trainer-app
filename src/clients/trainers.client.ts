import Axios from 'axios';
import { TrainerInterface } from '@/interfaces/trainer.interface';
import { Endpoints } from '@/app/enums/endpoints';
import { getCookie } from '@/utils/cookies/cookies';

const BACKEND_BASE_URL = 'http://localhost:3200';

export const createTrainer = async (trainer: TrainerInterface) => {
	const response = await Axios.post(`${BACKEND_BASE_URL}/${Endpoints.TRAINERS}`, trainer, {
		withCredentials: true,
		headers: { Authorization: `Bearer ${await getCookie('accessToken')}` },
	});
	return response?.data;
};

export const getTrainers = async () => {
	try {
		const response = await Axios.get(`${BACKEND_BASE_URL}/${Endpoints.TRAINERS}`, {
			withCredentials: true,
			headers: { Authorization: `Bearer ${await getCookie('accessToken')}` },
		});
		return response?.data;
	} catch (e) {
		console.error(e);
	}
};
