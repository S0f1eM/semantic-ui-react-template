import React from 'react';
import {
  Button,
  Menu
} from 'semantic-ui-react';

const Navigation = () => {

  return(
  <>
    <Menu.Item as='a' href='http://localhost:3000' style={{ fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`, paddingLeft: '0' }} >
                  Mood <span style={{color:"#F6075C"}}> Colors</span>
                </Menu.Item> 
                <Menu.Item position='right' 
                           style={{ fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`, paddingRight: '0' }}>
                <Menu.Item as='a' href='http://moodcolors.surge.sh/Article'>Explore</Menu.Item>
                <Menu.Item as='a' href='http://moodcolors.surge.sh/Article'>Thrive</Menu.Item>
                <Menu.Item as='a' href='http://moodcolors.surge.sh/Article'>Live</Menu.Item>
                  <Button as='a' href='#'
                          style={{ 
                            marginLeft: '0.5em',
                            backgroundColor:"#fff",
                            color:"#F6075C",
                            border: "1px solid #F6075C",
                            cursor: 'cursor' }}> Log In </Button>
    </Menu.Item>
  </>

  )
}

export default Navigation;