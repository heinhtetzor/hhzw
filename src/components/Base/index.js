import { useState } from 'react';
import MainLayout from "../layouts/MainLayout";
import Dock from "../Dock";
import Window from "../Window";
import DesktopGrid from '../DesktopGrid';
export default function Base ()
{
	const [openedWindows, setOpenedWindows] = useState([]);	
	const [activeWindow, setActiveWindow] = useState(null); // activeWindow is the window that is currently focused
	const [windowCount, setWindowCount] = useState(0);

	const applications = [
		{
			name: "about",
			label: "About Me",
			logo: "./assets/dockitems/about.png",
			stackable: false,
		},
		{
			name: "about-this",
			label: "About This",
			logo: "./assets/dockitems/question-mark.png",
			stackable: false,
		},
		{
			name: "browser",
			label: "Bing",
			logo: "./assets/dockitems/bing.png",
			stackable: false,
			width: '100%',
			height: '95%',
		},
	];

	//action from dock
	const openWindow = (windowData) => {
		const foundOpenWindow = openedWindows.find (window => window.name === windowData.name);
				
		if (! windowData.stackable && foundOpenWindow) return; //non stackable apps shouldnt reopen again
				
		const updatedOpenedWindows = [...openedWindows, {id:windowCount, ...windowData}];
		setOpenedWindows(updatedOpenedWindows);
		setActiveWindow({id:windowCount, ...windowData});
		setWindowCount(windowCount + 1);
	}

	//action form window
	const closeWindow = windowData => {
		const updatedOpendWindows = openedWindows.filter(window => window.id !== windowData.id);
		setOpenedWindows(updatedOpendWindows);
	}

	//action form window
	const minimizeWindow = windowData => {
		const windowId = openedWindows.findIndex(window => window.id === windowData.id);
		const tempWindows = [...openedWindows];
		tempWindows[windowId].isMinimized = !tempWindows[windowId].isMinimized;
		setOpenedWindows(tempWindows);
	}	

	//list render
	const openedWindowList = openedWindows.map ((window, index) => {		
		return <Window 
		key={index} 
		index={index}
		window={window}
		closeWindow={closeWindow}
		isActive={window.id === activeWindow?.id}
		setActiveWindow={setActiveWindow}
		minimizeWindow={minimizeWindow}
		/>;
	})


	return (
		<MainLayout >

			<DesktopGrid 
			items={applications} 
			openWindow={openWindow}  />

			{openedWindowList}

			<Dock
			openWindow={openWindow}
			dockItems={applications}
			openedWindows={openedWindows}
			activeWindow={activeWindow}
			minimizeWindow={minimizeWindow}
			setActiveWindow={setActiveWindow}
			></Dock>
		</MainLayout>
	);
}
