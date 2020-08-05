import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type Query {
    """
    A test message.
    """
    testMessage: String!
  }
`;
