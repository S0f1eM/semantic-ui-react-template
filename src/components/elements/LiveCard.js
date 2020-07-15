import React from 'react';
import { Image,  Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const LiveCard = props => (
 
  <Link to={props.url} title={props.description}>
    <Header as='h3' style={{ fontSize: '1.5em', marginBottom:'1em' }}>{props.title}</Header>
    <Image bordered rounded  src={props.imageURL} style={{width: '550px', height: 'auto'}}/>
    <p style={{ color: 'rgb(157, 158, 160)', marginTop :'1em'}}>{props.description}</p>

  </Link>
)

export default LiveCard;          