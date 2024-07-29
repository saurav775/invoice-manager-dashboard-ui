import {
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_FAILURE,
} from "invoice_manager_dashboard_ui/actionTypes";

import { BASE_URL_V1 } from "invoice_manager_customer_ui/constants";

export const getStats = () => async (dispatch) => {
  dispatch({ type: GET_STATS_REQUEST });
  try {
    const response = await fetch(`${BASE_URL_V1}/stats`);
    const transformedResponse = await response.json();
    dispatch({ type: GET_STATS_SUCCESS, payload: transformedResponse[0] });
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_STATS_FAILURE, error });
  }
};
