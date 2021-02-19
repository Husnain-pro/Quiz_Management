import { Avatar, Menu, MenuButton, MenuItem, MenuList, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
// import QuizForm from '../components/Pages/QuizForm';
const Navbar = () => {
	const [isLogin, setIsLogin] = React.useState(true);
	return (
		<div className="flex flex-row justify-between p-3 shadow-xl">
			<div className="flex flex-none pl-8">
				<h1 className="font-bold text-2xl">QuizShare</h1>
			</div>
			<div className="flex flex-row">
				<div className="flex flex-row space-x-3 mr-8">
					<Link to="/" className="flex ">
						<div className="flex flex-row space-x-2 text-center items-center text-gray-600 cursor-pointer pl-3 pr-3 rounded-lg  hover:bg-gray-100 ">
							<h3 className="text-md">Home</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						</div>
					</Link>
					<Link to="/create-quiz" className="flex">
						<div className="flex space-x-2 flex-row text-center items-center text-gray-600 cursor-pointer px-3 rounded-lg  hover:bg-gray-100">
							<h3 className="text-md">Create a Quiz</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
								/>
							</svg>
						</div>
					</Link>
					<Link to="/users" className="flex">
						<div className="flex space-x-2 flex-row text-center items-center text-gray-600 cursor-pointer px-3 rounded-lg  hover:bg-gray-100">
							<h3 className="text-md">Users</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
					</Link>
				</div>
				{isLogin ? (
					<div className="pr-4">
						<Menu placement="bottom">
							<MenuButton className="focus:outline-none">
								<Wrap>
									<WrapItem>
										<Avatar size="md" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
									</WrapItem>
								</Wrap>
							</MenuButton>
							<MenuList>
								<Link to="/profile">
									<MenuItem className="focus:outline-none">Profile</MenuItem>
								</Link>
								<Link to="/quizes">
									<MenuItem className="focus:outline-none">Quizes</MenuItem>
								</Link>
								<hr />
								<Link to="/account">
									<MenuItem className="focus:outline-none">Logout</MenuItem>
								</Link>
							</MenuList>
						</Menu>
					</div>
				) : (
					<div className="flex flex-row space-x-4 items-center text-center pr-12">
						<button className="text-md w-24 h-9 border-blue-600 border-opacity-100 border font-bold rounded-lg hover:bg-gray-200">
							Sign Up
						</button>
						<button className="text-md w-24 h-9 border-blue-600 border-opacity-100 border font-bold rounded-lg hover:bg-gray-200">
							Login
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
