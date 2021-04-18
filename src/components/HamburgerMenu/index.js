import React, { useState } from "react";

import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = (props) => {
	const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

	return (
		<>
			<div
				onClick={(e) => setOpenHamburgerMenu(!openHamburgerMenu)}
				className={`${styles.hamburgerIcon} ${
					props.visible ? styles.visible : styles.invisible
				}`}
			>
				<span
					className={`${styles.hamburgerSpan1} ${
						openHamburgerMenu && styles.light && styles.openhamburgerSpan1
					}`}
				></span>
				<span
					className={`${styles.hamburgerSpan2} ${
						openHamburgerMenu && styles.light && styles.openhamburgerSpan2
					}`}
				></span>
				<span
					className={`${styles.hamburgerSpan3} ${
						openHamburgerMenu && styles.light && styles.openhamburgerSpan3
					}`}
				></span>
			</div>
			{openHamburgerMenu && (
				<div
					className={`${styles.hamburgerMenuWrapper} ${
						props.visible ? styles.visible : styles.invisible
					}`}
				>
					<nav
						className={`${styles.hamburgerNav} ${
							props.visible ? styles.visible : styles.invisible
						}`}
					>
						<a
							className={`${styles.hamburgerNavItem} ${
								props.visible ? styles.visible : styles.invisible
							}`}
							href="#"
						>
							Home
						</a>
						<a
							className={`${styles.hamburgerNavItem} ${
								props.visible ? styles.visible : styles.invisible
							}`}
							href="#"
						>
							About
						</a>
						<a
							className={`${styles.hamburgerNavItem} ${
								props.visible ? styles.visible : styles.invisible
							}`}
							href="#"
						>
							Projects
						</a>
						<a
							className={`${styles.hamburgerNavItem} ${
								props.visible ? styles.visible : styles.invisible
							}`}
							href="#"
						>
							Contact
						</a>
					</nav>
				</div>
			)}
		</>
	);
};

export default HamburgerMenu;
