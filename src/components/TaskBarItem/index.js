import Colors from "../../constants/Colors";

const TaskBarItem = ({ item, setActiveWindow, isActive, minimizeWindow }) => {
	const container = {
		border: '1px solid black',
		padding: '0 0.5rem',
		height: '100%',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		boxShadow: `${isActive ? 'inset -2px -2px 0px rgb(70, 70, 70)': ''}`,
		fontWeight: isActive ? '900' : '400',
		fontSize: '0.6rem',
		color: Colors.white
	};

	const logo = {
		marginRight: '0.5rem',
	}

	const handleClick = item => {		
		if (item.isMinimized) {
			minimizeWindow(item);
		} else {
			setActiveWindow(item);
		}
	}

	return (
		<div style={container}
		onClick={() => handleClick(item)}>
			<img style={logo} alt={item.label} width="20" height="20" src={item.logo}/>
			{ item.label }
		</div>
	);
}

export default TaskBarItem;