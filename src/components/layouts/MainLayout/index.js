import styles from './MainLayout.module.css';
export default function MainLayout ({ children }) {

	const backgroundStyle = {
		// backgroundImage: `url("/assets/desktop/wallpaper.jpg")`,
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'cover',
		backgroundColor: 'rgb(20, 20, 10, 0.8)'
	};

	return (
		<div className={styles.container} style={backgroundStyle}>
			{children}
		</div>
	)
}