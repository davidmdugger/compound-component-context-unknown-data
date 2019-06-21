import React from 'react';
import { TabsContext } from '../TabsWrapper/TabsWrapper';

export default () => {
  return (
    <div className="tab-list">
      <TabsContext.Consumer>
        {({ quotes, data, selectedTabIndex, selectTab }) => {
          return quotes.map(q => Object.keys(q).map(k => (
            <button className="tab" key={k} style={{ backgroundColor: selectedTabIndex === k ? '#ccc' : 'white' }} onClick={() => {
              selectTab(k);
            }}>{`${k}-mo`}</button>
          )))
          // return data.map(({ name }, index) => (
          //   <button className="tab" key={index} style={{ backgroundColor: selectedTabIndex === index ? '#ccc' : 'white' }} onClick={() => {
          //     selectTab(index);
          //   }}>{name}</button>
          // ));
        }}
      </TabsContext.Consumer>
    </div>
  )
}