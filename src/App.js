import React from "react";
import TabsWrapper from './components/TabsWrapper/TabsWrapper';
import Tab from './components/Tab/Tab';
import Panel from './components/Panel/Panel';

const tabsData = [
  { name: "Tab 1", panel: "Panel for tab 1" },
  { name: "Tab 2", panel: "Panel for tab 2" },
  { name: "Tab 3", panel: "Panel for tab 3" }
];

const quotes = [
  { 3: ['1.20', '1.25', '1.35'] },
  { 6: ['2.40', '2.25', '2.35'] },
  { 9: ['3.40', '3.25', '3.35'] },
  { 12: ['4.40', '4.25', '4.35'] },
]

export default () => {
  return (
    <TabsWrapper quotes={quotes} data={tabsData}>
      <Tab />
      <Panel />
    </TabsWrapper>
  )
} 