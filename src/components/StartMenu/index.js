import styles from './StartMenu.module.css';
const StartMenu = ({ shouldShow }) => {

	if (!shouldShow) {
		return null;
	}

	return (
		<div className={styles.container}>
			Recent Apps
		</div>
	);
}

export default StartMenu;