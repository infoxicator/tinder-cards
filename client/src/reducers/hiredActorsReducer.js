import { HIRE_ACTOR, FETCH_HIRED_ACTORS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_HIRED_ACTORS:
      return state;
    case HIRE_ACTOR:
      return state.concat({ ...action.actor, position: action.position });
    default:
      return state;
  }
}
