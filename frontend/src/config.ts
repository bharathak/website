const API_BASE_URL = import.meta.env.PROD 
  ? 'https://api.your-domain.com' // Replace with your actual backend URL after deployment
  : ''; // In dev, we use the Vite proxy (empty string)

export default API_BASE_URL;
