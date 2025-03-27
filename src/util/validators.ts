const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value !== "";

export const isValidFirstName = (value: unknown): boolean =>
  isNonEmptyString(value);

export const isValidLastName = (value: unknown): boolean =>
  isNonEmptyString(value);

export const isValidEmail = (value: unknown): boolean =>
  isNonEmptyString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isValidPassword = (value: unknown): boolean =>
  isNonEmptyString(value) && value.length >= 8;
