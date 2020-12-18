import { ToolbarTypes } from "./toolbar.action-types";

//SET SELECTED SCREEN
export const setSelectedScreen = (selectedScreen) => ({
   type: ToolbarTypes.SET_SELECTED_SCREEN,
   payload: selectedScreen,
});

//CHANGE DEVICES ARRAY PROPERTY
export const updateSelectedScreen = (uid, text, image) => ({
   type: ToolbarTypes.UPDATE_SELECTED_SCREEN,
   uid,
   text,
   image,
});
