import { GET_POINTS,RECEIVED_POINTS } from "../actions/types";

export const pointsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POINTS:
      return { ...state, loading: true };
    case RECEIVED_POINTS:
      return { ...state, points: action.payload, loading: false };
    default:
      return state;
  }
};
