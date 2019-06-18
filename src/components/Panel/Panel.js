import React from 'react';
import { TabsContext } from '../TabsWrapper/TabsWrapper'

export default () => {
  return (
    <div className="panel-list">
      <TabsContext.Consumer>
        {({ selectedTabIndex, data }) => {
          return data.map((tab, index) => (
            <div key={index} hidden={selectedTabIndex !== index}>
              {tab.panel}
            </div>
          ))
        }}
      </TabsContext.Consumer>
    </div>
  )
}