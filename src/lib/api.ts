const API_BASE_URL = '';

export const API_ENDPOINTS = {
  CONTACT: '/api/contact'
};

/* -------------------- CONTACT -------------------- */

export async function submitContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.CONTACT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

/* -------------------- HONEYPOT VALIDATION -------------------- */

export function validateHoneypot(value?: string) {
  if (value && value.trim() !== '') {
    throw new Error('Spam detected');
  }
}
