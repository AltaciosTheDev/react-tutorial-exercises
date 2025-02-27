import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const colorClasses = {
	red: "alert-danger",
	yellow: "alert-warning",
	green: "alert-success",
	blue: "alert-primary",
};

const Alert = (props) => {
	return (
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		</div>
	);
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// Here is where the <Alert /> component is being used, you don't have to edit this part
// But it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happened!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="yellow" />
		<Alert text="This is my very own alert" color="blue" />
		<Alert text="This is my very own alert" color="green" />
	</div>,
	document.querySelector("#myDiv")
);
