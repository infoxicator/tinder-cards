import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
import { FETCH_ACTORS, HIRE_ACTOR, FETCH_HIRED_ACTORS } from './types';

const endpointURL = 'http://localhost:9000/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: endpointURL }),
  cache: new InMemoryCache(),
});


export const fetchActors = () => async (dispatch) => {
  const query = gql`{
      actors {
        id,
        name,
        picture,
        profileUrl
      }
  }`;

  const { data: { actors } } = await client.query({ query });
  dispatch({ type: FETCH_ACTORS, payload: actors });
};

  /* const res = [
    {
      id: 1,
      name: 'Ruben',
      picture: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg',
      profileUrl: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg',
    },
    {
      id: 2,
      name: 'Tom Cruise',
      picture: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg',
    },
    {
      id: 3,
      name: 'The Rock',
      picture: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg',
    },
    {
      id: 4,
      name: 'Nataly Portman',
      picture: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg',
    },
    {
      id: 5,
      name: 'Milla Kunnis',
      picture: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg',
    },
    {
      id: 6,
      name: 'Brad Pitt',
      picture: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg',
    },
  ]; */

export const hireActor = (actor, position) => ({ type: HIRE_ACTOR, actor, position });

export const fetchHiredActors = () => ({ type: FETCH_HIRED_ACTORS });
