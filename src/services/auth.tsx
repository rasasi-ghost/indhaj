const API_BASE_URL = 'https://flazzard-001-site1.qtempurl.com';

export const loginRequest = async (username: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/api/Account/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password
    })
  });
  
  if (!response.ok) {
    // Handle HTTP errors
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
  }
  
  return await response.json();
};

export const registerRequest = async (phone: string, email: string, password: string, organization: string) => {
  const response = await fetch(`${API_BASE_URL}/api/Account/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phone,
      email,
      password,
      organization
    })
  });
  
  if (!response.ok) {
    // Handle HTTP errors
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
  }
  
  return await response.json();
};

