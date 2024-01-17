import { useState } from "react";

import AnalogClock from "./AnalogClock";

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
		<AnalogClock time={time} />
	) 
};

export default App;
