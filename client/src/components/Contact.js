import React from 'react';
import socialAccounts from '../data/socialAccounts';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
	return (
		<div>
			<div className="section" id="contact-section">
				<h2>Contact</h2>
			</div>
			<div>
				<a href="mailto:marinabaskova24@gmail.com">marinabaskova24@gmail.com</a>
				<div>
					{socialAccounts.map((account) => (
						<div key={account.id}>
							<a href={account.profileURL} target="_blank" rel="noopener noreferrer">
								{' '}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Contact;
