import {
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
  SAVE_CUSTOMER_SUCCESS,
  SAVE_CUSTOMER_REQUEST,
  SAVE_CUSTOMER_FAILURE,
  TOGGLE_CUSTOMER_LOADER,
  SET_SELECTED_CUSTOMER,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
} from "invoice_manager_dashboard_ui/actionTypes";

export const initialState = {
  customers: [
    {
      customer_id: "h7pk00nw6b",
      customer_name: "test1",
      customer_email: "test3@gmail.com",
      customer_phone: "9067453126",
    },
    {
      customer_id: "g8jj57l5en",
      customer_name: "test1",
      customer_email: "test4@gmail.com",
      customer_phone: "9067453127",
    },
    {
      customer_id: "xmcyyey6gf",
      customer_name: "test1",
      customer_email: "test6@gmail.com",
      customer_phone: "9067453129",
    },
    {
      customer_id: "hizqg7qy50",
      customer_name: "test2",
      customer_email: "test10@gmail.com",
      customer_phone: "9087123210",
    },
    {
      customer_id: "hizqg7qy5g",
      customer_name: "test10",
      customer_email: "test5@gmail.com",
      customer_phone: "9067453128",
    },
  ],
  isLoading: false,
  selectedCustomer: {},
};

export default (state = initialState, action) => {
  const { type, payload = [] } = action;
  switch (type) {
    case GET_CUSTOMERS_REQUEST:
    case SAVE_CUSTOMER_REQUEST:
    case DELETE_CUSTOMER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: payload,
        isLoading: false,
      };
    case GET_CUSTOMERS_FAILURE:
    case SAVE_CUSTOMER_FAILURE:
    case DELETE_CUSTOMER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SAVE_CUSTOMER_SUCCESS:
      let updateCustomers = state.customers;
      if (payload.isEditing) {
        updateCustomers = state.customers.filter(
          ({ customer_id }) => customer_id !== payload.customerData.customer_id
        );
      }
      return {
        ...state,
        customers: [
          ...updateCustomers,
          {
            ...payload.customerData,
          },
        ],
        isLoading: false,
      };
    case TOGGLE_CUSTOMER_LOADER:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    case SET_SELECTED_CUSTOMER:
      return {
        ...state,
        selectedCustomer: { ...payload.customerData },
      };
    case DELETE_CUSTOMER_SUCCESS:
      const updatedCustomers = state.customers.filter(
        ({ customer_id }) => customer_id !== payload.customer_id
      );
      return {
        ...state,
        customers: updatedCustomers,
        isLoading: false,
      };
    default:
      return state;
  }
};
