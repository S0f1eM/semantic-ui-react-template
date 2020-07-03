import React from 'react';
import { Divider } from 'semantic-ui-react';


const CustomDivider = props => (

    <>
        <Divider as='h4'
                className='header'
                id='explore'
                horizontal
                style={{ 
                    textTransform: 'uppercase',
                    margin: '3em 1em'
                }} >
                {props.name}
        </Divider>
    </>
)


    export default CustomDivider;