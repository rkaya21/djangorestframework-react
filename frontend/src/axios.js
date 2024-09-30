import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/';

/*
  Axios ayarları:
  - baseURL: API'nin ana URL
  - timeout: Bekleme süresi 
  - headers: API'ye isteğiyle gönderilen ek başlıklar (ör: JWT Token) => Django core settings.py içinde SIMPLE_JWT altında
  'AUTH_HEADER_TYPES' bu yüzden önemli.
*/

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem('access_token')
      ? 'JWT ' + localStorage.getItem('access_token')
      : null, // 'null' yerine null olarak bırakmak daha doğru
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

// Yanıt interceptor'ü
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // refresh_token kontrolü
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const response = await axiosInstance.post('/token/refresh/', {
            refresh: refreshToken,
          });

          localStorage.setItem('access_token', response.data.access);

          axiosInstance.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
          originalRequest.headers['Authorization'] = 'JWT ' + response.data.access;

          return axiosInstance(originalRequest);
        } catch (err) {
          console.error("Token yenileme işlemi başarısız oldu.");
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login/';
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;