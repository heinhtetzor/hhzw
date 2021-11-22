const TrayIcon = ({ name, link, logoUrl }) => {
	const container = {
		margin: '0 0.5rem',
		cursor: 'pointer'
	};

	const handleClick = () => {
		window.open(link, '_blank');
	}

	return (
		<div style={container} onClick={handleClick}>
			<img alt={name} src={logoUrl} width="20" height="20"/>
		</div>
	);
}

export default TrayIcon;