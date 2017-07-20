

import { FETCH_USER } from "../actions";

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_USER:
      return action.error ? {} : { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
