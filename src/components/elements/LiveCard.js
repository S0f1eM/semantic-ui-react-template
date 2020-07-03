import React from 'react';
import {
  Image,
  Header
} from 'semantic-ui-react';


const LiveCard = props => (
  
  <a href={props.url} style={{ cursor: 'cursor' }}>
            
    <Header as='h3' style={{ fontSize: '1.5em' }}>
        {props.title}
    </Header>

    <p style={{ fontSize:'1.2em', color: 'rgb(157, 158, 160)'}}>{props.description}</p>

    <Image bordered rounded  src={props.imageURL} />

  </a>

)


export default LiveCard;          