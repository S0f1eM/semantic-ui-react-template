import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

const Navigation = () => {

  return(
  <>
    <Menu.Item as='a' href='/' style={{ fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`, paddingLeft: '0' }} className="logo" >
      Mood <span style={{color:"#F6075C"}}> Colors</span>
    </Menu.Item> 
    <Menu.Item position='right' style={{ fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`, paddingRight: '0' }}>
    <Menu.Item as='a' href='/Article'>Explore</Menu.Item>
    <Menu.Item as='a' href='/Article'>Thrive</Menu.Item>
    <Menu.Item as='a' href='/Article'>Live</Menu.Item>
      <Button as='button' className='ui button login' href='#'> Log In </Button>
    </Menu.Item>
  </>

  )
}

export default Navigation;