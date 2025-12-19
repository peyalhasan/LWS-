import { faker } from '@faker-js/faker';

const THRESHOLD = 100;

export const animals = Array.from(Array(THRESHOLD), () => {
  return {
    id: faker.string.alphanumeric(5),
    name: faker.animal.bear(),
  };
});