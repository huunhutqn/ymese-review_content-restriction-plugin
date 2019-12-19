import React, { Component, Fragment } from 'react';

import Footers from '../Footer';

import { Typography, Form, Input, Select } from 'antd';

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

class IPRestriction extends Component {
  handleSubmit() {
    console.log('submited')
  }
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item label="IP Address Banned" className="cr__field">
          <TextArea rows={4} />
        </Form.Item>
        <Footers 
          submit={this.handleSubmit}
        />
      </Form>
    );
  }
}

export default IPRestriction;