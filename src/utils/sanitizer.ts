import type { QuoteFormData, FormValidationResult } from '../types';

/**
 * Sanitizes generic string inputs against XSS and HTML injections
 */
export function sanitizeText(input: string): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // remove HTML tag markers
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}

/**
 * Formats a Brazilian phone number with mask (XX) XXXXX-XXXX or (XX) XXXX-XXXX
 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (!digits) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

/**
 * Validates email format strictly
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number (must have at least 10 digits)
 */
export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 11;
}

/**
 * Form validation with detailed error mapping
 */
export function validateQuoteForm(data: QuoteFormData): FormValidationResult {
  const errors: Partial<Record<keyof QuoteFormData, string>> = {};

  const cleanName = sanitizeText(data.name);
  if (!cleanName || cleanName.length < 3) {
    errors.name = 'Por favor, informe o seu nome completo (mínimo 3 caracteres).';
  }

  const cleanCompany = sanitizeText(data.company);
  if (!cleanCompany || cleanCompany.length < 2) {
    errors.company = 'Informe a razão social ou nome fantasia da sua empresa.';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Insira um e-mail corporativo válido para envio da proposta.';
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = 'Informe um telefone/WhatsApp válido com DDD (ex: (12) 99999-9999).';
  }

  if (!data.segment) {
    errors.segment = 'Selecione o segmento principal de interesse.';
  }

  if (!data.lgpdConsent) {
    errors.lgpdConsent = 'É necessário aceitar os termos de contato e tratamento de dados conforme a LGPD.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
