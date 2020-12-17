import { ToolbarTypes } from "./toolbar.action-types";

const initialState = {
   text: "",
};

export const toolbarReducer = (state = initialState, action) => {
   switch (action.type) {
      case ToolbarTypes.SET_TOOLBAR_PARAM: {
         return { ...state, [action.property]: action.value };
      }
      default:
         return state;
   }
};
