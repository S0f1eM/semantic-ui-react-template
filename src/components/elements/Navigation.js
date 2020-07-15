import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

const Navigation = () => {

  return(
  <>
    <Menu.Header as='a' href='/' className="logo" >
      Mood <span> Colors</span>
    </Menu.Header> 

    <Menu.Item position='right' className="right-menu">
      <Menu.Item as='a' href='#Live'>Live</Menu.Item>
      <Menu.Item as='a' href='#Explore'>Explore</Menu.Item>
      <Menu.Item as='a' href='#Thrive'>Thrive</Menu.Item>
      
      <Button as='button' className='ui button login' href='#'> Log In </Button>
    </Menu.Item>
  </>

  )
}

export default Navigation;