'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const navLinks = [
		{ href: '/#home', label: 'Home' },
		{ href: '/#how-it-works', label: 'How It Works' },
		{ href: '/services', label: 'Services' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' },
	];

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className='bg-black/95 backdrop-blur-sm border-b border-neutral-800 sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Link href='/' className='flex items-center'>
							<div className='w-10 h-10 rounded-full overflow-hidden mx-2'>
								<Image
									src='/logo.jpeg'
									alt='GenoSaathi Logo'
									width={40}
									height={40}
									className='object-cover'
								/>
							</div>
							<span className='text-2xl font-bold text-white'>
								Geno
								<span className='text-pink-200'>Saathi</span>
							</span>
						</Link>
					</motion.div>

					<div className='hidden md:block'>
						<div className='ml-10 flex items-baseline space-x-4'>
							{navLinks.map((link, index) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
									className="relative" 
								>
									<Link
										href={link.href}
										className='text-neutral-300 hover:text-pink-200 px-0 mx-2 py-2 rounded-md text-sm font-medium transition-colors duration-200'
									>
										{link.label}
									</Link>
									<motion.div
										className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-200"
										initial={{ scaleX: 0 }}
										animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
										transition={{ duration: 0.2, ease: "easeIn" }}
                                        style={{ transformOrigin: 'center' }}
									/>
								</motion.div>
							))}
						</div>
					</div>

					<div className='md:hidden'>
						<motion.button
							onClick={toggleMenu}
							className='inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-pink-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-200'
							whileTap={{ scale: 0.95 }}
						>
							<span className='sr-only'>Open main menu</span>
							<motion.div
								animate={isOpen ? 'open' : 'closed'}
								className='w-6 h-6 flex flex-col justify-center items-center'
							>
								<motion.span
									variants={{
										closed: { rotate: 0, y: 0 },
										open: { rotate: 45, y: 5 },
									}}
									className='w-5 h-0.5 bg-current block transition-all duration-300'
								/>
								<motion.span
									variants={{
										closed: { opacity: 1 },
										open: { opacity: 0 },
									}}
									className='w-5 h-0.5 bg-current block mt-1 transition-all duration-300'
								/>
								<motion.span
									variants={{
										closed: { rotate: 0, y: 0 },
										open: { rotate: -45, y: -5 },
									}}
									className='w-5 h-0.5 bg-current block mt-1 transition-all duration-300'
								/>
							</motion.div>
						</motion.button>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className='md:hidden bg-neutral-900 border-t border-neutral-800'
					>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							{navLinks.map((link, index) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.3,
										delay: index * 0.1,
									}}
								>
									<Link
										href={link.href}
										className='text-neutral-300 hover:text-pink-200 hover:bg-neutral-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
										onClick={() => setIsOpen(false)}
									>
										{link.label}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}