import styled from "styled-components";

const DigitalClock = ({ time }) => {
	return (
		time.seconds != null && (
			<Wrapper>
				<Casing>
					<Display>
						<Time>{time.hours}</Time>
						<Colon>:</Colon>
						<Time>{time.minutes}</Time>
						<Colon>:</Colon>
						<Time>{time.seconds}</Time>
						{/* {time.hours}:{time.minutes}:{time.seconds} */}
					</Display>
				</Casing>
			</Wrapper>
		)
	);
};

const Casing = styled.div`
	background-color: black;
	width: 270px;
	height: 100px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 16px;
`;

const Display = styled.div`
	min-width: 80%;
	font-family: "Orbitron", sans-serif;
	font-size: 36px;
	border-radius: 12px;
	padding: 10px;
	background-color: white;
	color: black;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

const Time = styled.span`
	width: 30%;
`;

const Colon = styled.span`
	width: 5%;
`;

export default DigitalClock;
