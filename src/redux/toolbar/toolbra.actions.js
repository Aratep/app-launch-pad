import { ToolbarTypes } from "./toolbar.action-types";

//SET TOOLBAR PARAM
export const setToolbarParam = (property, value) => ({
   type: ToolbarTypes.SET_TOOLBAR_PARAM,
   property,
   value,
});

//SET SELECTED SCREEN
export const setSelectedScreen = (selectedScreen) => ({
   type: ToolbarTypes.SET_SELECTED_SCREEN,
   payload: selectedScreen,
});

//CHANGE DEVICES ARRAY PROPERTY
export const updateSelectedScreen = (uid, text) => ({
   type: ToolbarTypes.UPDATE_SELECTED_SCREEN,
   uid,
   text,
});
