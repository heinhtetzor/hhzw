import { useState }  from 'react';
import Colors from '../../constants/Colors';


const DesktopGridItem = ({ item, openWindow }) => {
	const [isFoused, setIsFocused] = useState(false);

	const container = {
		width: '80px',
		height: '80px',
		border: `${isFoused ? '1px dashed #eeffff' : ''}`,
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: Colors.white,		
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		fontSize: '0.7rem'
	};

	const logo = {
		
	}

	const handleDoubleClick = item => {
		openWindow(item);
	}

	const handleClick = () => {
		setIsFocused(true);
	}

	const handleBlur = () => {
		setIsFocused(false);
	}

	return (
		<div
		tabIndex="0"
		style={container}
		onDoubleClick={() => handleDoubleClick(item)} 
		onClick={() => handleClick(item)}
		onBlur={handleBlur}
		>
			<img
			width="40px"
			height="40px"
			style={logo} 
			alt={item.label} 
			src={item.logo}/>
			<span>{item.label}</span>
		</div>
	)
};

export default DesktopGridItem;