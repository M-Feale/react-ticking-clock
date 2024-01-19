import { useState } from "react";
import styled from "styled-components";

import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";

const App = () => {
	const [time, setTime] = useState({
		seconds: null,
		minutes: null,
		hours: null,
	});

	const updateTime = () => {
		const now = new Date();
		setTime({
			seconds: now
				.getSeconds()
				.toLocaleString(undefined, { minimumIntegerDigits: 2 }),
			minutes: now
				.getMinutes()
				.toLocaleString(undefined, { minimumIntegerDigits: 2 }),
			hours: now
				.getHours()
				.toLocaleString(undefined, { minimumIntegerDigits: 2 }),
		});
	};

	setInterval(updateTime, 1000);

	return (
		<TimeContainer>
			<AnalogClock time={time} />
			<DigitalClock time={time} />
		</TimeContainer>
	);
};

const TimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export default App;
