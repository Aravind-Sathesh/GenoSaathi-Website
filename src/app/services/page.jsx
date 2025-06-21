'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
	Heart,
	Dna,
	MessageSquareHeart,
	UsersRound,
	Stethoscope,
	ArrowRight,
	Sparkles,
} from 'lucide-react';

const servicesData = [
	{
		title: 'Genetic MatchMaking',
		description:
			'Our advanced algorithms analyze genetic data alongside personal preferences to find partners who are genuinely compatible on a biological and personal level.',
		icon: UsersRound,
		link: '#',
	},
	{
		title: 'Carrier Testing',
		description:
			'Identify potential genetic mutations that could be passed on to children. This vital service provides peace of mind and empowers informed family planning.',
		icon: Dna,
		link: '#',
	},
	{
		title: 'Genetic Counselling',
		description:
			'Our expert counselors help you interpret test results, understand their implications, and provide personalized guidance for your health and relationship decisions.',
		icon: Stethoscope,
		link: '#',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-[#EEEEEE] text-[#222222] font-sans'>
			{/* Page Header Section */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='relative overflow-hidden py-24 sm:py-32'
				style={{
					background:
						'linear-gradient(135deg, #ffffff 0%, #FCCFE8 100%)',
				}}
			>
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2730%22%20cy=%2730%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
				<div className='relative max-w-7xl mx-auto px-4 text-center'>
					<motion.h1
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className='text-5xl sm:text-6xl font-bold font-poppins mb-4'
						style={{ textShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
					>
						Our Core Services
					</motion.h1>
					<motion.p
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='text-lg sm:text-xl max-w-3xl mx-auto text-neutral-600'
					>
						Blending cutting-edge science with a human touch to
						guide you on your journey to a healthier, more
						compatible future.
					</motion.p>
				</div>
			</motion.div>

			{/* Services Grid Section */}
			<div className='py-24'>
				<motion.div
					className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
				>
					{servicesData.map((service, index) => (
						<motion.div
							key={index}
							className='group cursor-pointer'
							variants={itemVariants}
							whileHover={{ scale: 1.05 }}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 20,
							}}
						>
							<div
								className='p-8 rounded-[2rem] h-full flex flex-col transition-all duration-500 hover:shadow-2xl relative overflow-hidden'
								style={{
									background:
										'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
									boxShadow: '0 20px 40px rgba(0,0,0,0.07)',
								}}
							>
								<div
									className='absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity'
									style={{ background: '#FCCFE8' }}
								></div>

								{/* Icon */}
								<div className='mb-6'>
									<div
										className='w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6'
										style={{
											background:
												'linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)',
											boxShadow:
												'0 8px 20px rgba(252, 207, 232, 0.4)',
										}}
									>
										<service.icon
											className='w-8 h-8 text-[#222222]'
											strokeWidth={1.5}
										/>
									</div>
								</div>

								<h3 className='text-2xl font-bold font-poppins mb-4 text-[#222222]'>
									{service.title}
								</h3>
								<p className='text-neutral-600 leading-relaxed flex-grow'>
									{service.description}
								</p>

								<div className='mt-6'>
									<Link
										href={service.link}
										className='font-bold text-pink-500 inline-flex items-center group-hover:text-pink-600 transition-colors'
									>
										Learn More
										<ArrowRight className='ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Call to Action Section */}
			<div className='max-w-7xl mx-auto px-4 py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='relative text-center rounded-[2rem] overflow-hidden py-16 px-8'
					style={{
						background:
							'linear-gradient(135deg, #FE97D1 0%, #FEBFE2 80%)',
					}}
				>
					<div className='absolute inset-0 bg-black/20'></div>
					<div className='relative'>
						<h2 className='text-4xl font-bold font-poppins text-white mb-4'>
							Ready to Find Your Perfect Match?
						</h2>
						<p className='text-lg text-neutral-300 max-w-2xl mx-auto mb-8'>
							Begin your science-backed journey to a more
							fulfilling relationship today.
						</p>
						<Link href='/contact'>
							<motion.button
								className='bg-white text-black font-poppins font-bold py-3 px-8 rounded-full inline-flex items-center text-lg shadow-lg'
								whileHover={{
									scale: 1.05,
									boxShadow:
										'0px 10px 20px rgba(255, 255, 255, 0.2)',
								}}
								whileTap={{ scale: 0.95 }}
							>
								<Sparkles className='w-5 h-5 mr-2 text-pink-400' />
								Get Started
							</motion.button>
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
