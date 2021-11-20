const Browser = () => {
	const container = {
		width: '100%',
		height: '100%'
	};

	return (
		<div style={container}>
			<iframe height="90%" width="100%" src="http://www.bing.com" title="browser"></iframe>
		</div>
	);
}

export default Browser;