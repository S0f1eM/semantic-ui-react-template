import React from 'react';
import {
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment
} from 'semantic-ui-react';

import SearchBar from '../components/elements/SearchBar';

const Footer = () => {

  return (

<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
           <Grid.Column width={4}>
            <SearchBar style={{margin: '0'}}/>
            </Grid.Column>
            <Grid.Column width={4}>
             <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a' href='#'>shop</List.Item>
                <List.Item as='a' href='#'>FAQ</List.Item>
                <List.Item as='a' href='#'>Diversity</List.Item>
                <List.Item as='a' href='#'>Blog</List.Item>
              </List>
            </Grid.Column>
            
            <Grid.Column width={4}>
               <Header as='h4' inverted>
               Photos Credits - Pixabay Licence
              </Header>
              <List link inverted>
                <List.Item as='a' href='https://pixabay.com/users/gam-ol-2829280/'>GamOl</List.Item>
                <List.Item as='a' href='https://pixabay.com/users/philippsaal-8486910/'>Philipp Saal</List.Item>
                <List.Item as='a' href='https://pixabay.com/users/sofi5t-6957643/'>Sofía Terzoni Fotografía</List.Item>
                <List.Item as='a' href='https://pixabay.com/users/masashiwakui-4385858/'>Masashi Wakui</List.Item>
              </List>
            </Grid.Column>
           
            <Grid.Column width={4}>
             <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a' href='#'>Sitemap</List.Item>
                <List.Item as='a' href='#'>Contact Us</List.Item>
                <List.Item as='a' href='#'>Privacy Policy</List.Item>
              </List>
              <Header as='h4' inverted>
               Stay in Touch
              </Header>
             <a href="https://twitter.com/S0f1eM" style={{ color: '#fff' }}><Icon name='twitter' size='big' /></a>
             <a href="https://github.com/S0f1eM" style={{ color: '#fff' }}><Icon name='instagram' size='big' /></a>
             <a href="https://github.com/S0f1eM" style={{ color: '#fff' }}><Icon name='facebook' size='big' /></a>
             <a href="https://github.com/S0f1eM" style={{ color: '#fff' }}><Icon name='github' size='big' /></a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    )

}

  export default Footer;