const API_BASE_URL = process.env.BACKEND_BASE_URL;

export async function apiCall(endpoint:string, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export function checkString(languages: string, tools: string): boolean {
  const isValidCommaSeparated = (str: string) => {
    const regex = /^[a-zA-Z0-9]+(,[a-zA-Z0-9]+)*$/;
    return regex.test(str) && str.trim() !== '';
  };
  const isLanguagesValid = isValidCommaSeparated(languages);
  const isToolsValid = isValidCommaSeparated(tools);
  return isLanguagesValid && isToolsValid;
}