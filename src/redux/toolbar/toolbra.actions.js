import { ToolbarTypes } from "./toolbar.action-types";

//SET TOOLBAR PARAM
export const setToolbarParam = (property, value) => ({
   type: ToolbarTypes.SET_TOOLBAR_PARAM,
   property,
   value,
});
