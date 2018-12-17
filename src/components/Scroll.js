import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY:'scroll', border:'solid 5px black',height:'500px'}}>
		{props.children}	
		</div>
		);
};

export default Scroll;