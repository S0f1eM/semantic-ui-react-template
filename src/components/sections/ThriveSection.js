import React from 'react';
import {  Grid } from 'semantic-ui-react';

import CustomButton from '../elements/CustomButton';
import CustomDivider from '../elements/CustomDivider';
import BigCard from '../elements/BigCard';

const ThriveSection = () => (

<>

    <Grid container style={{ padding: '5em 0em'}} vertical>

      <CustomDivider name='Thrive' />

      <BigCard url='http://moodcolors.surge.sh/Article'
               imageURL='https://cdn.pixabay.com/photo/2017/01/26/13/36/norway-2010573_960_720.jpg'
               title='Everybody need this happy thing'
               description='This light-hearted, happy mood is shown with descriptions of laughter, 
               upbeat song, delicious smells, and bright colors. A cheerful mood fills you with joy and happiness.' 
               />    
      
      <CustomButton name='More Thrive' url='http://moodcolors.surge.sh/Article'/>
      
    </Grid>
      
</>

)

export default ThriveSection;