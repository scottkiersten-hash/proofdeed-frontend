const API_BASE_URL = 'https://YOUR-BACKEND-URL.ondigitalocean.app';

/**
 * Endpoint constants
 */
export const API_ENDPOINTS = {
  LEGAL: {
    INTAKE: '/api/notary/intake',
    VERIFY: '/api/notary/verify',
  },
  AUTO: {
    INTAKE: '/api/auto/intake',
    VERIFY: '/api/auto/verify',
  },
  GOVERNMENT: {
    CONTACT: '/api/gov/contact',
    RECORD_QA: '/api/gov/record-qa',
    FRAUD_CHECK: '/api/gov/fraud-check',
  },
  CORE: {
    SUBMIT: '/api/submit',
    VERIFY: '/api/verify',
    VALIDATE: '/api/validate',
    SIGNUP: '/api/signup',
    CONTACT: '/api/contact',
  },
  AFFILIATE: {
    APPLY: '/api/affiliate-apply',
  },
};

/**
 * Honeypot validation
 */
export function validateHoneypot(value: string): boolean {
  return value === '';
}

/**
 * Create FormData helper
 */
export function createFormData(data: Record<string, unknown>): FormData {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    }
  });

  return formData;
}

/**
 * Generic POST helper
 */
export async function apiPost(
  endpoint: string,
  data: FormData | Record<string, unknown>
) {
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
