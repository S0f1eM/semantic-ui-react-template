import React from 'react';
import { Segment } from 'semantic-ui-react';
import ResponsiveContainer from '../../components/containers/ResponsiveContainer';

import LiveSection from './LiveSection';
import ExploreSection from './ExploreSection';
import ThriveSection from './ThriveSection';


const HomepageLayout = () => (
	 	<ResponsiveContainer>
	    	<Segment style={{ padding: '5em 0em' }} vertical>
		      <LiveSection />
		      <ExploreSection />
		      <ThriveSection />
		    </Segment>
	  </ResponsiveContainer>
)
export default HomepageLayout

