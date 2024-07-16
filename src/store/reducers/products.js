import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_REQUEST,
  SAVE_PRODUCT_FAILURE,
  TOGGLE_PRODUCT_LOADER,
  SET_SELECTED_PRODUCT,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from "invoice_manager_dashboard_ui/actionTypes";

export const initialState = {
  products: [],
  isLoading: false,
  selectedProduct: {},
};

export default (state = initialState, action) => {
  const { type, payload = [] } = action;
  switch (type) {
    case GET_PRODUCTS_REQUEST:
    case SAVE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case GET_PRODUCTS_FAILURE:
    case SAVE_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SAVE_PRODUCT_SUCCESS:
      let updateProducts = state.products;
      if (payload.isEditing) {
        updateProducts = state.products.filter(
          ({ product_id }) => product_id !== payload.productData.product_id
        );
      }
      return {
        ...state,
        products: [
          ...updateProducts,
          {
            ...payload.productData,
          },
        ],
        isLoading: false,
      };
    case TOGGLE_PRODUCT_LOADER:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: { ...payload.productData },
      };
    case DELETE_PRODUCT_SUCCESS:
      const updatedProducts = state.products.filter(
        ({ product_id }) => product_id !== payload.product_id
      );
      return {
        ...state,
        products: updatedProducts,
        isLoading: false,
      };
    default:
      return state;
  }
};
