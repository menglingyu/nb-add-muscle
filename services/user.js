import gql from "graphql-tag";
import { AsyncStorage } from "react-native";

const GET_USER_INFO = gql`
  query userInfo {
    userInfo {
      name
      gender
      weight
      age
      height
      custom
      targetWeight
      # target
    }
  }
`;

const MUTATION_USER_INFO = gql`
  mutation updateUserInfo($data: InputUserInfo) {
    updateUserInfo(data: $data) {
      code
      success
      message
    }
  }
`;

const typeDefs = gql`
  type updateUserInfoResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type InputUserInfo {
    name: String
    gender: Int
    weight: Int
    height: Int
    custom: String
    age: Int
  }

  extend type Mutation {
    updateUserInfo(data: InputUserInfo): updateUserInfoResponse
  }
`;

export { GET_USER_INFO, MUTATION_USER_INFO };
