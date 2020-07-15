import React from 'react';
import { Link } from 'react-router-dom';
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

const topLeftImg = "https://cdn.pixabay.com/photo/2016/02/19/11/46/night-1209938_960_720.jpg";
const topLeftTitle = "Midnight Mood around the world";
const topLeftDescription = "In his tractibus navigerum nusquam visitur flumen sed in locis plurimis aquae suapte natura calentes emergunt ad usus aptae multiplicium medelarum.";

const bottomLeftImg = 'https://cdn.pixabay.com/photo/2019/04/20/11/40/japan-4141581_960_720.jpg';
const bottomLeftTitle = "Mood Tourism experiences";
const bottomLeftDescription = "In his tractibus navigerum nusquam visitur flumen sed in locis plurimis aquae suapte natura calentes emergunt ad usus aptae multiplicium medelarum.";

const liveCardImg = 'https://cdn.pixabay.com/photo/2019/05/29/16/00/retro-4237850_960_720.jpg';
const liveCardTitle = "Neon Lovers and Creative Coding";
const liveCardDescription = "Dive in creatives coders inspirations process and momentum...";

const LiveSection = () => (

  <>   
    <Grid container columns={2} stackable >
      <CustomDivider name='Live' />  
        <Grid.Column stackable>      
          <Grid.Row>     
            <Grid container stackable > 
              <Grid.Column width={4}> 
                <Link to="/Article" title="Link to this article">
                  <Image className='live-section-img-mobile' src={topLeftImg} bordered rounded size='small' />
                </Link>
              </Grid.Column>
              <Grid.Column width={12}>  
                <Link to="/Article" title="Link to this article">
                  <Header as='h3' style={{ fontSize: '1.5em' }}>{topLeftTitle}</Header>  
                    <p>{topLeftDescription}</p>
                </Link>
              </Grid.Column>
            </Grid>

          </Grid.Row>
          <Divider horizontal style={{ color: '#f6075c', marginTop: '1.5em', marginBottom: '1.5em'}}><Icon name="like"  size="big" /></Divider>
          <Grid.Row>

            <Grid container stackable >
              <Grid.Column width={12}> 
                <Link to="/Article" title="Link to this article">
                  <Header as='h3' style={{ fontSize: '1.5em' }}>{bottomLeftTitle}</Header>
                    <p>{bottomLeftDescription}</p>
                </Link>
              </Grid.Column>
              <Grid.Column width={4}> 
                <Link to="/Article" title="Link to this article">
                  <Image className='live-section-img-mobile' src={bottomLeftImg} bordered rounded size='small' /> 
                </Link>
              </Grid.Column>
            </Grid>

          </Grid.Row>
      </Grid.Column>

        <Grid.Column stackable>
          <Grid.Column width={8}>
            <LiveCard url='/Article' title={liveCardTitle} imageURL={liveCardImg} description={liveCardDescription}/>    
          </Grid.Column>
        </Grid.Column>
      </Grid>         
 
    <CustomButton name='Live More' url='/Article' style={{ margin: '2em 0em 3em' }} />     
</>

)

export default LiveSection;