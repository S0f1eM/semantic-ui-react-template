import PropTypes from 'prop-types';
import React from 'react';
import {
  Header,
  Grid,
  Segment,
  Divider,
  Icon
} from 'semantic-ui-react';

import ResponsiveContainer from '../../components/containers/ResponsiveContainer';
import LiveCard from '../../components/elements/LiveCard';
import CustomDivider from '../elements/CustomDivider';
import CustomCard from '../elements/CustomCard';

const someContent =`Duis tincidunt vitae enim a maximus. Mauris gravida consectetur eros, ut pharetra nulla sollicitudin at.
        Morbi accumsan mi nec lectus sodales elementum quis ac ligula. Morbi id laoreet elit, in imperdiet dolor. Pellentesque consectetur facilisis eleifend. 
        Suspendisse sodales fermentum tellus at consequat. Proin purus nulla, consequat eu fermentum quis, dapibus in tellus.
        Duis vestibulum, tortor in varius egestas, lectus mauris volutpat purus, sit amet semper leo dolor nec dui. Etiam rhoncus eros eget fermentum viverra.
        Nam neque eros, fermentum eu tempor id, accumsan non dui. Praesent hendrerit finibus lectus, vitae rutrum nunc. Etiam suscipit non ex et volutpat. Nunc eu tempus dolor.
        Nam vel erat ex.`;
const shortContent = `Duis tincidunt vitae enim a maximus. Mauris gravida consectetur eros, ut pharetra nulla sollicitudin at.
        Morbi accumsan mi nec lectus sodales elementum quis ac ligula. Morbi id laoreet elit, in imperdiet dolor. Pellentesque consectetur facilisis eleifend. 
        Suspendisse sodales fermentum tellus at consequat. Proin purus nulla, consequat eu fermentum quis, dapibus in tellus.`;


const Article = ({ mobile }) => (
  
 

  <>
    <ResponsiveContainer>
      <Segment vertical className="ui container">
        
        <Header as='h1' content='Hong Kong Neon Road' className='main-title' 
                style={{ fontSize: mobile ? '2em' : '2.8em', marginTop: mobile ? '1.5em' : '0.5em' }} />

        <Header as='h2' content='Mood Colors & photography inspirations. By Judy June'
                style={{ fontSize: mobile ? '1.5em' : '1.3em' }} />
        
        <p>Mood Colors & photography inspirations. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et sem dictum, auctor quam eu, eleifend nulla. 
        Cras sit amet gravida diam, quis pretium nisl. </p>

        <Divider horizontal style={{ color: '#FFA26D', margin: '3em 0'}}><Icon name="sun"  size="big" /></Divider>

        <p>{someContent}</p>
        <p>{shortContent}</p>

    <Divider horizontal style={{ color: '#FFA26D', margin: '3em 0'}}><Icon name="sun"  size="big" /></Divider>

    <Grid columns={2} stackable >     
      <Grid.Column stackable>            
        <LiveCard imageURL='https://cdn.pixabay.com/photo/2019/06/10/09/14/guangzhou-4263768_960_720.jpg'/> 
          <p>China away neon building - <small>Image by <a href="https://pixabay.com/users/Philippsaal-8486910/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4103334">Philippsaal</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4103334">Pixabay</a></small></p>  
      </Grid.Column>
      <Grid.Column stackable>
        <LiveCard imageURL='https://cdn.pixabay.com/photo/2020/01/15/19/03/shinjuku-4768674_960_720.jpg'/>
        <p>Tokyo neon night signs cyberpunk - <small>Image by <a href="https://pixabay.com/users/Philippsaal-8486910/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4103334">Philippsaal</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4103334">Pixabay</a></small></p>
      </Grid.Column>
      <Grid.Column stackable>
        <p>{shortContent}</p>
      </Grid.Column>
      <Grid.Column stackable>
        <p>{shortContent}</p>
      </Grid.Column>
  </Grid>

    <Divider horizontal style={{ color: '#FFA26D', margin: '3em 0'}}><Icon name="sun"  size="big" /></Divider>

  <Grid centered columns={4} stackable >   
        <Grid.Row>
          <CustomCard style={{pointer:'default'}} imageURL='https://cdn.pixabay.com/photo/2019/01/06/14/08/frankfurt-3917054_960_720.jpg'/>
          <CustomCard style={{pointer:'default'}} imageURL='https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014617_960_720.jpg' />
          <CustomCard style={{pointer:'default'}} imageURL='https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014616_960_720.jpg' />
          <CustomCard style={{pointer:'default'}} imageURL='https://cdn.pixabay.com/photo/2017/09/12/00/40/roller-skating-2740936_960_720.jpg' />
         </Grid.Row>
      </Grid>
      <Grid.Column stackable> 
        <p>{someContent}</p>
        <p>{shortContent}</p>
      </Grid.Column>

      <p><small>Image Credits from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4103334">Pixabay</a></small></p>

      <CustomDivider name='MORE ARTICLES' />

       <Grid centered columns={4} stackable > 
       
        <Grid.Row>

          <CustomCard imageURL='https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_960_720.jpg' 
                      title='City Lights - Japan' 
                      description='Midnight walk with city lights.' 
                      url='/' />

          <CustomCard imageURL='https://cdn.pixabay.com/photo/2019/04/04/17/58/hong-kong-4103334_960_720.jpg' 
                      title='Osaka by night - Japan' 
                      description=' A rainy night under the lights.'
                      url='/' />

          <CustomCard imageURL='https://cdn.pixabay.com/photo/2015/07/11/23/00/portland-841428_960_720.jpg' 
                      title='Portland Oregon Tourism' 
                      description='Lost in Oregon...my deer.' 
                      url='/'/>

          <CustomCard imageURL='https://cdn.pixabay.com/photo/2017/08/07/13/59/dark-2604109_960_720.jpg' 
                      title='Dark night Neon Shop' 
                      description="I'm Neon, specialist." 
                      url='/' />
        
         </Grid.Row>
      </Grid>
    <Divider horizontal style={{ color: '#FFA26D', margin: '5em 0'}}></Divider>
  </Segment>
</ResponsiveContainer>
</>

)

Article.propTypes = {
  mobile: PropTypes.bool,
}

export default Article;

