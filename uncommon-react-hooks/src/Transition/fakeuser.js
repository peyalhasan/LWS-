import { faker } from '@faker-js/faker';

const THRESHOLD = 100;

export const users = Array.from(Array(THRESHOLD), () => {
    // console.log(faker.person)
  return {
    name: faker.person.fullName(),
    avatar: faker.image.avatar()
  };
});