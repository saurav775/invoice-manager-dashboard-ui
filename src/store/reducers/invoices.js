import {
  GET_INVOICES_REQUEST,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_FAILURE,
  SAVE_INVOICE_SUCCESS,
  SAVE_INVOICE_REQUEST,
  SAVE_INVOICE_FAILURE,
  TOGGLE_INVOICE_LOADER,
  SET_SELECTED_INVOICE,
  DELETE_INVOICE_REQUEST,
  DELETE_INVOICE_SUCCESS,
  DELETE_INVOICE_FAILURE,
  GET_INVOICE_DETAILS_REQUEST,
  GET_INVOICE_DETAILS_SUCCESS,
  GET_INVOICE_DETAILS_FAILURE,
} from "invoice_manager_dashboard_ui/actionTypes";

export const initialState = {
  invoices: [],
  invoiceDetails: [],
  isLoading: false,
  selectedInvoice: {},
};

export default (state = initialState, action) => {
  const { type, payload = [] } = action;
  switch (type) {
    case GET_INVOICES_REQUEST:
    case SAVE_INVOICE_REQUEST:
    case DELETE_INVOICE_REQUEST:
    case GET_INVOICE_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INVOICES_SUCCESS:
      return {
        ...state,
        invoices: payload,
        isLoading: false,
      };
    case GET_INVOICE_DETAILS_SUCCESS:
      return {
        ...state,
        invoiceDetails: payload,
        isLoading: false,
      };
    case GET_INVOICES_FAILURE:
    case SAVE_INVOICE_FAILURE:
    case DELETE_INVOICE_FAILURE:
    case GET_INVOICE_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SAVE_INVOICE_SUCCESS:
      let updateInvoices = state.invoices;
      if (payload.isEditing) {
        updateInvoices = state.invoices.filter(
          ({ invoice_id }) => invoice_id !== payload.invoiceData.invoice_id
        );
      }
      return {
        ...state,
        invoices: [
          ...updateInvoices,
          {
            ...payload.invoiceData,
          },
        ],
        isLoading: false,
      };
    case TOGGLE_INVOICE_LOADER:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    case SET_SELECTED_INVOICE:
      return {
        ...state,
        selectedInvoice: { ...payload.invoiceData },
      };
    case DELETE_INVOICE_SUCCESS:
      const updatedInvoices = state.invoices.filter(
        ({ invoice_id }) => invoice_id !== payload.invoice_id
      );
      return {
        ...state,
        invoices: updatedInvoices,
        isLoading: false,
      };
    default:
      return state;
  }
};
