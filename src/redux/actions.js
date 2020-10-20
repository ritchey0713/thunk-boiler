// export const addCount = () => ({ type: "INCREMENT_COUNT" })
import { incrementCount } from "../countService";
export const addCount = () => async (dispatch, getState) => {
  const newCount = await incrementCount();
  dispatch({
    type: "INCREMENT_COUNT",
    payload: newCount,
  });
};
