import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function NavBar() {
	const [openMenu, setOpenMenu] = useState(false);

	const handleMenuToggle = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<nav className="flex justify-between items-center bg-gray-800 shadow-sm shadow-black ">
			<div className="p-2 ">
				<NavLink
					to=""
					className="text-md text-white font-medium hover:text-red-600 p-2 hover:ease-in hover:delay-150 hover:duration-150"
				>
					Learn with Fun
				</NavLink>
			</div>
			<div className="block md:hidden p-2">
				{openMenu ? (
					<IoCloseSharp
						onClick={handleMenuToggle}
						fontSize={30}
						className="hover:text-blue-600 hover:ease-in hover:delay-150 hover:duration-150 hover:cursor-pointer text-white"
					/>
				) : (
					<HiOutlineMenuAlt2
						onClick={handleMenuToggle}
						fontSize={30}
						className="hover:text-blue-600 hover:ease-in hover:delay-150 hover:duration-150 hover:cursor-pointer text-white"
					/>
				)}
			</div>
			<div
				className={`bg-gray-800  absolute md:static z-10 top-10 w-full md:w-auto md:flex md:flex-row md:gap-10 p-4 ${
					openMenu
						? "ease-in delay-300 duration-700 flex flex-col gap-4 justify-center items-center"
						: "hidden"
				}`}
			>
				<NavLink
					className="hover:text-blue-500 md:hover:font-semibold hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white"
					to="/"
					onClick={handleMenuToggle}
				>
					Home
				</NavLink>
				<NavLink
					className="hover:text-blue-500 md:hover:font-semibold hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white"
					onClick={handleMenuToggle}
				>
					Learn
				</NavLink>

				<NavLink
					to="/about"
					onClick={handleMenuToggle}
					className="hover:text-blue-500 md:hover:font-semibold hover:bg-white ease-in duration-500 px-5 py-1 rounded-md w-full text-white"
				>
					About
				</NavLink>
			</div>
		</nav>
	);
}
