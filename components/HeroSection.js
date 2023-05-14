import React from "react";
import styles from '../styles/Home.module.css'
function HeroSection() {
	return (
		<div>
			<div>
				<h2 className={styles.paintedNoise}></h2>
				<h1 className={styles.order}>Order food online from your favourite local restaurants.</h1>
				<p className={styles.freshly}> Freshly made food delivered to your door.</p>
				<div >
					<input className={styles.inputHead} type="search" placeholder="Enter your location" name="" id="" />
					<button className={styles.searchButton}></button>
				</div>
			</div>
			<div>
				<h6 className={styles.smallIcon}></h6>
				<p className={styles.number}>200K+</p>
				<h3 className={styles.smallImage}></h3>

				<h2 className={styles.bigImage}></h2>
			</div>
			<div>
				<h1 className={styles.explore}>Explore your favourite city’s food.</h1>
				<p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
			</div>
			<button className={styles.buttonE}></button>
			<div className={styles.cycleBg}>
				<h4 className={styles.imageCy}></h4>
			</div>
		</div >
	);
}

export default HeroSection;
