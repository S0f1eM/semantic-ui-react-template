import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CustomCard = props => (

<Grid.Column>
   <Link to={props.url} title={props.description}>
      <Image bordered rounded size='large' src={props.imageURL} />
      <h4 style={{ fontSize: '1.5em' }}>{props.title}</h4>
      <p style={{ fontSize: '1em', color: 'rgb(157, 158, 160)'}}>{props.description}</p>
    </Link>
</Grid.Column>
)

export default CustomCard;