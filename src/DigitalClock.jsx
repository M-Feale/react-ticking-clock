import styled from "styled-components";

const DigitalClock = ({ time }) => {
	return (
		time.seconds != null && (
			<Box>
				<div>Time in second = {time.seconds}</div>
				<div>Time in minutes = {time.minutes}</div>
				<div>Time in hours = {time.hours}</div>
			</Box>
		)
	);
};

const Box = styled.div`
	color: white;
	background-color: purple;
`;

export default DigitalClock;
