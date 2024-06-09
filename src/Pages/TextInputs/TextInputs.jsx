import React, { useState } from "react";

export default function TextInputs() {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const [showResult, setShowResult] = useState("");
	return (
		<div className="grid grid-rows-4 gap-3 grid-flow-col p-4">
			{/* header */}
			<div>
				<h2 className="text-2xl font-bold">Text Inputs In React :</h2>
				<p>
					This is a tutorial to understand how the inputs works in react and how
					to store the values of input and work with them using states
				</p>
			</div>
			<div>
				<h3 className="text-xl inline-block font-bold">Use Case :</h3>
				<p>Take a input field and create functionalities like</p>
			</div>
			<div>
				<ol type="a">
					<li>1. Take input from the input box</li>
					<li>2. Store the input into states</li>
					<li>
						3. On clicking submit button,Show the input value below the input
						box as a result
					</li>
					<li>4. Dont Forgot To Clear the input box</li>
				</ol>
			</div>
			<div>
				<h2 className="text-xl inline-block font-bold">Solution</h2>
				<div className="flex flex-col justify-center items-center gap-3">
					<div className="flex gap-2 justify-center items-center">
						<div>
							<h2>Input Field : </h2>
						</div>
						<div className="flex gap-3 flex-wrap items-center">
							<input
								type="text"
								name="inputField"
								value={inputValue}
								onChange={handleChange}
								className="border-2 border-black rounded-sm py-1 px-4"
							/>
						</div>
					</div>
					<div>
						{showResult && (
							<h2 className="text-lg font-semibold text-blue-700">
								{showResult}
							</h2>
						)}
					</div>
					<div className="flex gap-3 items-center p-2">
						<div>
							<button
								className="px-4 py-1 border-2 min-w-40 border-blue-500 rounded-full hover:bg-gray-200"
								onClick={() => {
									setInputValue("");
									setShowResult("");
								}}
							>
								Clear
							</button>
						</div>
						<div>
							<button
								className="px-4 py-1 rounded-full min-w-40 bg-blue-500 text-white hover:bg-blue-700"
								onClick={() => {
									if (inputValue === "") {
										alert("Please Fill Input Field First !");
									} else {
										setInputValue("");
										setShowResult(inputValue);
									}
								}}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
