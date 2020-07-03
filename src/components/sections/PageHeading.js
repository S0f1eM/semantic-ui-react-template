import PropTypes from 'prop-types';
import React from 'react';

import {
  Button,
  Container,
  Header
} from 'semantic-ui-react';

const Background = "https://cdn.pixabay.com/photo/2019/04/04/17/58/hong-kong-4103334_960_720.jpg";

const PageHeading = ({ mobile }) => (
  
  <Container>
 
    <Header
      as='h1'
      content='Mood Colors'
      className='main-title'
      style={{
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`,
        fontSize: mobile ? '2em' : '2.8em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '0.5em',
      }}
    />


    <Header
      as='h2'
      content='A minimalist landing page with semantic-ui and Reactjs.'
      style={{
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`,
        fontSize: mobile ? '1.5em' : '1.3em',
        fontWeight: 'normal',
        marginTop: '0.2em',
        color: 'rgb(157, 158, 160)'
      }}
    />
    <Header
      as="div"
      style={{  
        height: '80vh',
        backgroundImage: `url(${Background})`
    }}
    />
    
    
    <Header as='h3' style={{ fontSize: mobile? '1.2em' : '1.5em' }}>Hong Kong Neon Road</Header>

    <p style={{ fontSize: '1.2em' }}>Mood Colors & photography inspirations. 
    Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de futuris 
    incertus agitare quaedam conducentia saluti suae per itinera conaretur, remoti sunt omnes de 
    industria milites agentes in civitatibus perviis. </p>  


    <Button as='a' size="large" href="/Article"
            style={{ 
                backgroundColor:"#fff",
                color:"#F6075C",
                border: "2px solid #F6075C",
                cursor: 'cursor'
                }}>More</Button>

  </Container>

)

PageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default PageHeading;

