import React from 'react';
import {
  Image,
  Container,
  Header
} from 'semantic-ui-react';


const BigCard = props => (

 <Container text >
  
    <a href={props.url} style={{ color: '#000', cursor: 'cursor' }}  >
    
    	<Image bordered rounded src={props.imageURL} />

        <Header as='h3' style={{ fontSize: '1.5em' }} >{props.title}</Header>
        
        <p style={{ fontSize: '1.2em' }}> {props.description} </p>

    </a>
      
  </Container>
)


export default BigCard;