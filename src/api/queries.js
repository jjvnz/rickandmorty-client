/* eslint-disable no-unused-vars */
import { gql } from '@apollo/client';

export const GET_TOTAL_CHARACTERS = gql`
  query GetTotalCharacters {
    characters {
      info {
        count
      }
    }
  }
`;

export const CHARACTER_FIELDS = gql`
  fragment CharacterFields on Character {
    id
    name
    image
    status
    type
    gender
    species
    created
    location {
      name
    }
    origin {
      name
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      ...CharacterFields
    }
  }
${CHARACTER_FIELDS}
`;

export const GET_CHARACTERS = gql`
  query Getcharacters($status: String, $gender: String) {
    characters(filter: { status: $status, gender: $gender }) {
      results {
        ...CharacterFields
      }
    }
  }
${CHARACTER_FIELDS}
`;

export const GET_CHARACTERS_BY_NAME = gql`
  query GetCharactersByName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        ...CharacterFields
      }
    }
  }
${CHARACTER_FIELDS}
`;

export const GET_PAGINATED_CHARACTERS = gql`
  query GetPaginatedCharacters($status: String, $gender: String, $page: Int) {
    characters(filter: { status: $status, gender: $gender }, page: $page) {
      info {
        count
        pages
      }
      results {
        ...CharacterFields
      }
    }
  }
${CHARACTER_FIELDS}
`;

