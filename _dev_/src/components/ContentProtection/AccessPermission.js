import React, { Component, Fragment } from 'react';

import Footers from '../Footer';

import { Typography, Form, Input, Select, Button, Icon, List, Avatar, Alert } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const data = [
  {
    title: 'User 1',
  },
  {
    title: 'Admin User',
  },
  {
    title: 'Editor User',
  },
  {
    title: 'Admin User',
  },
  {
    title: 'Editor User',
  },
  {
    title: 'Admin User',
  },
  {
    title: 'Editor User',
  },
  {
    title: 'Admin User',
  },
  {
    title: 'Editor User',
  },
  {
    title: 'Admin User',
  },
  {
    title: 'Editor User',
  }
];

class AccessPermission extends Component {
  handleSubmit() {
    console.log('submited')
  }
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <Form className="ppp-p__form ppp-p__cp-tab__ac-tab__form">
        {/* <Form.Item label="Restriction Title" className="ppp-p__label-field">
          <Input placeholder="Restriction Title" />
        </Form.Item> */}
        <Alert message="Error" type="error" showIcon className="ppp-p__alert"/>
        <Form.Item label="Who can access this content?" className="ppp-p__field">
          <Select defaultValue="logged" style={{ width: 220 }}>
            <Option value="logged">Logged In Users</Option>
            <Option value="editor">Editor Users</Option>
            <Option value="admin">Admin Users</Option>
            <Option value="guest">Guest</Option>
            <Option value="user1">User 1</Option>
          </Select>
          <Button type="primary">
            Add
            <Icon type="arrow-right" />
          </Button>
        </Form.Item>
        <Form.Item label="Users allowed access" className="ppp-p__field">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item actions={[<a key="list-loadmore-edit" className="ppp-p__del-user-btn"><Icon type="user-delete" /></a>]}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
        </Form.Item>
        <Footers 
          submit={this.handleSubmit}
        />
      </Form>
    );
  }
}

export default AccessPermission;