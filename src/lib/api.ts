/**
 * API Helper Functions
 * 
 * This file contains helper functions for making API calls to the ProofDeed backend.
 * All API calls use the VITE_API_URL environment variable.
 * 
 * BACKEND ARCHITECTURE SPECIFICATION
 * ===================================
 * 
 * ENVIRONMENT VARIABLES (Frontend):
 * - VITE_API_URL: Base URL for all API endpoints
 * 
 * ENVIRONMENT VARIABLES (Backend):
 * - JWT_SECRET: Secret key for JWT token generation
 * - RATE_LIMIT_WINDOW: Time window for rate limiting (e.g., "15m")
 * - RATE_LIMIT_MAX: Maximum requests per window (e.g., 100)
 * 
 * SECURITY REQUIREMENTS (All Endpoints):
 * - Express rate limiting middleware (recommended: 10 requests per 15 minutes)
 * - Honeypot validation (hidden "website" field must be empty)
 * - Zod input validation
 * - UUID generation for all IDs (proofId, leadId, partnerId, userId)
 * - Audit logging with IP + timestamp + user agent
 * - Email notifications where applicable
 * 
 * DATABASE TABLES:
 * - users: User authentication and management
 * - documents: Certified records with hashes and blockchain anchors
 * - audit_logs: Complete audit trail of all actions
 * - leads: General contact form submissions
 * - government_leads: Government agency contact submissions
 * - affiliates: Affiliate partner applications
 * 
 * API ENDPOINTS:
 * ==============
 * 
 * VALIDATION ENDPOINT:
 * POST /api/validate
 * Purpose: Lookup and verify a certified record
 * Request: { verificationId?: string, hash?: string, website?: string }
 * Response: { valid: boolean, metadata: {...}, blockchainTx: string, timestamp: string }
 * Security: Rate limit, honeypot check, audit log all lookups
 * 
 * GOVERNMENT LEAD ENDPOINT:
 * POST /api/government-lead
 * Purpose: Submit government agency contact form
 * Request: { name: string, agency: string, email: string, message: string, website?: string }
 * Response: { success: boolean, leadId: string }
 * Security: Validate all fields, honeypot check, rate limit, store in government_leads table
 * Email: Send notification to info@proofdeed.com
 * 
 * AFFILIATE APPLICATION ENDPOINT:
 * POST /api/affiliate-apply
 * Purpose: Submit affiliate partner application
 * Request: { name: string, email: string, company: string, phone?: string, message: string, website?: string }
 * Response: { success: boolean, partnerId: string }
 * Security: Validate all fields, honeypot check, rate limit, store in affiliates table
 * Email: Send notification to info@proofdeed.com
 * 
 * LEGAL INTAKE ENDPOINT:
 * POST /api/legal-intake
 * Purpose: Submit legal/title document for certification
 * Request: FormData with file upload (max 25MB)
 * Response: { success: boolean, proofId: string, hash: string, verificationId: string }
 * Security: File size validation, honeypot check, rate limit, store metadata only
 * Note: Do not store actual file, only generate and store hash
 * 
 * AUTOMOTIVE INTAKE ENDPOINT:
 * POST /api/auto-intake
 * Purpose: Submit vehicle document for certification
 * Request: FormData with VIN, buyer, seller, price, state, optional file (max 25MB)
 * Response: { success: boolean, proofId: string, hash: string, verificationId: string }
 * Security: File size validation, honeypot check, rate limit, store metadata only
 * Note: Do not store actual file, only generate and store hash
 * 
 * CORE ENDPOINTS (from previous architecture):
 * POST /api/submit - General document submission
 * POST /api/verify - Verify document proof
 * POST /api/signup - User registration
 * POST /api/contact - General contact form
 * 
 * LEGACY ENDPOINTS (maintain for compatibility):
 * POST /api/notary/intake - Legal/notary document intake
 * POST /api/notary/verify - Verify notary document
 * POST /api/auto/intake - Automotive document intake
 * POST /api/auto/verify - Verify automotive document
 * POST /api/gov/contact - Government contact (alias for /api/government-lead)
 * POST /api/gov/record-qa - Government record Q&A
 * POST /api/gov/fraud-check - Government fraud check
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * API Endpoint Constants
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
 * Error Messages
 */
export const ERROR_MESSAGES = {
  SUBMISSION_FAILED: 'Submission failed. Please try again.',
  RATE_LIMIT: 'Too many attempts. Please wait and retry.',
  INVALID_HONEYPOT: 'Invalid submission detected.',
  VALIDATION_FAILED: 'Please fill in all required fields.',
  FILE_TOO_LARGE: 'File size exceeds maximum limit (25MB).',
  NETWORK_ERROR: 'Network error. Please check your connection.',
};

/**
 * Validate honeypot field (must be empty)
 * @param honeypotValue - Value of the honeypot field
 * @returns true if valid (empty), false if spam detected
 */
export function validateHoneypot(honeypotValue: string): boolean {
  return honeypotValue === '';
}

/**
 * Create FormData from object
 * @param data - Object with form data
 * @returns FormData instance
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
 * Generic API POST helper
 * @param endpoint - API endpoint path (e.g., '/api/validate')
 * @param data - Request payload (object or FormData)
 * @returns Promise with response data
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
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Validate a certified record
 * POST /api/validate
 */
export async function validateRecord(verificationId: string, hash?: string) {
  return apiPost('/api/validate', {
    verificationId,
    hash,
    website: '', // honeypot field
  });
}

/**
 * Submit government agency contact form
 * POST /api/government-lead
 */
export async function submitGovernmentLead(data: {
  name: string;
  agency: string;
  email: string;
  message: string;
}) {
  return apiPost('/api/government-lead', {
    ...data,
    website: '', // honeypot field
  });
}

/**
 * Submit affiliate partner application
 * POST /api/affiliate-apply
 */
export async function submitAffiliateApplication(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}) {
  return apiPost('/api/affiliate-apply', {
    ...data,
    website: '', // honeypot field
  });
}

/**
 * Submit legal/title document for certification
 * POST /api/legal-intake
 */
export async function submitLegalIntake(formData: FormData) {
  // Ensure honeypot field is included
  if (!formData.has('website')) {
    formData.append('website', '');
  }
  return apiPost('/api/legal-intake', formData);
}

/**
 * Submit automotive document for certification
 * POST /api/auto-intake
 */
export async function submitAutoIntake(formData: FormData) {
  // Ensure honeypot field is included
  if (!formData.has('website')) {
    formData.append('website', '');
  }
  return apiPost('/api/auto-intake', formData);
}
