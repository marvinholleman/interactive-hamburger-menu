import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import HamburgerMenu from "../HamburgerMenu";
import styles from "./Menu.module.css";

const Menu = (props) => {
	const [activateHamburgerMenu, setActivateHamburgerMenu] = useState(false);

	useEffect(() => {
		if (isMobile) {
			setActivateHamburgerMenu(true);
		} else {
			document.addEventListener("scroll", function () {
				if (window.pageYOffset >= props.collapsePosition) {
					setActivateHamburgerMenu(true);
				} else if (window.pageYOffset <= props.collapsePosition) {
					setActivateHamburgerMenu(false);
				}
			});
		}
	}, [props.collapsePosition]);

	return (
		<div className={styles.menuWrapper}>
			<span
				class={`${styles.logo} ${
					activateHamburgerMenu ? styles.dark : styles.light
				}`}
			>
				LOGO
			</span>
			<HamburgerMenu visible={activateHamburgerMenu} />

			<nav
				className={`${styles.nav} ${
					!activateHamburgerMenu ? styles.visible : styles.invisible
				}`}
			>
				<a
					className={`${styles.navItem} ${
						!activateHamburgerMenu ? styles.visible : styles.invisible
					}`}
					href="#"
				>
					Home
				</a>
				<a
					className={`${styles.navItem} ${
						!activateHamburgerMenu ? styles.visible : styles.invisible
					}`}
					href="#"
				>
					About
				</a>
				<a
					className={`${styles.navItem} ${
						!activateHamburgerMenu ? styles.visible : styles.invisible
					}`}
					href="#"
				>
					Projects
				</a>
				<a
					className={`${styles.navItem} ${
						!activateHamburgerMenu ? styles.visible : styles.invisible
					}`}
					href="#"
				>
					Contact
				</a>
			</nav>
		</div>
	);
};

export default Menu;
