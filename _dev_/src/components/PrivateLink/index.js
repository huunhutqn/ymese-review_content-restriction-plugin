import React, { Component } from 'react';

import { Button, Form, Table, Divider, Tag, Icon  } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <span>
        <a data-name={record.name}><Icon className="ppp-p__pl-tab__edit-btn" type="edit" theme="filled" /></a>
        <Divider type="vertical" />
        <a><Icon  className="ppp-p__pl-tab__del-btn" type="delete" theme="filled" /></a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    title: 'New York No. 1 Lake Park',
    author: 'Hannibal',
    category: 'Uncategorized',
    tags: ['travel', 'life'],
  },
  {
    key: '2',
    title: 'London No. 1 Lake Park',
    author: 'Jim Green',
    category: 'Fresh life',
    tags: ['life'],
  },
  {
    key: '3',
    title: 'Sidney No. 1 Lake Park',
    author: 'Joe Black',
    category: 'The world',
    tags: ['natural', 'animal'],
  },
  {
    key: '4',
    title: 'Sidney No. 1 Lake Park',
    author: 'Joe Black',
    category: 'The world',
    tags: ['natural', 'animal'],
  },
  {
    key: '5',
    title: 'Sidney No. 1 Lake Park',
    author: 'Joe Black',
    category: 'The world',
    tags: ['natural', 'animal'],
  },
  {
    key: '6',
    title: 'Sidney No. 1 Lake Park',
    author: 'Joe Black',
    category: 'The world',
    tags: ['natural', 'animal'],
  },
];

class PrivateLink extends Component {
  ppp_pClose() {
    document.getElementById("content-restriction").style.display = "none";
    return false;
  }
  render() {
    return (
        <Table 
          className="ppp-p__pl-tab__main ppp-p__body-tab"
          columns={columns} dataSource={data} 
          pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15', '20']}}
        />
    );
  }
}

export default PrivateLink;
