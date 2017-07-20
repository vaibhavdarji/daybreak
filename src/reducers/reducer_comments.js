
import _ from "lodash";
import { FETCH_COMMENTS, FETCH_COMMENT } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_COMMENT:
      return action.error ? {} : { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_COMMENTS:
      return action.error ? {} : _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
