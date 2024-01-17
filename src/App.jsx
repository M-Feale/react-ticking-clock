import { useState } from "react";
import styled from "styled-components";
import clock from "../src/assets/edited_grandfather_clock.png";

const App = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	// We want either X degrees or -X degrees depending on if the seconds is odd or even. Resolves to -X when seconds is even and X when it's odd.
	let secondDegrees = 3 * ((seconds % 2) * 2 - 1);
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
				{/* <Box>
					<div>Time in second = {seconds}</div>
					<div>Time in minutes = {minutes}</div>
					<div>Time in hours = {hours}</div>
				</Box> */}
				<ClockFrame>
					<ClockImage src={clock} />
					<SecondsHand
						className="second"
						$travel={secondDegrees}
					>
						<Weight></Weight>
					</SecondsHand>
				</ClockFrame>

				<ClockFace>
					<Hand className="minute" $travel={minuteDegrees}></Hand>
					<Hand className="hour" $travel={hourDegrees}></Hand>
				</ClockFace>
			</>
		)
	);
};

// const Box = styled.div`
// 	color: white;
// 	background-color: purple;
// `;

const ClockFrame = styled.div`
	position: relative;
	background-color: transparent;
	/* height: 100vh;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center; */
`;

const ClockImage = styled.img`
	position: relative;
	/* max-height: 90%; */

`;

const SecondsHand = styled.div`
	width: 16px;
	height: 300px;
	background-color: green;
	position: absolute;

	top: 313px;
	left: 139px;

	transform: ${(props) => `rotate(${props.$travel}deg)`};
	transform-origin: 50% -150px;
	transition: transform ease-in-out 1s;
`;

const Weight = styled.div`
	height: 60px;
	width: 60px;
	border-radius: 50%;
	background-color: red;
	position: absolute;
	left: -22px;
	top: 245px;
`;

const ClockFace = styled.div`
	height: 80px;
	width: 80px;
	background-color: yellow;
	position: relative;
	border-radius: 50%;

	top: -608px;
	left: 107px;
`;

const Hand = styled.div`
	width: 16px;
	border-radius: 8px;

	position: absolute;
	left: calc(50% - 5px);
	top: calc(50% - 5px);
	transform-origin: 50% 5px;

	&.minute {
		height: 40px;
		background-color: mediumaquamarine;
		transform: ${(props) => `rotate(${props.$travel}deg)`};
	}
	&.hour {
		height: 30px;
		background-color: hotpink;
		transform: ${(props) => `rotate(${props.$travel}deg)`};
	}
`;

export default App;
