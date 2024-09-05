// hashPassword:
// Purpose: This function takes a plain text password and converts it into a hashed (encrypted) version.
// comparePassword:
// Purpose: This function compares a plain text password with a hashed password to check if they match.

import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
