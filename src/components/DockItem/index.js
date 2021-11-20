import styles from "./DockItem.module.css";
export default function DockItem ({ data, openWindow }) {
	const backgroundStyles = {
		backgroundImage: `url(${data.logo})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",

		userSelect: "none"
	}

	const onClick = () => {
		openWindow({
			...data
		})
	}

	return (
		<div className={styles.container} style={backgroundStyles}
		onClick={onClick}
		>
			
		</div>
	);
}
