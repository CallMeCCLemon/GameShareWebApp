/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    title
    description
    rating
    releaseDate
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      rating
      releaseDate
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($email: String!, $rating: Float!) {
  getUser(email: $email, rating: $rating) {
    id
    username
    email
    rating
  }
}
`;
export const listUsers = `query ListUsers(
  $email: String
  $rating: ModelFloatKeyConditionInput
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    email: $email
    rating: $rating
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      username
      email
      rating
    }
    nextToken
  }
}
`;
