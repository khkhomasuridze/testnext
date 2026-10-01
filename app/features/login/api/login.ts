"use server"

export interface LoginResponse {
  accessToken: string;
}

export default async function login(email: string): Promise<LoginResponse>{

  const response = await fetch(`${process.env.API_URL}/api/Auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   email,
    //   password,
    // }),
  });

  if (!response.ok) {
    // Handle HTTP errors (e.g., 401 Unauthorized, 400 Bad Request)
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to log in');
  }

  return await response.json();
}