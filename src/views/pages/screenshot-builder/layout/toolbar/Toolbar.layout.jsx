import React from "react";

//COMPONENTS
import { ReTab } from "components/tabs/Tabs.component";
import { toolbarItems } from "./toolbar-items";

const Sidebar = () => {
   return (
      <aside className="toolbar">
         <ReTab
            selected={0}
            ariaLabel="Vertical Tabs"
            contentDefinition={toolbarItems}
         />
      </aside>
   );
};

export default Sidebar;
