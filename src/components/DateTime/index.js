import { useState, useEffect } from 'react';
import styles from './DateTime.module.css';

const DateTime = () => {
	const [datetime, setDateTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setDateTime(new Date(), 30000);
		});
	}, []);

	return (
		<div className={styles.container}>
			<span>
				{
					datetime.toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'short',
						year: 'numeric'
					})
				}
			</span>
			{' '}
			<span>
				{
					datetime.toLocaleString('en-GB', {
						hour: 'numeric',
						minute: 'numeric',
						hour12: true
					})
				}
			</span>
		</div>
	);
}

export default DateTime;