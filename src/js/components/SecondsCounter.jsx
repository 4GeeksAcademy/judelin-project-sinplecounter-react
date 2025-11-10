import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';



//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container">
			<div className="counter ">
				<div className="fa-style">	<FontAwesomeIcon icon={faClock} /></div>
				<div className="second">{props.digitSix}</div>
				<div className="second">{props.digitFive}</div>
				<div className="second">{props.digitFour}</div>
				<div className="second">{props.digitThree}</div>
				<div className="second">{props.digitTwo}</div>
				<div className="second">{props.digitOne}</div>
			</div>
		</div>
	);
};

export default SecondsCounter;