import React from "react";

import "./tabs.styles.scss";

export function ReTab(props) {
   const [selected, setSelected] = React.useState(props.selected || 0);
   const tabs = [],
      panels = [];

   for (const tabItemDefinition of props.contentDefinition) {
      const uid = tabItemDefinition.uid;
      const tabHtmlId = `retab__tabslist__tab-${uid}`;
      const panelHtmlId = `retab__tabpanel-${uid}`;

      tabs.push({
         uid: uid,
         htmlId: tabHtmlId,
         panelHtmlId: panelHtmlId,
         content: tabItemDefinition.tab,
         icon: tabItemDefinition.icon,
      });

      panels.push({
         uid: uid,
         htmlId: panelHtmlId,
         tabHtmlId: tabHtmlId,
         content: tabItemDefinition.panel,
      });
   }

   return (
      <div className="retab">
         <Tabs
            ariaLabel={props.ariaLabel}
            selected={selected}
            onTabSelected={setSelected}
            definition={tabs}
         />
         {selected <= tabs.length && (
            <Panel
               key={panels[selected].uid}
               controlledBy={panels[selected].tabHtmlId}>
               {panels[selected].content}
            </Panel>
         )}
      </div>
   );
}

function Tabs({ ariaLabel, selected, onTabSelected, definition }) {
   return (
      <div role="tablist" aria-label={ariaLabel} className="retab__tablist">
         {definition.map((tabDefinition, index) => (
            <Tab
               key={tabDefinition.uid}
               id={tabDefinition.htmlId}
               controls={tabDefinition.panelHtmlId}
               isSelected={index === selected}
               icon={tabDefinition.icon}
               onSelected={() => onTabSelected(index)}>
               {tabDefinition.content}
            </Tab>
         ))}
      </div>
   );
}

function Tab({ htmlId, controls, isSelected, onSelected, icon, children }) {
   return (
      <button
         id={htmlId}
         role="tab"
         aria-controls={controls}
         onClick={onSelected}
         className={`retab__tablist__tab ${isSelected ? "selected" : ""}`}>
         {icon && <img src={icon} alt="icon" />}
         {children}
      </button>
   );
}

function Panel({ htmlId, controlledBy, children }) {
   return (
      <div
         id={htmlId}
         role="tabpanel"
         aria-labelledby={controlledBy}
         className="retab__tabpanel">
         {children}
      </div>
   );
}
