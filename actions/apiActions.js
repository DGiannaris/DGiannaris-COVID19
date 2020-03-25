import { GET_POINTS, ASK_POINTS ,RECEIVED_POINTS} from "./types";

export const getPointsAction = () => {
    return { type: GET_POINTS }
  };
export const receivedPointsAction = (data) => {
  return { type: RECEIVED_POINTS ,payload:data}
};
