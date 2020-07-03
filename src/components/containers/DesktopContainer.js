import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react';

import PageHeading from '../../components/sections/PageHeading';
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
          <Segment textAlign='left' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <Menu fixed={fixed ? 'top' : null} secondary={!fixed} size='large'>
              <Container>
                <Menu.Item as='h3' style={{ fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`, paddingLeft: '0' }} >
                  Mood <span style={{color:"#F6075C"}}> Colors</span>
                </Menu.Item> 
                <Menu.Item position='right' 
                           style={{ fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`, paddingRight: '0' }}>
                <Menu.Item as='a' href='#explore'>Explore</Menu.Item>
                <Menu.Item as='a' href='#thrive'>Thrive</Menu.Item>
                <Menu.Item as='a' href='#live'>Live</Menu.Item>
                  <Button as='a' href='#'
                          style={{ 
                            marginLeft: '0.5em',
                            backgroundColor:"#fff",
                            color:"#F6075C",
                            border: "1px solid #F6075C",
                            cursor: 'cursor' }}> Log In </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <PageHeading />
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