import { Tag } from "../types";

const BASE_URL = "https://logiclike.com/docs/courses.json";

export const getTags = async (): Promise<Tag[]> => {
  const response = await fetch(BASE_URL);
  
  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }
  
  const data = await response.json();
  
  return data;
};
