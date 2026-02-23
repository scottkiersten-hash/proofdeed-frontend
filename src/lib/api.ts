const API_BASE_URL = 'https://YOUR-BACKEND-URL.ondigitalocean.app';

/**
 * Generic API POST helper
 */
export async function apiPost(endpoint: string, data: FormData | Record<string, unknown>) {
  const isFormData = data instanceof FormData;

  const options: {
    method: string;
    headers?: Record<string, string>;
    body: FormData | string;
  } = {
    method: 'POST',
    body: isFormData ? data : JSON.stringify(data),
  };

  if (!isFormData) {
    options.headers = {
      'Content-Type': 'application/json',
    };
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Non-JSON response received: ${text}`);
  }
}
