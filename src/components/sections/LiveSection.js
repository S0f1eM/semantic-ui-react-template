import React from 'react';
import {
  Divider,
  Grid,
  Header,
  Icon,
  Image
} from 'semantic-ui-react';

import CustomButton from '../elements/CustomButton';
import CustomDivider from '../elements/CustomDivider';
import LiveCard from '../elements/LiveCard';

const LiveSection = () => (

  <>
      
    <Grid container columns={2} stackable >

      <CustomDivider name='Live' />
      
      <Grid.Column stackable>
        
          <Grid.Row>
               <Grid container stackable >
                  
                  <Grid.Column width={4}> 
                    <a href='https://moodcolors.surge.sh/Article' style={{ cursor: 'cursor' }}>
                      <Image 
                        className='live-section-img-mobile'
                        bordered 
                        rounded 
                        size='small' 
                        src='https://cdn.pixabay.com/photo/2016/02/19/11/46/night-1209938_960_720.jpg' /> 
                    </a>
                  </Grid.Column>
  
                  <Grid.Column width={12}> 
            
                    <Header as='h3' style={{ fontSize: '1.5em' }}>
                       <a href='https://moodcolors.surge.sh/Article' style={{ color: '#000', cursor: 'cursor' }}>
                       Midnight Mood around the world</a>
                    </Header>
                    
                    <p style={{ fontSize: '1.20em' }}>
                    <a href='https://moodcolors.surge.sh/Article' style={{ color: '#000', cursor: 'cursor' }}>
                    In his tractibus navigerum nusquam visitur flumen sed in locis plurimis 
                    aquae suapte natura calentes emergunt ad usus aptae multiplicium medelarum.
                    In his tractibus navigerum nusquam visitur flumen sed in locis plurimis.
                    </a>
                    </p>
                   </Grid.Column>

               </Grid>

          </Grid.Row>
      
        <Divider horizontal style={{ color: '#f6075c'}}><Icon name="like"  size="big" /></Divider>

          <Grid.Row>
               <Grid container stackable >
          
                  <Grid.Column width={12}> 
    
                    <Header as='h3' style={{ fontSize: '1.5em' }}>
                      <a href='http://moodcolors.surge.sh/Article' style={{ color: '#000', cursor: 'cursor' }}>
                       Mood Tourism experiences
                      </a>
                    </Header>
                    
                    <p style={{ fontSize: '1.20em' }}>
                    <a href='http://moodcolors.surge.sh/Article' style={{ color: '#000', cursor: 'cursor' }}>
                    In his tractibus navigerum nusquam visitur flumen sed in locis plurimis 
                    aquae suapte natura. In his tractibus navigerum nusquam visitur flumen sed in locis plurimis 
                    aquae suapte natura.
                    </a>
                    </p>
                </Grid.Column>

                  <Grid.Column width={4}> 
                    <a href='http://moodcolors.surge.sh/Article' style={{ cursor: 'cursor' }}>
                    <Image 
                      className='live-section-img-mobile'
                      bordered 
                      rounded 
                      size='small' 
                      src='https://cdn.pixabay.com/photo/2019/04/20/11/40/japan-4141581_960_720.jpg' /> 
                    </a>
                  </Grid.Column>
        
               </Grid>

          </Grid.Row>

      </Grid.Column>

        <Grid.Column stackable>
     
          <Grid.Column width={8}>

          <LiveCard 
            url='https://moodcolors.surge.sh/Article' 
            title='Neon Lovers and Creative Coding' 
            imageURL='https://cdn.pixabay.com/photo/2019/05/29/16/00/retro-4237850_960_720.jpg'
            description='Dive in creatives coders inspirations process and momentum...'/>
            
          </Grid.Column>


    </Grid.Column>
   
  </Grid>

          
      <CustomButton name='Live More' url='https://moodcolors.surge.sh/Article' style={{ margin: '2em 0em 3em' }} />
   
    
</>
)


export default LiveSection;