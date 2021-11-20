import { useState } from 'react';
import styles from './Dock.module.css';
import DockItem from '../DockItem';
import StartMenu from '../StartMenu';
import Colors from '../../constants/Colors';

export default function Dock ({ openWindow, dockItems }) {
	
	const [showStartMenu, setShowStartMenu] = useState(false);

	const dockItemList = dockItems.map ((dockItem, index) => {
		return <DockItem key={index} openWindow={openWindow} data={dockItem}/>
	});

	const dockStyles = {
		position: 'absolute',
		bottom: 0,
		display: 'flex',
		justifyContent:  'space-between',
		alignItems: 'center',
		width: '100vw',
		backgroundColor: `${Colors.accent1}`,
		zIndex: '200'
	}

	return (

		<div style={dockStyles}>

			<div className={styles.dockBar}>
				{/*start menu*/}
				<div className={styles.startBtn} onClick={() => setShowStartMenu(! showStartMenu)}>
					Start
				</div>
				<StartMenu shouldShow={showStartMenu}/>

				{ dockItemList }
			</div>

			<div>
			tray
			</div>
		</div>
	);
}
