import React from 'react';
import {
  Grid,
  Image
} from 'semantic-ui-react';


const CustomCard = props => (

 <Grid.Column>
    <a href={props.url}
       style={{ 
       		color: '#000', 
       		cursor: 'cursor' 
       	}}>
           
    <Image bordered 
    	   rounded 
    	   size='large' 
    	   src={props.imageURL} />
            
            <h4 style={{ 
            	fontSize: '1.5em' 
            }}>
            {props.title}
            </h4>

            <p style={{ 
            	fontSize: '1em', 
            	color: 'rgb(157, 158, 160)' 
            }}>
            {props.description}
            </p>

            </a>

        </Grid.Column>
)


export default CustomCard;