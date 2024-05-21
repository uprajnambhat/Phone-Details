import { phoneDetails } from "../../json-phone-details";

const initialState = {
  fullphoneDetails: phoneDetails,
  selectedBrandDetails: {},
  catData: [],
};

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EACH_BRAND_DETAILS":
      return {
        ...state,
        selectedBrandDetails: action.payload,
      };
    case "UPDATE_CAT_DATA":
      return {
        ...state,
        catData: action.payload,
      };

    default:
      return state;
  }
};
