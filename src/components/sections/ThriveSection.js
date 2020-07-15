import React from 'react';
import {  Grid } from 'semantic-ui-react';
import CustomButton from '../elements/CustomButton';
import CustomDivider from '../elements/CustomDivider';
import BigCard from '../elements/BigCard';

const url ="https://cdn.pixabay.com/photo/2017/01/26/13/36/norway-2010573_960_720.jpg";
const title ='Everybody need this happy thing';
const description = 'This light-hearted, happy mood is shown with descriptions of laughter,                  upbeat song, delicious smells, and bright colors. A cheerful mood fills you with joy and happiness.' 


const ThriveSection = () => (

  <>
    <Grid container style={{ padding: '5em 0em'}} vertical >
      <CustomDivider name='Thrive' />
        <BigCard url='/Article'
                 imageURL={url}
                 title={title}
                 description={description}
        />    
      <CustomButton name='More Thrive' url='/Article'/> 
     </Grid>    
  </>

)

export default ThriveSection;