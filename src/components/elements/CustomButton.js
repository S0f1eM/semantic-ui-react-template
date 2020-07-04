import React from 'react';
import {  Button, Grid  } from 'semantic-ui-react';


const CustomButton = props => (

	<>
        <Grid container stackable>
      
          <Grid.Column textAlign='center'>

            <Button as='a' href={props.url}
                    className="ui button" 
                    size='huge' 
                    style={{ 
                    border:'2px solid #f6075c',
                    color:'#f6075c',
                    backgroundColor:'#fff',
                    cursor:'cursor',
                    marginTop:'1em'
            }}>
            {props.name}</Button>
     
     </Grid.Column>

    </Grid>
    </>
)

export default CustomButton;