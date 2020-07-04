import React from 'react';
import { Segment } from 'semantic-ui-react';
import ResponsiveContainer from '../../components/containers/ResponsiveContainer';
import PageHeading from '../../components/sections/PageHeading';

import LiveSection from './LiveSection';
import ExploreSection from './ExploreSection';
import ThriveSection from './ThriveSection';



const HomepageLayout = () => (
	 	<ResponsiveContainer>
	    	<Segment vertical>
	    	  <PageHeading />
		      <LiveSection />
		      <ExploreSection />
		      <ThriveSection />
		    </Segment>
	  </ResponsiveContainer>
)
export default HomepageLayout

