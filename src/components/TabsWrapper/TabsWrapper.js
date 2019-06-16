import React, { Component } from "react";

const tabsData = [
  { name: "Tab 1", panel: "Panel for tab 1" },
  { name: "Tab 2", panel: "Panel for tab 2" },
  { name: "Tab 3", panel: "Panel for tab 3" }
];

export const TabsContext = React.createContext({
  selectedTabIndex: 0,
  tabsData
});

class TabsWrapper extends Component {
  state = {
    selectedTabIndex: 0,
    data: []
  }

  selectTab = selectedTabIndex => this.setState({ selectedTabIndex });

  render() {
    const { selectTab, state: { selectedTabIndex } } = this;

    return (
      <TabsContext.Provider value={{
        selectedTabIndex,
        selectTab,
        tabsData
      }}>
        {this.props.children}
      </TabsContext.Provider>
    )
  }
}

export default TabsWrapper;