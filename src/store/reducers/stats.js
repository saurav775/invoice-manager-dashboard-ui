import {
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_FAILURE,
} from "invoice_manager_dashboard_ui/actionTypes";

export const initialState = {
  stats: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  const { type, payload = [] } = action;
  switch (type) {
    case GET_STATS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STATS_SUCCESS:
      return {
        ...state,
        stats: payload,
        isLoading: false,
      };
    case GET_STATS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
