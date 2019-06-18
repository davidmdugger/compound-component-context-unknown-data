import React, { Component } from "react";

export const TabsContext = React.createContext({
  selectedTabIndex: 0,
});

class TabsWrapper extends Component {
  state = {
    selectedTabIndex: 0,
    data: []
  }

  selectTab = selectedTabIndex => this.setState({ selectedTabIndex });

  render() {
    const { selectTab, state: { selectedTabIndex }, props: { data } } = this;

    return (
      <TabsContext.Provider value={{
        selectedTabIndex,
        selectTab,
        data
      }}>
        {this.props.children}
      </TabsContext.Provider>
    )
  }
}

export default TabsWrapper;