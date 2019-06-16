import React from 'react';
import { TabsContext } from '../TabsWrapper/TabsWrapper';

export default () => {
  return (
    <div className="tab-list">
      <TabsContext.Consumer>
        {({ tabsData, selectedTabIndex, selectTab }) => {
          return tabsData.map(({ name }, index) => (
            <button className="tab" key={index} style={{ backgroundColor: selectedTabIndex === index ? '#ccc' : 'white' }} onClick={() => {
              selectTab(index);
            }}>{name}</button>
          ));
        }}
      </TabsContext.Consumer>
    </div>
  )
}