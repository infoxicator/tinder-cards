import { FETCH_ACTORS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ACTORS:
      return action.payload;
    default:
      return state;
  }
}
