import React from "react";

import ScreenshotBuilderSidebar from "./layout/toolbar/Toolbar.layout";
import ResultBlock from "./layout/result-block/ResultBlock.layout";

const ScreenshotBuilder = () => {
   return (
      <main className="screenshot-builder-page">
         <ScreenshotBuilderSidebar />
         <ResultBlock />
      </main>
   );
};

export default ScreenshotBuilder;
