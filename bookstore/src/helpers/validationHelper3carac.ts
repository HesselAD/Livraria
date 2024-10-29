// src/helpers/validationHelper.ts

// Valida se o título tem no mínimo 3 caracteres
export const isValidTitle = (title: string): boolean => {
  return title.length >= 3;
};
