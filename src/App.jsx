import { useState } from "react";

const App = () => {
	const [time, setTime] = useState(null);
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	// setTimeout(() => {
	// 	setTime(Date.now());
	// 	console.log(time);
	// 	setSeconds(time / 1000);
	// 	setMinutes(time / 1000 / 60);
	// 	setHours(time / 1000 / 60 / 60);
	// }, 1000);

  // Trying to figure out how time works and where I could get my seconds, minutes and hours from.
  // Milliseconds in a day = 86,400,000
  const date = new Date()
  console.log("this is my date", date, typeof date, "ceci est le type ")

  const newTime = date.getTime();
  console.log("this is the time ?", newTime, typeof newTime, "ceci est son type")

  const newDate = Date(newTime)
  console.log("this is newDate", newDate, typeof newDate, "ceci est son type")


	return (
		<>
			<div>Time in ms = {time}</div>
			<div>Time in second = {seconds}</div>
      <div>Time in minutes = {minutes}</div>
      <div>Time in hours = {hours}</div>
		</>
	);
};

export default App;
