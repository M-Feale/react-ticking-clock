import { useState } from "react";
import styled from "styled-components";
import clock from "../src/assets/edited_grandfather_clock.png";

const App = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	// Starting at 0 degrees, travels 4 degrees one way in a half a second, hits the "second" at the apex and travels 8 degrees the other way in a second. 30 odd numbers, 30 even numbers between 0 and 59 (possible seconds). Even on the left, odd on the right ?
	let secondDegrees;

	//Circle has 360 degrees meaning that every minute, the minute hand must move 6 degrees.
	let minuteDegrees = 180 + minutes * 6;
	// Clock only displays 12 hours so every hour is 30 degrees. The hour hand then moves proportionally according to how many minutes have elapsed.
	let hourDegrees = 180 + hours * 30 + (minutes / 60) * 30;

	const updateTime = () => {
		const now = new Date();

		setSeconds(now.getSeconds());

		setMinutes(now.getMinutes());

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
					<SecondsHand
						className="second"
						$travel={secondDegrees}
					></SecondsHand>
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

	transform: rotate(4deg);
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
