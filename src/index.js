import React from "react";
import ReactDOM from "react-dom";

import PageWrapper from "./components/PageWrapper";

import styles from "./styles/pages/index.module.css";

ReactDOM.render(
	<React.StrictMode>
		<PageWrapper>
			<h1 className={styles.welcome}>Welcome to the testpage</h1>
		</PageWrapper>
	</React.StrictMode>,
	document.getElementById("root")
);
