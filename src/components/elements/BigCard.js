import React from 'react';
import {  Image,  Container,  Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const BigCard = props => (

<Container text >
	<Link to={props.url} title={props.description}>
    	<Image bordered rounded src={props.imageURL} />
        <Header as='h3' style={{ fontSize: '1.5em' }} >{props.title}</Header>    
        <p> {props.description} </p>      
	</Link>
</Container>
)


export default BigCard;