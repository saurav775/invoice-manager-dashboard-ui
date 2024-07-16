import { TOGGLE_POPUP } from "invoice_manager_dashboard_ui/actionTypes";

export const initialState = {
  isOpen: false,
  message: "Are you sure?",
  title: "Popup",
  callback: () => {},
};

export default (state = initialState, action) => {
  const { type, payload = [] } = action;
  switch (type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        isOpen: payload.isOpen,
        message: payload?.message || state.message,
        title: payload?.title || state.title,
        callback: payload?.callback || state.callback,
      };
    default:
      return state;
  }
};
