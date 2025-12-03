// API Configuration
const API_CONFIG = {
  // Change this to your Railway backend URL after deployment
  BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-url.railway.app'
    : 'http://localhost:5000',
  
  ENDPOINTS: {
    CONTACT: '/api/contact',
    GALLERY: '/api/gallery',
    HEALTH: '/api/health'
  }
};

export default API_CONFIG;
