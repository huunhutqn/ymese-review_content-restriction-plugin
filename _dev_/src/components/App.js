import React, { Component } from "react";

import ContentProtection from './ContentProtection';
import PrivateLink from './PrivateLink';
import Info from './Info';

import { Tabs, Icon } from 'antd';

import '../styles/App.css';

const { TabPane } = Tabs;

class App extends Component {
  crClose() {
    document.getElementById("content-restriction").style.display = "none";
    return false;
  }
  render() {
    return (
      <div className="cr__main">
        <a className="cr__close-btn" onClick={ () => this.crClose()}><Icon type="close" /></a>
        <Info />
        <Tabs defaultActiveKey="01" className="cr__parent-tab">
          <TabPane tab="Content Protection" className="cr__child-tab cr__cp-tab" key="01">
            <ContentProtection />
          </TabPane>
          <TabPane tab="Private Link" className="cr__child-tab cr__pl-tab" key="02">
            <PrivateLink />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;