import { useEffect, useState } from "react";

const App = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	const now = new Date()
	console.log("this is now", now, typeof now, "ceci est le type ")

	useEffect(() => {
	setSeconds(now.getSeconds())
	setMinutes(now.getMinutes())
	setHours(now.getHours())
	}, [])

	const updateTime = () => {
		// should I really create a function that sets time every 1000 seconds ?
	}

	return (
		<>
		<div>Time in second = {seconds}</div>
		<div>Time in minutes = {minutes}</div>
		<div>Time in hours = {hours}</div>
		</>
	);
};

export default App;
