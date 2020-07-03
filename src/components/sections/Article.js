import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Header,
  Grid
} from 'semantic-ui-react';
//import Card from '../elements/Card';
import ExploreSection from './ExploreSection';
import LiveCard from '../../components/elements/LiveCard';

const Background = "https://cdn.pixabay.com/photo/2019/04/04/17/58/hong-kong-4103334_960_720.jpg";

const Article = ({ mobile }) => (
  
  <Container>


 
    <Header
      as='h1'
      content='Hong Kong Neon Road'
      className='main-title'
      style={{
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`,
        fontSize: mobile ? '2em' : '2.8em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '0.5em',
      }}
    />


    <Header
      as='h2'
      content='Mood Colors & photography inspirations.'
      style={{
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`,
        fontSize: mobile ? '1.5em' : '1.3em',
        fontWeight: 'normal',
        marginTop: '0.2em',
        color: 'rgb(157, 158, 160)'
      }}
    />
    <Header
      as="div"
      style={{  
        height: '80vh',
        backgroundImage: `url(${Background})`
    }}
    />
    <small>Image by <a href="https://pixabay.com/users/Philippsaal-8486910/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4103334">Philippsaal</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4103334">Pixabay</a></small>
    
    <Header
      as='h2'
      content='Hong Kong Neon Road - Mood Colors & photography inspirations. By Judy June'
      style={{
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Droid Sans", "Helvetica Neue", sans-serif`,
        fontSize: mobile ? '1.5em' : '1.3em',
        fontWeight: 'normal',
        marginTop: '0.2em',
        color: 'rgb(157, 158, 160)'
      }}
    />

    <p style={{ fontSize: '1.2em' }}>Mood Colors & photography inspirations. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et sem dictum, auctor quam eu, eleifend nulla. 
    Cras sit amet gravida diam, quis pretium nisl. Aliquam mollis quam a eros finibus, quis rutrum urna facilisis. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut finibus, purus sit amet pellentesque sodales, nibh lectus facilisis orci, non rhoncus eros massa a enim.
    Duis sodales lectus pulvinar, sagittis tellus non, dapibus elit. Integer vitae ipsum a metus maximus congue vitae ac enim.
    Quisque eget libero augue. Sed ac orci et erat volutpat tempor eu vitae lectus.
    </p>
      <Grid.Column stackable>
     
          <Grid.Column width={8}>

          <LiveCard 
            url='http://moodcolors.surge.sh/' 
            title='Tokyo by night lightning building' 
            imageURL='https://cdn.pixabay.com/photo/2020/01/14/03/53/tokyo-4763976_960_720.jpg'
            description='...'/>
            
          </Grid.Column>


    </Grid.Column>

  <p>
    Duis tincidunt vitae enim a maximus. Mauris gravida consectetur eros, ut pharetra nulla sollicitudin at.
    Morbi accumsan mi nec lectus sodales elementum quis ac ligula. Morbi id laoreet elit, in imperdiet dolor. Pellentesque consectetur facilisis eleifend. 
    Suspendisse sodales fermentum tellus at consequat. Proin purus nulla, consequat eu fermentum quis, dapibus in tellus.
    Duis vestibulum, tortor in varius egestas, lectus mauris volutpat purus, sit amet semper leo dolor nec dui. Etiam rhoncus eros eget fermentum viverra.
    Nam neque eros, fermentum eu tempor id, accumsan non dui. Praesent hendrerit finibus lectus, vitae rutrum nunc. Etiam suscipit non ex et volutpat. Nunc eu tempus dolor.
    Nam vel erat ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce molestie ipsum sed urna volutpat, nec sagittis mi rhoncus.
    Etiam interdum aliquam pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ultrices neque a eros sagittis consequat. 
    Phasellus sed nulla sit amet arcu tincidunt volutpat id ac justo. Nunc ornare suscipit enim, sed gravida ipsum semper ac. Pellentesque posuere sapien mi, lobortis tincidunt ante vulputate eu. 
    Aenean mi sapien, ultricies sit amet sagittis ut, convallis sit amet tortor. Aenean ipsum augue, dapibus vitae mollis at, consectetur ut felis.
    Aliquam facilisis dolor urna. Nulla ut sem semper, posuere est sed, pharetra turpis.
    In elementum nunc sed orci dignissim, eget bibendum urna euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nec sodales ex. 
    Nullam viverra tellus fermentum neque ornare, sed maximus ex aliquet. Vestibulum consequat, leo non interdum hendrerit, nisl libero pharetra lacus, sit amet tristique justo ligula sed leo.
    Sed varius condimentum tellus, et rhoncus tellus aliquet eget. Vestibulum sit amet dui imperdiet, maximus turpis eu, venenatis sapien. Sed mattis nisl quis mauris eleifend consequat.
    Proin id odio nunc. Nam sollicitudin urna at magna fermentum, in vestibulum nisi luctus. Curabitur in massa sit amet est scelerisque mollis.
    Etiam lacus orci, iaculis sit amet malesuada mollis, malesuada nec sapien. Curabitur non libero condimentum, tempus metus cursus, finibus tellus. 
    Ut euismod scelerisque tortor, dapibus rhoncus ante condimentum quis. Aenean vel lorem eu nunc sollicitudin posuere. Pellentesque aliquet mollis purus nec cursus.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque scelerisque volutpat leo in eleifend.
    Proin vitae vestibulum enim, quis convallis turpis. Nulla placerat neque in turpis interdum pretium. Sed vel placerat velit.
    Aenean auctor nisi a condimentum ultrices. Aliquam tristique, turpis sed sodales ultricies, orci dolor gravida arcu, ac rutrum nunc lectus et quam. 
    </p>  

    <ExploreSection />

  </Container>

)

Article.propTypes = {
  mobile: PropTypes.bool,
}

export default Article;

