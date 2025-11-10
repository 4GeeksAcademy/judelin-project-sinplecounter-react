import React from "react";



//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="text-center">
			<div className="counter ">
				<div>{props.digitSix}</div>
				<div>{props.digitFive}</div>
				<div>{props.digitFour}</div>
				<div>{props.digitThree}</div>
				<div>{props.digitTwo}</div>
				<div>{props.digitOne}</div>
			</div>
		</div>
	);
};

export default SecondsCounter;