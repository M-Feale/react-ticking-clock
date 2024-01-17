import { useState } from "react";
import styled from "styled-components";
import clock from "../src/assets/edited_grandfather_clock.png";

const App = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	let minuteDegrees = 180 + minutes * 6;
	let hourDegrees = 180 + hours * 30 + (minutes / 60) * 30;

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
		minutes > 0 && (
			<>
				<Box>
					<div>Time in second = {seconds}</div>
					<div>Time in minutes = {minutes}</div>
					<div>Time in hours = {hours}</div>
				</Box>
				<ClockFrame>
					<ClockImage src={clock} />
					<SecondsHand></SecondsHand>
				</ClockFrame>
				
				<ClockFace>
					<Hand className="minute" $travel={minuteDegrees}></Hand>
					<Hand className="hour" $travel={hourDegrees}></Hand>
				</ClockFace>
			</>
		)
	);
};

const Box = styled.div`
	color: white;
	background-color: purple;
`;

const ClockFrame = styled.div`
	position: relative;
	background-color: transparent;
`;

const ClockImage = styled.img`
	position: relative;
`;

const SecondsHand = styled.div`
	width: 10px;
	height: 260px;
	background-color: green;
	position: absolute;

	top: 313px;
	left: 143px;

	transform: rotate(0deg);
	transform-origin: 50% -70px;
`;

const ClockFace = styled.div`
	height: 100px;
	width: 100px;
	background-color: yellow;
	position: relative;
	border-radius: 50%;

	top: -618px;
	left: 97px;
`;

const Hand = styled.div`
	width: 10px;
	position: absolute;
	left: calc(50% - 5px);
	top: calc(50% - 5px);
	transform-origin: 50% 5px;

	&.minute {
		height: 50px;
		background-color: mediumaquamarine;
		transform: ${(props) => `rotate(${props.$travel}deg)`};
	}
	&.hour {
		height: 35px;
		background-color: hotpink;
		transform: ${(props) => `rotate(${props.$travel}deg)`};
	}
`;

export default App;
