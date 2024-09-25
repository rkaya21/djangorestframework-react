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
      : '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export default axiosInstance;
