import React, { Component, Fragment } from 'react';

import { Button, Form  } from 'antd';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  ppp_pClose() {
    document.getElementById("ppp-pop").style.display = "none";
    return false;
  }
  render() {
    return (
      <Fragment>
        <Form.Item className="ppp-p__footer">
          <Button className="ppp-p__footer__cancel-btn" type="link" onClick={ () => this.ppp_pClose()}>
            Cancel
          </Button>
          <Button className="ppp-p__footer__update-btn" type="primary" htmlType="submit"
            onClick={this.props.submit.bind()}>
            Update
          </Button>
        </Form.Item>
      </Fragment>
    );
  }
}

export default Footer;
