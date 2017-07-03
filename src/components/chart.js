import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {
	console.log('props', props);
	return(
			<Sparklines height={100} width={130} data={props.data}>
				<SparklinesLine color={props.color}/>
				<SparklinesReferenceLine type="avg"/>
			</Sparklines>
	)
}