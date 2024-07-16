import { TOGGLE_SNACKBAR } from "invoice_manager_dashboard_ui/actionTypes";
import { INFO, ERROR } from "invoice_manager_customer_ui/constants";

export const initialState = {
  isOpen: false,
  message: "",
  type: ERROR,
};

export default (state = initialState, action) => {
  const { type, payload = [] } = action;
  switch (type) {
    case TOGGLE_SNACKBAR:
      return {
        ...state,
        isOpen: payload.isOpen,
        message: payload.message,
        type: payload.type,
      };
    default:
      return state;
  }
};
