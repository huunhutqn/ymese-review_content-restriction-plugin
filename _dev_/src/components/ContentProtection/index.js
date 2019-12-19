import React, { Component } from 'react';

import AccessPermission from './AccessPermission';
import Referer from './Referer';
import IPRestriction from './IPRestriction';

import { Tabs, Button, Form, Icon  } from 'antd';

const { TabPane } = Tabs;

class ContentProtection extends Component {
  render() {
    return (
      <div className="cr__cp-tab__main cr__body-tab">
        <Tabs tabPosition={'left'}>
          <TabPane 
            tab={
              <span>
                <Icon type="user" /> Access Permisson
              </span>
            }
            className="cr__cp-tab__child cr__cp-tab__ac-tab" key="1">
            <AccessPermission />
          </TabPane>
          <TabPane 
            tab={
              <span>
                <Icon type="api" /> Referer Link
              </span>
            }
            className="cr__cp-tab__child cr__cp-tab__rl-tab" key="2">
            <Referer />
          </TabPane>
          <TabPane 
            tab={
              <span>
                <Icon type="cluster" /> IP Restriction
              </span>
            }
            className="cr__cp-tab__child cr__cp-tab__ir-tab" key="3">
            <IPRestriction />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ContentProtection;
