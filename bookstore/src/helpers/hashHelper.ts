import crypto from "crypto";

export const hashPassword = (password: string): string => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

export const comparePassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};
