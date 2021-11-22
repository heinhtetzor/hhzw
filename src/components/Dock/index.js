import { useState } from 'react';
import styles from './Dock.module.css';
import DateTime from '../DateTime';
import StartMenu from '../StartMenu';
import Colors from '../../constants/Colors';
import TaskBarItem from '../TaskBarItem';
import TrayIcon from '../TrayIcon';

export default function Dock ({ openWindow, minimizeWindow, openedWindows, setActiveWindow, activeWindow }) {
	
	const [showStartMenu, setShowStartMenu] = useState(false);

	const openedWindowsList = openedWindows.map ((openedWindow, index) => {
		return <TaskBarItem 
					key={index}
					item={openedWindow}
					openWindow={openWindow}
					setActiveWindow={setActiveWindow}
					minimizeWindow={minimizeWindow}
					isActive={openedWindow.id === activeWindow?.id}
				/>
	})

	const dockStyles = {
		position: 'absolute',
		bottom: 0,
		display: 'flex',
		justifyContent:  'space-between',
		alignItems: 'center',
		width: '100vw',
		height: '38px',
		backgroundColor: `${Colors.accent1}`,
		zIndex: '200'
	}

	const tray = {
		display: 'flex',
		flexDirection: 'row-reverse',
		marginRight: '1rem',
	}

	const trayIconsContainer = {
		display: 'flex',		
	}

	const clockContainer = {
		borderLeft: '1px solid rgb(255, 255, 255, 0.4)',
		marginLeft: '0.5rem',
		paddingLeft: '0.5rem',
		height: '100%',
	}

	return (
		<div style={dockStyles}>

			<div className={styles.dockBar}>
				{/*start menu*/}
				<div className={styles.startBtn} onClick={() => setShowStartMenu(true)}>
					Start
				</div>
				<StartMenu shouldShow={showStartMenu} setShowStartMenu={setShowStartMenu}/>

				<div className={styles.taskBar}>
					{openedWindowsList}
				</div>
			</div>

			<div style={tray}>
				<div style={clockContainer}>
					<DateTime />
				</div>
				<div style={trayIconsContainer}>
					<TrayIcon
						name="Github"
						link="https://github.com/heinhtetzor"
						logoUrl="/assets/tray/github.png"
					 />
					<TrayIcon
						name="Email"
						link="mailto:heinhzor@gmail.com"
						logoUrl="/assets/tray/email.png"
					 />
					<TrayIcon
						name="LinkedIn"
						link="https://www.linkedin.com/in/hein-htet-zaw-1a5779114/"
						logoUrl="/assets/tray/in.png"
					 />
				</div>
			</div>
		</div>
	);
}
