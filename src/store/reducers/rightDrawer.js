import { TOGGLE_RIGHT_DRAWER } from "invoice_manager_dashboard_ui/actionTypes";

export const initialState = {
  isOpen: false,
};

export default (state = initialState, action) => {
  const { type, payload = [] } = action;
  switch (type) {
    case TOGGLE_RIGHT_DRAWER:
      return {
        ...state,
        isOpen: payload?.isOpen,
      };
    default:
      return state;
  }
};
