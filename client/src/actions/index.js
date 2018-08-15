import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
import { FETCH_ACTORS, HIRE_ACTOR, FETCH_HIRED_ACTORS } from './types';

const endpointURL = '/graphql';

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

export const hireActor = (actor, position) => ({ type: HIRE_ACTOR, actor, position });

export const fetchHiredActors = () => ({ type: FETCH_HIRED_ACTORS });
