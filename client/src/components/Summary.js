import React from 'react';
import summary from '../assets/summary.jpg';

const Summary = () => {
	return (
		<div className="summary-wrapper">
			<div className="summary-image">
				<img id="top-image" alt="laptop-image" src={summary} />
			</div>
			<div className="summary-text">
				<p className="summary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta justo porta semper accumsan.
					Nulla nec volutpat felis, in sodales odio. Cras hendrerit sodales maximus. Morbi lobortis eleifend
					diam, ac consectetur ante finibus vel. Vivamus pellentesque, dolor id efficitur viverra, ipsum ante
					rhoncus nunc, vitae sagittis turpis ex et mauris.
				</p>
			</div>
		</div>
	);
};
export default Summary;
