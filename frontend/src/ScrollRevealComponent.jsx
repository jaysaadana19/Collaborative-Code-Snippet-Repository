import React, { useEffect } from "react";

const ScrollRevealComponent = () => {
	useEffect(() => {
		const sr = window.ScrollReveal();
		sr.reveal(".text,.login", {
			reset: true,
			delay: 200,
			distance: "50px",
			origin: "top",
			duration: 2000,
		});
	}, []);

	return (
		<div>
			<div className='text'></div>
			<div className='login'></div>
		</div>
	);
};

export default ScrollRevealComponent;
