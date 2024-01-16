import { useState } from "react";
import styled from "styled-components";

const App = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	const updateTime = () => {
		const now = new Date();
		setSeconds(now.getSeconds());
		setMinutes(now.getMinutes());
		setHours(now.getHours());
	};

	setInterval(updateTime, 1000);

	return (
		<Box>
			<div>Time in second = {seconds}</div>
			<div>Time in minutes = {minutes}</div>
			<div>Time in hours = {hours}</div>
		</Box>
	);
};

const Box = styled.div`
	color: white;
	background-color: purple;
`;

export default App;
