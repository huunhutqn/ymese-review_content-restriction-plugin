import React, { Component } from "react";

import ContentProtection from './ContentProtection';
import PrivateLink from './PrivateLink';
import Info from './Info';

import { Tabs, Icon } from 'antd';

import '../styles/App.css';

const { TabPane } = Tabs;

class App extends Component {
  ppp_pClose() {
    document.getElementById("ppp-pop").style.display = "none";
    return false;
  }
  render() {
    return (
      <div className="ppp-p__container">
        <a className="ppp-p__close-btn" onClick={ () => this.ppp_pClose()}><Icon type="close" /></a>
        <Info />
        <Tabs defaultActiveKey="01" className="ppp-p__parent-tab">
          <TabPane tab="Content Protection" className="ppp-p__child-tab ppp-p__cp-tab" key="01">
            <ContentProtection />
          </TabPane>
          <TabPane tab="Private Link" className="ppp-p__child-tab ppp-p__pl-tab" key="02">
            <PrivateLink />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;