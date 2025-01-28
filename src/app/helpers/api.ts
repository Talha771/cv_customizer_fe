const API_BASE_URL = process.env.BACKEND_BASE_URL;

export async function apiCall(endpoint:string, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
