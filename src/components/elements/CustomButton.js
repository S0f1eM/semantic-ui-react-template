import React from 'react';
import {  Button, Grid  } from 'semantic-ui-react';

const CustomButton = props => (

<>
    <Grid container stackable>      
        <Grid.Column textAlign='center'>
            <Button as='button' href={props.url} className="ui button customButton" size='huge'>
                {props.name}
            </Button>
        </Grid.Column>
    </Grid>
    </>
)

export default CustomButton;