import styled from "styled-components";
import clock from "../src/assets/edited_grandfather_clock.png";

const AnalogClock = ({ time }) => {
	// We want either X degrees or -X degrees depending on if the seconds is odd or even. Resolves to -X when seconds is even and X when it's odd.
	let secondDegrees = 3 * ((time.seconds % 2) * 2 - 1);
	//Circle has 360 degrees meaning that every minute, the minute hand must move 6 degrees.
	let minuteDegrees = 180 + time.minutes * 6;
	// Clock only displays 12 hours so every hour is 30 degrees. The hour hand then moves proportionally according to how many minutes have elapsed.
	let hourDegrees = 180 + time.hours * 30 + (time.minutes / 60) * 30;

	return (
		time.seconds != null && (
			<>
				<ClockFrame>
					<ClockImage src={clock} />
					<SecondsHand className="second" 
                    // $travel={secondDegrees}
                    >
						<Weight></Weight>
					</SecondsHand>

					<ClockFace>
						<Hand className="minute" $travel={minuteDegrees}></Hand>
						<Hand className="hour" $travel={hourDegrees}></Hand>
					</ClockFace>
				</ClockFrame>
			</>
		)
	);
};

const ClockFrame = styled.div`
	position: relative;
	background-color: transparent;
`;

const ClockImage = styled.img`
	position: relative;
    max-height: 100%;
`;

const SecondsHand = styled.div`
	width: 13px;
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
	position: absolute;
	border-radius: 50%;

    top: 157px;
    left: 83px;
`;

const Hand = styled.div`
	width: 13px;
	border-radius: 8px;

	position: absolute;
	left: calc(50% - 5px);
	top: calc(50% - 5px);
	transform-origin: 50% 5px;

	&.minute {
		height: 40px;
		background-color: aquamarine;
		transform: ${(props) => `rotate(${props.$travel}deg)`};
	}
	&.hour {
		height: 30px;
		background-color: hotpink;
		transform: ${(props) => `rotate(${props.$travel}deg)`};
	}
`;

export default AnalogClock;
