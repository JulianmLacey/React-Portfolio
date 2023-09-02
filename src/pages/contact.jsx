import { useState } from "react";
export default function Contact() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		return name === "firstName" ? setFirstName(value) : setLastName(value);
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();

		alert(`Hello ${firstName} ${lastName}`);
		setFirstName("");
		setLastName("");
	};
	return (
		<div class="form-style">
			<h3>Contact:</h3>
			<form onSubmit={handleFormSubmit}>
				<label for="firstName">First Name:</label>
				<br />
				<input type="text" id="firstName" name="firstName" onChange={handleInputChange} />
				<br />
				<label for="lastName">Last name:</label>
				<br />
				<input type="text" id="lastName" name="lastName" onChange={handleInputChange} />
				<br />
				<label for="email">Email:</label>
				<br />
				<input type="text" id="email" name="email" onChange={handleInputChange} />
				<br />
				<label for="Description">Description:</label>
				<br />
				<input type="text" id="Description" name="Description" onChange={handleInputChange} />
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
