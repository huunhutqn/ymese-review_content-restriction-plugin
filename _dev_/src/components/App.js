import React, { Component } from "react";

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
        <a className="cr__close" onClick={ () => this.crClose()}><Icon type="close" /></a>
        <Tabs defaultActiveKey="01" className="cr__parent-tab">
          <TabPane tab="Content Protection" className="cr__child-tab cr__r-tab" key="01">
            RestrictionEditor
          </TabPane>
          <TabPane tab="Edit Post" className="cr__child-tab cr__e-tab" key="02">
            EditPost
          </TabPane>
          <TabPane tab="Draft List" className="cr__child-tab cr__d-tab" key="03">
            DraftList
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;