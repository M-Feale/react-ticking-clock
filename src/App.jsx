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
			seconds: now.getSeconds(),
			minutes: now.getMinutes(),
			hours: now.getHours(),
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
	justify-content: space-between;
`;

export default App;
