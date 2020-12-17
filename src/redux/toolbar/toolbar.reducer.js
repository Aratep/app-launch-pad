import { ToolbarTypes } from "./toolbar.action-types";
//UTILITIES
import { generateUID } from "utilities/helperFunctions";

const initialState = {
   selectedScreen: {},
   devicesArray: [
      {
         uid: generateUID(),
         text: "text1",
         image: "",
      },
      {
         uid: generateUID(),
         text: "text2",
         image: "",
      },
      {
         uid: generateUID(),
         text: "text3",
         image: "",
      },
   ],
};

export const toolbarReducer = (state = initialState, action) => {
   switch (action.type) {
      case ToolbarTypes.SET_TOOLBAR_PARAM: {
         return { ...state, [action.property]: action.value };
      }
      case ToolbarTypes.SET_SELECTED_SCREEN: {
         return { ...state, selectedScreen: action.payload };
      }
      default:
         return state;
   }
};
