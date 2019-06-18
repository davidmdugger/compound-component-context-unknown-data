import React from "react";
import TabsWrapper from './components/TabsWrapper/TabsWrapper';
import Tab from './components/Tab/Tab';
import Panel from './components/Panel/Panel';

const tabsData = [
  { name: "Tab 1", panel: "Panel for tab 1" },
  { name: "Tab 2", panel: "Panel for tab 2" },
  { name: "Tab 3", panel: "Panel for tab 3" }
];

export default () => {
  return (
    <TabsWrapper data={tabsData}>
      <Tab />
      <Panel />
    </TabsWrapper>
  )
} 