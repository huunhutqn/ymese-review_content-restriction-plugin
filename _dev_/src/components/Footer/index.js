import React, { Component, Fragment } from 'react';

import { Button, Form  } from 'antd';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  crClose() {
    document.getElementById("content-restriction").style.display = "none";
    return false;
  }
  render() {
    return (
      <Fragment>
        <Form.Item className="cr__footer">
          <Button className="cr__footer__cancel-btn" type="link" onClick={ () => this.crClose()}>
            Cancel
          </Button>
          <Button className="cr__footer__update-btn" type="primary" htmlType="submit"
            onClick={this.props.submit.bind()}>
            Update
          </Button>
        </Form.Item>
      </Fragment>
    );
  }
}

export default Footer;
