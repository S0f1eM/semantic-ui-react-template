import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react';

import Navigation from '../../components/elements/Navigation';

import getWidth from '../../actions/getWidth';

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment textAlign='left' vertical>
            <Menu fixed={fixed ? 'top' : null} secondary={!fixed} size='large'>
              <Container>
                <Navigation />
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}


export default DesktopContainer;