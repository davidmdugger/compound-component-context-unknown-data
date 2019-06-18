import React from 'react';
import { TabsContext } from '../TabsWrapper/TabsWrapper';

export default () => {
  return (
    <div className="tab-list">
      <TabsContext.Consumer>
        {({ data, selectedTabIndex, selectTab }) => {
          return data.map(({ name }, index) => (
            <button className="tab" key={index} style={{ backgroundColor: selectedTabIndex === index ? '#ccc' : 'white' }} onClick={() => {
              selectTab(index);
            }}>{name}</button>
          ));
        }}
      </TabsContext.Consumer>
    </div>
  )
}