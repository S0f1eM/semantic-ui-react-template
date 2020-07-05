import React from 'react';
import { Image,  Header, Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const LiveCard = props => (
 
  <Link to={props.url} title={props.description}>
    <Header as='h3' style={{ fontSize: '1.5em' }}>{props.title}</Header>
    <Divider horizontal style={{ color: '#f6075c', width: '90%'}}><Icon name="like"  size="big" /></Divider>
    <Image bordered rounded  src={props.imageURL} style={{width: '500px', height: 'auto'}}/>
    <p style={{ fontSize:'1.2em', color: 'rgb(157, 158, 160)'}}>{props.description}</p>

  </Link>
)

export default LiveCard;          