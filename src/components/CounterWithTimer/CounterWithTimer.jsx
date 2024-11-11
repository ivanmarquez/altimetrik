import React, { useState, useEffect } from "react";

const CounterWithTimer = () => {
	const [counter, setCounter] = useState(0);
	const [seconds, setSeconds] = useState(10);

	useEffect(() => {
		if (seconds > 0) {
			const timer = setInterval(() => {
				setSeconds((seconds) => seconds - 1);
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [seconds]);

	const incrementCounter = () => {
		if (seconds > 0) {
			setCounter(counter + 1);
		}
	};

	return (
		<div>
			<h1>{counter}</h1>
			<h2>Time left: {seconds} seconds</h2>
			{seconds > 0 && (
				<button onClick={incrementCounter}>Increment</button>
			)}
		</div>
	);
};

export default CounterWithTimer;
