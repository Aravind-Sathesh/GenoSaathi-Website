import Link from 'next/link';
import Image from 'next/image';
import {
	Linkedin,
	Twitter,
	Instagram,
	Facebook,
	MapPin,
	Phone,
	Mail,
} from 'lucide-react';

export default function Footer() {
	return (
		<footer className='bg-black border-t border-neutral-800 text-neutral-300'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Main Footer Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
					{/* Column 1: Company Info & Socials */}
					<div className='space-y-4'>
						<Link href='/' className='flex items-center'>
							<div className='w-10 h-10 rounded-full overflow-hidden mr-2'>
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
						<p className='text-neutral-400 text-sm'>
							Finding Love’s Genetic Potential.
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								className='text-neutral-400 hover:text-pink-200 transition-colors'
							>
								<Twitter size={20} strokeWidth={1.5} />
							</a>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								className='text-neutral-400 hover:text-pink-200 transition-colors'
							>
								<Linkedin size={20} strokeWidth={1.5} />
							</a>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								className='text-neutral-400 hover:text-pink-200 transition-colors'
							>
								<Instagram size={20} strokeWidth={1.5} />
							</a>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								className='text-neutral-400 hover:text-pink-200 transition-colors'
							>
								<Facebook size={20} strokeWidth={1.5} />
							</a>
						</div>
					</div>

					{/* Column 2: Company Links */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold text-white'>
							Company
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-neutral-400 hover:text-pink-200 transition-colors'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='text-neutral-400 hover:text-pink-200 transition-colors'
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-neutral-400 hover:text-pink-200 transition-colors'
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-neutral-400 hover:text-pink-200 transition-colors'
								>
									How It Works
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Support Links */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold text-white'>
							Support
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/contact'
									className='text-neutral-400 hover:text-pink-200 transition-colors'
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href='/faq'
									className='text-neutral-400 hover:text-pink-200 transition-colors'
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href='/privacy-policy'
									className='text-neutral-400 hover:text-pink-200 transition-colors'
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href='/terms-of-service'
									className='text-neutral-400 hover:text-pink-200 transition-colors'
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4: Contact Information */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold text-white'>
							Get in Touch
						</h3>
						<ul className='space-y-3 text-neutral-400'>
							<li className='flex items-start'>
								<MapPin
									className='mt-1 mr-3 flex-shrink-0 text-pink-200'
									size={20}
									strokeWidth={1.5}
								/>
								<span>
									BITS Pilani, Pilani Campus, Vidya Vihar,
									Pilani 333031, Rajasthan, India
								</span>
							</li>
							<li className='flex items-center'>
								<Mail
									className='mr-3 flex-shrink-0 text-pink-200'
									size={20}
									strokeWidth={1.5}
								/>
								<a
									href='mailto:genosaathi@gmail.com'
									className='hover:text-pink-200 transition-colors'
								>
									genosaathi@gmail.com
								</a>
							</li>
							<li className='flex items-center'>
								<Phone
									className='mr-3 flex-shrink-0 text-pink-200'
									size={20}
									strokeWidth={1.5}
								/>
								<a
									href='tel:+919672353320'
									className='hover:text-pink-200 transition-colors'
								>
									+91 9672353320
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-8 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
					<p className='text-sm text-neutral-500 mb-4 md:mb-0'>
						© {new Date().getFullYear()} Genosaathi. All Rights
						Reserved.
					</p>
					<div className='flex items-center space-x-4'>
						<a
							href='#'
							className='bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors'
						>
							<svg
								className='w-4 h-4 mr-2'
								fill='#fff'
								viewBox='0 0 1920 1920'
								xmlns='http://www.w3.org/2000/svg'
								stroke='#fff'
							>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									strokeLinecap='round'
									strokeLinejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='M972.669 550.592c74.37 0 213.815-103.393 360.63-88.315 61.446 2.608 233.881 25.282 344.644 190.462-8.843 5.895-205.88 122.78-203.5 366.184 2.495 290.908 249.982 387.499 252.816 388.973-2.268 6.575-39.566 137.857-130.489 273.448-78.565 117.111-159.965 233.655-288.3 236.036-126.18 2.494-166.767-76.298-311.087-76.298-144.206 0-189.214 73.917-308.706 78.792-123.913 4.762-218.237-126.52-297.37-243.178-161.892-238.87-285.578-674.665-119.491-968.86 82.42-146.133 229.8-238.643 389.879-241.024 121.646-2.267 236.603 83.78 310.974 83.78ZM1367.75 0c13.038 110.536-34.69 221.525-105.093 301.45-70.743 79.813-186.494 141.94-299.977 133.55-15.305-108.495 41.947-221.184 107.248-292.154C1142.939 63.034 1266.172 3.855 1367.75 0Z'
										fillRule='evenodd'
									></path>
								</g>
							</svg>
							<span>App Store</span>
						</a>
						<a
							href='#'
							className='bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors'
						>
							<svg
								className='w-3 h-3 mr-2'
								fill='#ffffff'
								viewBox='0 0 32 32'
								xmlns='http://www.w3.org/2000/svg'
								stroke='#ffffff'
							>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									strokeLinecap='round'
									strokeLinejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									<path d='M20.331 14.644l-13.794-13.831 17.55 10.075zM2.938 0c-0.813 0.425-1.356 1.2-1.356 2.206v27.581c0 1.006 0.544 1.781 1.356 2.206l16.038-16zM29.512 14.1l-3.681-2.131-4.106 4.031 4.106 4.031 3.756-2.131c1.125-0.893 1.125-2.906-0.075-3.8zM6.538 31.188l17.55-10.075-3.756-3.756z'></path>
								</g>
							</svg>
							<span>Google Play</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
