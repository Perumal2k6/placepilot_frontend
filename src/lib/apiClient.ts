/**
 * API Client Configuration
 * 
 * This file prepares the frontend for backend integration.
 * Currently, no real network requests are made.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

/**
 * Example helper to configure future fetch/axios requests.
 * Real implementation will attach JWT tokens here.
 */
export const getAuthHeaders = (): HeadersInit => {
  const token = localStorage.getItem("auth_token");
  if (!token) return { "Content-Type": "application/json" };
  
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
};

export { API_BASE_URL };
