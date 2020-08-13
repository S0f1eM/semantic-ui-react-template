import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';

import getWidth from '../../actions/getWidth';


class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive as={Sidebar.Pushable}
                  getWidth={getWidth}
                  maxWidth={Responsive.onlyMobile.maxWidth} >
        
        <Sidebar  as={Menu}
                  animation='push'
                  onHide={this.handleSidebarHide}
                  vertical
                  visible={sidebarOpened} >
          <Menu.Item as='a' href='/'> Mood Colors </Menu.Item>
          <Menu.Item as='a' href='#Explore'>Explore</Menu.Item>
          <Menu.Item as='a' href='#Thrive'>Thrive</Menu.Item>
          <Menu.Item as='a' href='#Live'>Live</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment textAlign='center' vertical >
            <Container>
              <Menu secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' href='#' style={{ marginLeft: '0.5em',
                                          backgroundColor:"#fff",
                                          color:"#F6075C",
                                          border: "1px solid #F6075C"
                                       }}> Log In </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}


export default MobileContainer;