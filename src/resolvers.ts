import { environment } from './environment';

export const resolvers = {
  Query: {
    testMessage: () => environment.secretMessage,
  },
};
