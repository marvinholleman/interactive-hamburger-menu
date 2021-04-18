import React, { useEffect, useState, useRef } from "react";

import Menu from "../Menu";
import hero from "../../assets/images/hero.jpeg";
import styles from "./Header.module.css";

const Header = () => {
	const [collapsePosition, setCollapsePosition] = useState();
	const [loaded, setLoaded] = useState(false);
	const heroImage = useRef(null);

	useEffect(() => {
		if (loaded) {
			setCollapsePosition(heroImage.current.offsetHeight);
		}
	}, [loaded]);

	return (
		<header>
			{collapsePosition && <Menu collapsePosition={collapsePosition} />}
			<img
				className={styles.heroImage}
				alt="hero"
				src={hero}
				ref={heroImage}
				onLoad={() => setLoaded(true)}
			/>
		</header>
	);
};

export default Header;
