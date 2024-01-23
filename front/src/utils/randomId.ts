import { nanoid, customAlphabet } from "nanoid";

export const getRandomId = () => {
  return nanoid();
};

export const getRandomNumberId = () => {
  const nanoid = customAlphabet("1234567890", 18);
  return nanoid();
};
