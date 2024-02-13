import React, { useState } from "react";
import google from "../assets/google.png";
import github from "../assets/github.png";
const Login = () => {
	return (
		<>
			<div className='wrapper bg-login-bg w-screen bg-center bg-cover bg-no-repeat flex justify-around items-center px-5 flex-wrap h-screen'>
				<div className='text-white  bg-transparent backdrop-blur p-5 rounded-3xl'>
					<h1 className='text-7xl my-3 italic'>CodeCollab</h1>
					<h1 className='text-4xl underline italic'>
						# Collaborative Code Snippets
					</h1>
				</div>
				<div className='flex justify-end items-center sm:h-screen mx-20'>
					<div className='w-96 bg-white/10 p-6 rounded-[40px] shadow-lg backdrop-blur h-auto flex flex-col justify-center'>
						<h1 className='text-2xl font-bold text-center mb-8 text-white underline'>
							Join Our Community
						</h1>
						<form action=''>
							<div className='mb-4 flex'>
								<label
									htmlFor='email'
									className='text-xl block text-gray-900 font-bold mb-2 mr-5'>
									Email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Your Email'
									className='w-full px-5 ml-8 py-1 rounded-full border border-gray-300 outline-0'
								/>
							</div>
							<div className='mb-4 flex'>
								<label
									htmlFor='password'
									className='text-xl block text-gray-900 font-bold mb-2'>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='Your Password'
									className='w-full px-5 ml-4 py-1 rounded-full border border-gray-300 outline-0'
								/>
							</div>
							<div className='flex justify-center items-center'>
								<button className='bg-blue-500 text-white px-5 py-2 rounded-full font-medium w-24 hover:bg-blue-600 hover:duration-300'>
									Login
								</button>
							</div>
							<h1 className='text-center text-white my-5'>
								Don't have an account ?{" "}
								<a href='#'>
									<span className='text-emerald-400 hover:text-emerald-200 hover:duration-300'>
										Sign Up
									</span>
								</a>{" "}
								here
							</h1>
							<div className='buttons flex flex-col justify-center items-center'>
								<button className='bg-white flex justify-center items-center rounded-full w-60 py-1'>
									<img src={google} alt='' className='w-7' />
									Sign in with Google
								</button>
								<button className='bg-white flex justify-center items-center rounded-full  h-10 my-5 py-1 w-60'>
									<img src={github} alt='' className='w-10' />
									Sign in with Github
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
