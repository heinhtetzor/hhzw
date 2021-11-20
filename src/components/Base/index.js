import { useState, useEffect } from 'react';
import MainLayout from "../layouts/MainLayout";
import Dock from "../Dock";
import Window from "../Window";
export default function Base ()
{
	const [openedWindows, setOpenedWindows] = useState([]);	
	const [activeWindow, setActiveWindow] = useState(null); // activeWindow is the window that is currently focused
	const [windowCount, setWindowCount] = useState(0);

	const dockItems = [
		{
			name: "launcher",
			label: "Launcher",
			logo: "/assets/dockitems/launcher.png",
			stackable: false,
		},
		{
			name: "browser",
			label: "Browser",
			logo: "/assets/dockitems/internet.png",
			stackable: true,
			width: 800,
			height: 600,
			
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

	//action form dock
	const closeWindow = (windowData) => {
		const updatedOpendWindows = openedWindows.filter(window => window.id !== windowData.id);
		setOpenedWindows(updatedOpendWindows);
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
		/>;
	})


	return (
		<MainLayout >

			{openedWindowList}

			<Dock
			openWindow={openWindow}
			dockItems={dockItems}
			></Dock>
		</MainLayout>
	);
}
