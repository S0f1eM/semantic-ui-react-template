import React from 'react';
import { Grid } from 'semantic-ui-react';

import CustomButton from '../elements/CustomButton';
import CustomDivider from '../elements/CustomDivider';
import CustomCard from '../elements/CustomCard';

const ExploreSection = () => (

<>
      <Grid container centered columns={4} stackable >
       
        <Grid.Row>

          <CustomDivider name='explore'/>

          <CustomCard url='http://moodcolors.surge.sh/Article' 
                imageURL='https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_960_720.jpg' 
                title='City Lights - Japan' 
                description='Midnight walk with city lights.' />

          <CustomCard url='http://moodcolors.surge.sh/Article' 
                imageURL='https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_960_720.jpg' 
                title='Osaka by night - Japan' 
                description=' A rainy night under the lights.' />

          <CustomCard url='http://moodcolors.surge.sh/Article' 
                imageURL='https://cdn.pixabay.com/photo/2015/07/11/23/00/portland-841428_960_720.jpg' 
                title='Portland Oregon Tourism' 
                description='Lost in Oregon...my deer.' />

          <CustomCard url='http://moodcolors.surge.sh/Article' 
                imageURL='https://cdn.pixabay.com/photo/2017/08/07/13/59/dark-2604109_960_720.jpg' 
                title='Dark night Neon Shop' 
                description="I'm Neon, specialist." />

         </Grid.Row>

      </Grid>

      <CustomButton name='More Explorations' url='http://moodcolors.surge.sh/Article' style={{ marginTop: '2em' }}/>  

</>


)

export default ExploreSection;