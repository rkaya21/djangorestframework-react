import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
	const navigate = useNavigate();

	useEffect(() => {
		const logout = async () => {
			try {
				await axiosInstance.post('user/logout/blacklist/', {
					refresh_token: localStorage.getItem('refresh_token'),
				});
				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');
				axiosInstance.defaults.headers['Authorization'] = null;
				navigate('/login'); 
			} catch (error) {
				console.error("Çıkış işlemi başarısız:", error);
			}
		};

		logout();
	}, [navigate]); 

	return <div>Çıkış</div>;
}
