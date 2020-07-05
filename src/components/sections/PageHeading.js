import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Container,
  Header
} from 'semantic-ui-react';

const Background = "https://cdn.pixabay.com/photo/2019/04/04/17/58/hong-kong-4103334_960_720.jpg";

const PageHeading = ({ mobile }) => (
  
  <Container>
    <Header as='h1' content='Mood Colors' className='main-title'
            style={{ fontSize: mobile ? '2em' : '2.8em', marginTop: mobile ? '1.5em' : '0.5em' }} />
    
    <Header as='h2' content='A minimalist landing page with semantic-ui and Reactjs.'
      style={{ fontSize: mobile ? '1.5em' : '1.3em' }} />

    <Header as="div" style={{ height: '80vh', backgroundImage: `url(${Background})` }} />
    
    <Header as='h3' style={{ fontSize: mobile? '1.2em' : '1.5em' }}>Hong Kong Neon Road</Header>

    <p style={{ fontSize: '1.2em' }}>Mood Colors & photography inspirations. 
    Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de futuris 
    incertus agitare quaedam conducentia saluti suae per itinera conaretur, remoti sunt omnes de 
    industria milites agentes in civitatibus perviis. </p>  


      <Link to="/Article" title="Link to this article">
        <Button as='button' size="large">More</Button>
      </Link> 

  </Container>

)

PageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default PageHeading;

