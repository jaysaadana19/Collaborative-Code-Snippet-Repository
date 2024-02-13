import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div className='h-16 w-full top-0 p-4 flex justify-between bg-[#F3F8FF]'>
			<div className='text-3xl'>CodeCollab</div>

			<div className='hidden md:flex gap-5 items-center'>
				<a
					href='#'
					className='text-xl text-gray-800 hover:text-indigo-600 transition duration-100'>
					Home
				</a>
				<a
					href='#'
					className='text-xl text-gray-800 hover:text-indigo-600 transition duration-100'>
					Contact Us
				</a>
				<a
					href='/explore'
					className='text-xl text-gray-800 hover:text-indigo-600 transition duration-100'>
					Explore
				</a>
				<Button>Join CollabCode</Button>
				<Link to='/login'>
					<Button>Log in</Button>
				</Link>
			</div>

			<div className='md:hidden'>
				<Sheet>
					<SheetTrigger>
						<Menu />
					</SheetTrigger>
					<SheetContent className='bg-[#F3F8FF]'>
						<SheetClose>
							<div className='flex flex-col gap-5'>
								<a
									href='#'
									className='text-gray-800 hover:text-indigo-600 transition duration-100 text-left text-xl'>
									Home
								</a>
								<a
									href='#'
									className='text-gray-800 hover:text-indigo-600 transition duration-100 text-left text-xl'>
									Contact Us
								</a>
								<a
									href='/explore'
									className='text-gray-800 hover:text-indigo-600 transition duration-100 text-left text-xl'>
									explore
								</a>
								<Button>Join CollabCode</Button>
								<Button>Log in</Button>
							</div>
						</SheetClose>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}

function Hero() {
	return (
		<section>
			<div className='container mx-auto p-6'>
				<h1 className='text-5xl font-bold mb-4'>
					CodeCollab : Collaborative Code Snippets
				</h1>
				<div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
					<div className='text-center lg:text-left lg:mr-8'>
						<p className='text-lg mb-4'>
							Share, discover, and collaborate on code snippets across various
							programming languages and frameworks.
						</p>
						<p className='text-lg mb-4'>
							Contribute, rate, and discuss code snippets to create a
							community-driven repository for developers.
						</p>
						<p className='text-lg mb-4'>
							A valuable resource for programmers, fostering collaboration,
							learning, and the sharing of best practices.
						</p>
						<a
							href='https://github.com/jaysaadana19/Collaborative-Code-Snippet-Repository'
							target='_blank'
							rel='noopener noreferrer'>
							<img
								src='https://img.shields.io/github/stars/jaysaadana19/Collaborative-Code-Snippet-Repository.svg?style=social'
								alt='GitHub stars'
								class='inline-block mr-2'
							/>
						</a>
					</div>
					<img
						src='/src/assets/illustration.jpg'
						alt='coding'
						className='w-full max-w-md lg:max-w-sm'
					/>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className='h-fit bg-gray-800 text-white text-center mb-0'>
			<div className='container mx-auto p-5 flex flex-col lg:flex-row justify-between items-center'>
				<p className='text-lg mb-4 lg:mb-0 lg:mr-4'>
					CodeCollab | &copy; 2024 All Rights Reserved
				</p>
				<a href='https://github.com/jaysaadana19/Collaborative-Code-Snippet-Repository'>
					<Button variant='secondary' className='lg:ml-auto'>
						<Github /> Edit on GitHub
					</Button>
				</a>
			</div>
		</footer>
	);
}

function LandingPage() {
	return (
		<div className='h-screen flex flex-col justify-between'>
			<Navbar />
			<Hero />
			<Footer />
		</div>
	);
}
export default LandingPage;
