import React from "react";

//ICONS
import textIcon from "assets/images/icons/text-icon.svg";
import screenShotIcon from "assets/images/icons/reader-icon.svg";

//TOOLBAR COMPONENTS
import TextTool from "./componens/tool-bars/text-tool/TextTools.component";
import ScreenshotTool from "./componens/tool-bars/screenshot-tool/ScreenshotTool.component";

export const toolbarItems = [
   {
      uid: Math.floor(100000 + Math.random() * 900000),
      tab: "Text",
      panel: <TextTool />,
      icon: textIcon,
   },
   {
      uid: Math.floor(100000 + Math.random() * 900000),
      tab: "Screenshot",
      panel: <ScreenshotTool />,
      icon: screenShotIcon,
   },
];
