import { ToolbarTypes } from "./toolbar.action-types";
//UTILITIES
import { generateUID } from "utilities/helperFunctions";

const initialState = {
   selectedScreen: {},
   devicesArray: [
      {
         uid: generateUID(),
         text: "Heading 1",
         image: "",
      },
      {
         uid: generateUID(),
         text: "Heading 2",
         image: "",
      },
      {
         uid: generateUID(),
         text: "Heading 3",
         image: "",
      },
   ],
};

export const toolbarReducer = (state = initialState, action) => {
   switch (action.type) {
      case ToolbarTypes.SET_SELECTED_SCREEN: {
         return { ...state, selectedScreen: action.payload };
      }
      case ToolbarTypes.UPDATE_SELECTED_SCREEN: {
         const prop = state.devicesArray.filter(
            (item) => item.uid === action.uid
         );
         prop[0].text = action.text;
         prop[0].image = action.image;
         return { ...state, devicesArray: state.devicesArray };
      }
      default:
         return state;
   }
};
