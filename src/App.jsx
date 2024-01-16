import { useState } from "react";
import styled from "styled-components";
import clock from "../src/assets/edited_grandfather_clock.png";

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
		<>
			<Box>
				<div>Time in second = {seconds}</div>
				<div>Time in minutes = {minutes}</div>
				<div>Time in hours = {hours}</div>
			</Box>
			<img src={clock} />
			<ClockFace>
				<Hand className="minute"></Hand>
				<Hand className="hour"></Hand>
			</ClockFace>
		</>
	);
};

const Box = styled.div`
	color: white;
	background-color: purple;
`;

const ClockFace = styled.div`
	height: 200px;
	width: 200px;
	background-color: black;
	position: relative;
	border-radius: 50%;
`;

const Hand = styled.div`
	width: 10px;
	position: absolute;
	left: calc(50% - 5px);
	top: calc(50% - 5px);
	
	transform-origin: 50% 5px;
	&.minute {
		height: 100px;
		background-color: mediumaquamarine;
		transform: rotate(180deg);
	}
	&.hour {
		height: 70px;
		background-color: hotpink;
		transform: rotate(180deg);
	}
`;

export default App;
