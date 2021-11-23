import { useRef, useEffect } from 'react';
import styles from './StartMenu.module.css';
const StartMenu = ({ shouldShow, setShowStartMenu }) => {

	const ref = useRef(null); //to focus the start menu after clicking start so that tabindex and blur event will work

	useEffect (() => {
		if (shouldShow) {
			ref.current.focus();
		}
	}, [shouldShow]);

	if (!shouldShow) {
		return null;
	}

	const handleBlur = () => {
		setShowStartMenu(false)
	}

	return (
		<div ref={ref} tabIndex="0" className={styles.container} onBlur={handleBlur}>
			<div>
				Hi, welcome to my Desktop.
				<h4> ~ hein</h4>
				<a href="mailto:heinhzor@gmail.com">heinhzor@gmail.com</a>
			</div>
		</div>
	);
}

export default StartMenu;