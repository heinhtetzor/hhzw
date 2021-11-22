const TabItem = ({ tabItem, setTab, tab }) => {
	const tabBarItem = {
		border: '1px solid purple',
		padding: '0.5rem',
		cursor: 'pointer',
		boxShadow: `${tab.id === tabItem.id ? 'inset 2px 3px 3px' : ''}`,
		fontWeight: `${tab.id === tabItem.id ? '700' : ''}`,
	}

	return (
		<div style={tabBarItem} onClick={() => setTab(tabItem)}>
			{tabItem.name}
		</div>
	);
}

export default TabItem;