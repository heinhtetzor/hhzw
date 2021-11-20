import { useState, useEffect, useRef } from 'react';
import Colors from '../../constants/Colors';
import {Rnd} from 'react-rnd';
import Browser from '../Applications/Browser';

const Window = ({ index, window, setActiveWindow, isActive, closeWindow }) => {
	
	const defaultSize = { width: 600, height: 400 };
	const defaultPosition = { x: 400, y: 100  };

	const container = {
		color: 'red',
		position: 'absolute',
		backgroundColor: '#cdcdcd',
		border: `${isActive ? '5px' :'2px'} double #000`,
		userSelect: 'none',
		zIndex: isActive ? 100 : 0,
	};

	const headerStyle = {
		cursor: 'move',
		width: '100%',
		maxHeight: '70px',
		padding: '0.7rem',
		fontFamily: 'Verdana',
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
	}

	// set the active window
	const handleOnClick = e => {
		setActiveWindow(window)
	}

	const handleMinusControl = e => {
		if(e.currentTarget !== e.target ) return;
		e.stopPropagation();
	}

	const handleCloseControl = e => {
		closeWindow(window);
	}

    return (
		<Rnd
			style={container}
			default={{
				// x: defaultPosition.x + (index*50),
				// y: defaultPosition.y + (index*50),
				x: 0,
				y: 0,
				width: '100%',
				height: '95%',
				// width: window.width ? window.width : defaultSize.width,
				// height: window.height ? window.height: defaultSize.height,
			}}
			bounds='parent'
			minHeight={200}
			minWidth={200}
			dragHandleClassName='handle'

			onClick={handleOnClick}
		>
			{/* window header */}
			<div className="handle" style={headerStyle}>
				<span>
					{window.label}
				</span>
				<div style={controlsContainerStyle}>
					<span style={controlStyle} onClick={handleMinusControl}>
						-
					</span>
					<span style={controlStyle}>
						+
					</span>
					<span style={controlStyle} onClick={handleCloseControl}>
						x
					</span>
				</div>
			</div>	

			{/* window body */}
			{
				window.name === 'browser' ?
				<Browser />
				: 
				"Nothing"
			}
		  
		</Rnd>
	);
}

export default Window;
