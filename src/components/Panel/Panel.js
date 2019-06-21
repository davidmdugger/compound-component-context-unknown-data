import React from 'react';
import { TabsContext } from '../TabsWrapper/TabsWrapper'

export default () => {
  return (
    <div className="panel-list">
      <TabsContext.Consumer>
        {({ quotes, selectedTabIndex }) => {
          return quotes.map(q => (
            <span key={q}>
              { /* loop through the object's keys, only need the key because it corresponds to the selected tab in */}
              {Object.keys(q).map(key => (
                <span key={key} className={`key-div-${key}`}>
                  {Object.values(q).map(values => (
                    <div key={values[0]} hidden={selectedTabIndex !== key}>
                      <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }} className="panel">
                        <div>Header</div>
                        <div key={values} style={{ display: 'flex', flex: '1' }} className="quotes-div">
                          {values.map(v => (
                            <div key={v} style={{ display: 'flex', flexDirection: 'column', 'flex': '1' }} className="section">
                              <div>{v}%</div>
                              <div>Minimum $5,000 deposit</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </span>
              ))}
            </span>
          ))
        }}
      </TabsContext.Consumer>
    </div>
  )
}