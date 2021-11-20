import styles from './MainLayout.module.css';
export default function MainLayout ({ children }) {

	const backgroundStyle = {
		backgroundImage: `url("/assets/desktop/wallpaper.jpg")`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	return (
		<div className={styles.container} style={backgroundStyle}>
			{children}
		</div>
	)
}