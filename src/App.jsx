import { useState } from "react";
import styled from "styled-components";
import clock from "../src/assets/edited_grandfather_clock.png";

const App = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	let minuteDegrees = 180 + minutes * 6;
	let hourDegrees = 180 + hours * 30 + (minutes/60 * 30)

	const updateTime = () => {
		const now = new Date();
		setSeconds(now.getSeconds());

		//Circle has 360 degrees meaning that every minute, the minute hand must move 6 degrees.
		setMinutes(now.getMinutes());
	

		// Clock only displays 12 hours so every hour, the hour hand moves 30 degrees. Counterpoint, on a real clock, hour hand moves progressively...
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
				<Hand className="minute" $travel={minuteDegrees}></Hand>
				<Hand className="hour" $travel={hourDegrees}></Hand>
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
		transform: ${(props) => `rotate(${props.$travel}deg)`};
	}
	&.hour {
		height: 70px;
		background-color: hotpink;
		transform: ${(props) => `rotate(${props.$travel}deg)`};
	}
`;

export default App;
