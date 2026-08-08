import { describe, expect, it } from 'vitest';
import {
  formatCPF,
  formatCEP,
  validateCPF,
  validateEmail,
} from './validation';

describe('validation', () => {
  it('validates CPF correctly', () => {
    expect(validateCPF('529.982.247-25')).toBe(true);
    expect(validateCPF('111.111.111-11')).toBe(false);
    expect(validateCPF('')).toBe(false);
  });

  it('formats CPF', () => {
    expect(formatCPF('52998224725')).toBe('529.982.247-25');
  });

  it('formats CEP', () => {
    expect(formatCEP('01310100')).toBe('01310-100');
  });

  it('validates email', () => {
    expect(validateEmail('user@mercadolar.com.br')).toBe(true);
    expect(validateEmail('invalid')).toBe(false);
  });
});
