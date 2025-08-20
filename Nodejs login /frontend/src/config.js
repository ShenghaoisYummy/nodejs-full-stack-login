// API Configuration
const getApiUrl = () => {
  // Check if running on Vercel (production)
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return window.location.origin;
  }
  // Development environment
  return 'http://localhost:18765';
};

export const API_BASE_URL = getApiUrl();
export const API_ENDPOINTS = {
  LOGIN: '/api/login',
  REGISTER: '/api/register',
  PROFILE: '/api/profile'
};