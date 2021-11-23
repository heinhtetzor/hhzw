import DesktopGridItem from '../DesktopGridItem';

const DesktopGrid = ({ items, openWindow }) => {
	const container = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gridTemplateRows: 'repeat(12, 1fr)',
		direction: 'rtl',
		gridAutoFlow: 'column'
	};
	
	const itemGrid = items.map ((item, index) => {
		return  (
			<DesktopGridItem 
				key={index}
				item={item}
				openWindow={openWindow}
			/>
		)
	})

	return (
		<div style={container}>
			{itemGrid}
		</div>
	);
}
export default DesktopGrid;