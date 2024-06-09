import React from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ handleDropDownToggle, handleMenuToggle }) {
	return (
		<div
			className="absolute top-16 right-14 bg-gray-800 rounded-md mt-1"
			onMouseLeave={() => {
				handleDropDownToggle();
				handleMenuToggle();
			}}
		>
			<ul className="flex flex-col p-2 gap-4">
				<li className="hover:text-blue-500  hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white">
					<NavLink
						to="useState"
						onClick={() => {
							handleDropDownToggle();
							handleMenuToggle();
						}}
						className="w-full"
					>
						Use State
					</NavLink>
				</li>
				<li className="hover:text-blue-500  hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white">
					<NavLink
						to="useEffect"
						onClick={() => {
							handleDropDownToggle();
							handleMenuToggle();
						}}
					>
						Use Effect
					</NavLink>
				</li>
				<li className="hover:text-blue-500  hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white">
					<NavLink
						to="textInputs"
						onClick={() => {
							handleDropDownToggle();
							handleMenuToggle();
						}}
						className="w-full"
					>
						Text Inputs
					</NavLink>
				</li>
				<li className="hover:text-blue-500  hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white">
					<NavLink
						to="radioButtons"
						onClick={() => {
							handleDropDownToggle();
							handleMenuToggle();
						}}
						className="w-full"
					>
						Radio Buttons
					</NavLink>
				</li>
				<li className="hover:text-blue-500  hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white">
					<NavLink
						to="selectMenu"
						onClick={() => {
							handleDropDownToggle();
							handleMenuToggle();
						}}
						className="w-full"
					>
						{" "}
						Select Dropdown
					</NavLink>
				</li>
				<li className="hover:text-blue-500  hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white">
					<NavLink
						to="checkBoxes"
						onClick={() => {
							handleDropDownToggle();
							handleMenuToggle();
						}}
						className="w-full"
					>
						Checkboxes
					</NavLink>
				</li>
				<li className="hover:text-blue-500  hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white">
					<NavLink
						to="switches"
						onClick={() => {
							handleDropDownToggle();
							handleMenuToggle();
						}}
						className="w-full"
					>
						Switches
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
