import { useState } from 'react';
const Browser = () => {

	const [url, setUrl] = useState('https://www.bing.com');

	const container = {
		width: '100%',
		height: '100%',
		overfklow: 'hidden',
	};
	const urlBar = {
		width: '90%',
		height: '5%',
		backgroundColor: '#f5f5f5',
		border: '1px solid #cdcdcd',
		borderRadius: '10%',
		margin: '0.5rem'
	};
	const urlBarInput = {
		width: '100%',
		height: '100%',
		padding: '0 0.3rem',
		outline: 'none',
		border: '2px double #cdcdcd'
	};

	const handleOnKeyDown = (e) => {
		if (e.keyCode === 13) {
			const inputValue = e.target.value;
			if (inputValue.startsWith('http')) {
				setUrl(e.target.value);
			} else {
				setUrl('https://' + e.target.value);
			}
		}
	};

	return (
		<div style={container}>
			<div style={urlBar}>
				<input autoFocus style={urlBarInput} onKeyDown={handleOnKeyDown} placeholder="URL"/>
			</div>
			<iframe height="90%" width="100%" src={url} title="browser"></iframe>
		</div>
	);
}

export default Browser;