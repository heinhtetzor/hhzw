import { useState } from 'react';
import Colors from '../../constants/Colors';
import {Rnd} from 'react-rnd';
import Browser from '../Applications/Browser';
import About from '../Applications/About';
import GuestBook from '../Applications/GuestBook';

const Window = ({ index, window, setActiveWindow, isActive, closeWindow, minimizeWindow }) => {
	
	const defaultSize = { width: 600, height: 400 };
	const [size, setSize] = useState({});

	if (window.isMinimized) {
		return null;
	}	

	const container = {		
		color: Colors.black,
		position: 'absolute',
		backgroundColor: '#cdcdcd',
		border: `${isActive ? '5px' :'2px'} double #000`,
		userSelect: 'none',
		zIndex: isActive ? 100 : 0,
		height: `${size.height}px`,
		overflow: 'hidden'
	};

	const headerStyle = {
		cursor: 'move',
		width: '100%',
		maxHeight: '70px',
		padding: '0.5rem 1.5rem 0.5rem 0.5rem',
		fontWeight: '900',
		borderBottom: '2px double #000',
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: Colors.accent1,
	};

	const controlsContainerStyle = {
		display: 'flex',
		cursor: 'pointer'				
	};

	const controlStyle = {
		width: '30px',
		border: '1px solid #000',		
		padding: '0.2rem 0.5rem'
	}
	
	const logo = {
		marginRight: '0.5rem',
	}

	const labelContainer = {
		display: 'flex',
		alignItems: 'center',
	}

	// set the active window
	const handleOnClick = e => {
		setActiveWindow(window)
	}

	const handleMinusControl = e => {
		if(e.currentTarget !== e.target ) return;
		e.stopPropagation();
		minimizeWindow(window);
	}

	const handleCloseControl = e => {
		e.stopPropagation();
		closeWindow(window);
	}

	const showApp = () => {
		switch (window.name) {
			case "browser":
				return <Browser />				
			
			case "about":
				return <About />

			case "about-this":
				return (
				<div style={{padding: '1rem', lineHeight: '2rem'}}>
					<p>This project is developed using React. It is inspired by many other Desktop environment themed websites.</p>
					<br/>
					<p>I will add more fun and interesting things in future.</p>
					<br/>
					<p>This website is themed a little bit toward retro Ui since I am a big fan of retro UIs.</p>
				</div>
				);

			case "guests-book":
				return <GuestBook/>;

			default:
				return "Nothing";
		}
	}

    return (
		<Rnd
			style={container}
			default={{
				x: 0,
				y: 0,
				width: window.width ? window.width : defaultSize.width,
				height: window.height ? window.height: defaultSize.height,
			}}
			bounds='parent'
			minHeight={400}
			minWidth={400}
			maxWidth={'100vw'}
			dragHandleClassName='handle'
			onResize={(e, direction, ref, delta, pos) => {
				setSize({
					width: ref.offsetWidth,
					height: ref.offsetHeight+1000
				})
			}}

			onClick={handleOnClick}
		>
			{/* window header */}
			<div className="handle" style={headerStyle}>
				<div style={labelContainer}>
					<img style={logo} alt={window.label} width="20" height="20" src={window.logo}/>
					<span>{window.label}</span>
				</div>
				<div style={controlsContainerStyle}>
					<span role="button" style={controlStyle} onClick={handleMinusControl} onTouchEnd={handleMinusControl}>
						-
					</span>
					<span role="button" style={controlStyle} onClick={handleCloseControl} onTouchEnd={handleCloseControl}>
						x
					</span>
				</div>
			</div>	

			{/* window body */}			
			{
				showApp()				
			}			
		  
		</Rnd>
	);
}

export default Window;
