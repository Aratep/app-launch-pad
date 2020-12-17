import React from "react";

//COMPONENTS
import { ReTab } from "components/tabs/Tabs.component";
import { sidebarItems } from "./sidebar-items";

const Sidebar = () => {
   return (
      <aside className="sidebar">
         <ReTab
            selected={0}
            ariaLabel="Vertical Tabs"
            contentDefinition={sidebarItems}
         />
      </aside>
   );
};

export default Sidebar;
