'use client';

import {
	Heart,
	Users,
	Shield,
	Zap,
	Facebook,
	Twitter,
	Linkedin,
	ChevronDown,
	Sparkles,
	Dna,
} from 'lucide-react';
import Image from 'next/image';

import StackedCardTestimonials from './components/StackedCardTestimonials';

import teamMembersData from './data/teamMembers.json';
import testimonialsData from './data/testimonials.json';
import stepsData from './data/howItWorksSteps.json';

const iconMap = {
	Shield,
	Zap,
	Users,
	Heart,
};

const socialIconMap = {
	Facebook,
	Twitter,
	Linkedin,
};

const FloatingElement = ({ children, delay = 0 }) => {
	return (
		<div
			className='animate-pulse'
			style={{
				animationDelay: `${delay}s`,
				animationDuration: '3s',
				animationIterationCount: 'infinite',
			}}
		>
			{children}
		</div>
	);
};

export default function HomePage() {
	return (
		<div className='min-h-screen relative overflow-hidden bg-[#EEEEEE] text-[#222222]'>
			<div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
				<FloatingElement delay={0}>
					<div
						className='absolute top-20 left-10 w-20 h-20 rounded-full opacity-10'
						style={{ background: '#FCCFE8' }}
					></div>
				</FloatingElement>
				<FloatingElement delay={1}>
					<div
						className='absolute top-40 right-20 w-16 h-16 rounded-full opacity-10'
						style={{ background: '#FCCFE8' }}
					></div>
				</FloatingElement>
				<FloatingElement delay={2}>
					<div
						className='absolute bottom-40 left-1/4 w-12 h-12 rounded-full opacity-10'
						style={{ background: '#FCCFE8' }}
					></div>
				</FloatingElement>
			</div>

			<div
				className='relative overflow-hidden'
				style={{
					background:
						'linear-gradient(135deg, #FCCFE8 0%, #EEEEEE 50%, #ffffff 100%)',
				}}
			>
				<div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20'></div>
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2730%22%20cy=%2730%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
				<Dna
					className='w-24 h-24 text-pink-300 animate-spin absolute top-20 right-20 opacity-20'
					style={{ animationDuration: '20s' }}
				/>
				<Sparkles className='w-16 h-16 text-pink-300 animate-pulse absolute bottom-20 left-20 opacity-20' />

				<div className='relative max-w-7xl mx-auto px-4 py-32 sm:py-40'>
					<div className='text-center'>
						<div
							className='inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 overflow-hidden shadow-2xl transform hover:scale-110 transition-transform duration-500'
							style={{
								background:
									'linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)',
								boxShadow:
									'0 25px 50px -12px rgba(252, 207, 232, 0.5)',
							}}
						>
							<Image
								src='/logo.jpeg'
								alt='GenoSaathi Logo'
								width={80}
								height={80}
								className='object-contain rounded-2xl'
							/>
						</div>
						<h1
							className='text-6xl sm:text-7xl font-bold mb-8 leading-tight text-black'
							style={{ textShadow: '0 4px 8px rgba(0,0,0,0.05)' }}
						>
							GenoSaathi
						</h1>
						<p className='text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium text-neutral-700'>
							Revolutionary genetic compatibility matching for
							deeper, more meaningful relationships.
						</p>
					</div>

					<div
						className='grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto'
						id='about'
					>
						<div
							className='group cursor-pointer'
							style={{ willChange: 'transform, box-shadow' }}
						>
							<div
								className='p-10 rounded-[2rem] border-2 h-full transition-all duration-500 hover:scale-102 hover:rotate-1 relative overflow-hidden'
								style={{
									background:
										'linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)',
									borderColor: 'transparent',
									boxShadow:
										'0 20px 40px -12px rgba(252, 207, 232, 0.4)',
								}}
							>
								<div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent'></div>
								<div className='relative'>
									<div
										className='w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500'
										style={{
											background:
												'linear-gradient(135deg, #ffffff 0%, #EEEEEE 100%)',
											boxShadow:
												'0 10px 20px rgba(0,0,0,0.1)',
										}}
									>
										<Zap className='w-10 h-10 text-pink-400' />
									</div>
									<h3 className='text-3xl font-bold mb-6'>
										Our Vision
									</h3>
									<p className='text-lg leading-relaxed font-medium'>
										We envision a world where finding love
										is a science-backed journey. We aim to
										raise awareness about genetic health to
										improve everyone's quality of life and
										create lasting, compatible
										relationships.
									</p>
								</div>
							</div>
						</div>
						<div
							className='group cursor-pointer'
							style={{ willChange: 'transform, box-shadow' }}
						>
							<div
								className='p-10 rounded-[2rem] border-2 h-full transition-all duration-500 hover:scale-102 hover:-rotate-1 relative overflow-hidden'
								style={{
									background:
										'linear-gradient(135deg, #ffffff 0%, #EEEEEE 100%)',
									borderColor: '#FCCFE8',
									boxShadow:
										'0 20px 40px -12px rgba(34, 34, 34, 0.1)',
								}}
							>
								<div className='absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent'></div>
								<div className='relative'>
									<div
										className='w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transform group-hover:-rotate-12 transition-transform duration-500'
										style={{
											background:
												'linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)',
											boxShadow:
												'0 10px 20px rgba(252, 207, 232, 0.3)',
										}}
									>
										<Heart className='w-10 h-10 text-neutral-800' />
									</div>
									<h3 className='text-3xl font-bold mb-6'>
										Our Mission
									</h3>
									<p className='text-lg leading-relaxed font-medium'>
										Creating healthier and more fulfilling
										relationships through genetic
										compatibility matching. We provide
										comprehensive support and guidance
										throughout your journey to find your
										perfect match.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='py-24 relative' id='how-it-works'>
						<div className='max-w-5xl mx-auto'>
							<div className='text-center mb-20'>
								<h2 className='text-5xl font-bold mb-6'>
									How It Works
								</h2>
								<p className='text-xl max-w-3xl mx-auto font-medium text-neutral-600'>
									Our scientifically-proven process makes
									finding your compatible partner simple and
									reliable
								</p>
								<div
									className='w-24 h-1 mx-auto mt-8 rounded-full'
									style={{ background: '#FCCFE8' }}
								></div>
							</div>

							<div className='space-y-12'>
								{stepsData.map((step, idx) => {
									const IconComponent = iconMap[step.icon];
									return (
										<div
											key={step.title}
											className='relative group'
										>
											<div className='flex items-start space-x-8 cursor-pointer'>
												<div className='flex-shrink-0 relative'>
													<div
														className='flex items-center justify-center w-20 h-20 rounded-3xl transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6 bg-[#FCCFE8] group-hover:bg-gradient-to-br from-[#FCCFE8] to-white'
														style={{
															boxShadow:
																'0 8px 15px rgba(252, 207, 232, 0.25)',
														}}
													>
														<IconComponent className='w-10 h-10 text-neutral-800' />
													</div>
													<div
														className='absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white'
														style={{
															background:
																'#222222',
														}}
													>
														{idx + 1}
													</div>
												</div>
												<div
													className='flex-1 p-10 rounded-[2rem] border-2 transition-all duration-500 ease-in-out group-hover:scale-[1.01] group-hover:-translate-y-1 bg-white group-hover:bg-gradient-to-br from-white to-[#fdeaf1] border-[rgba(252,207,232,0.3)] group-hover:border-[#FCCFE8]'
													style={{
														boxShadow:
															'0 10px 20px rgba(0,0,0,0.05)',
														willChange:
															'transform, box-shadow, background, border-color',
													}}
												>
													<div className='text-sm font-bold mb-3 tracking-wider uppercase text-pink-400 group-hover:text-neutral-800 transition-colors duration-300'>
														Step {idx + 1}
													</div>
													<h3 className='text-3xl font-bold mb-4'>
														{step.title}
													</h3>
													<p className='text-lg leading-relaxed font-medium text-neutral-600'>
														{step.desc}
													</p>
												</div>
											</div>
											{idx < stepsData.length - 1 && (
												<div className='flex justify-center my-8'>
													<div className='flex flex-col items-center'>
														<ChevronDown
															className='w-8 h-8 animate-bounce'
															style={{
																color: '#FCCFE8',
															}}
														/>
													</div>
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className='py-24 relative'
				style={{
					background:
						'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)',
				}}
			>
				<div className='relative max-w-7xl mx-auto px-4'>
					<div className='text-center mb-20'>
						<h2 className='text-5xl font-bold mb-6'>
							Success Stories
						</h2>
						<p className='text-xl font-medium text-neutral-700'>
							Real people, real connections, real happiness
						</p>
						<div
							className='w-24 h-1 mx-auto mt-8 rounded-full'
							style={{ background: '#FCCFE8' }}
						></div>
					</div>
					<div className='flex justify-center'>
						<StackedCardTestimonials
							testimonials={testimonialsData}
						/>
					</div>
				</div>
			</div>

			<div
				className='py-24'
				style={{
					background:
						'linear-gradient(180deg, #ffffff 0%, #EEEEEE 100%)',
				}}
			>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='text-center mb-20'>
						<h2 className='text-5xl font-bold mb-6'>
							Meet Our Founders
						</h2>
						<p className='text-xl max-w-4xl mx-auto font-medium text-neutral-600'>
							Pioneering the future of relationships through
							cutting-edge genetic science and innovative
							technology
						</p>
						<div
							className='w-24 h-1 mx-auto mt-8 rounded-full'
							style={{ background: '#FCCFE8' }}
						></div>
					</div>
					<div className='grid md:grid-cols-2 gap-16 max-w-5xl mx-auto'>
						{teamMembersData.map((member) => (
							<div
								key={member.name}
								className='group cursor-pointer'
								style={{ willChange: 'transform, box-shadow' }}
							>
								<div
									className='p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-102 relative overflow-hidden'
									style={{
										background:
											'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
										boxShadow:
											'0 20px 40px rgba(0,0,0,0.1)',
									}}
								>
									<div
										className='absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16'
										style={{ background: '#FCCFE8' }}
									></div>
									<div className='relative mb-8 text-center'>
										<div className='relative inline-block'>
											<Image
												src={member.img}
												alt={member.name}
												width={160}
												height={192}
												className='w-40 h-48 object-cover rounded-3xl mx-auto ring-4 group-hover:ring-8 transition-all duration-500 shadow-xl'
												style={{
													borderColor: '#FCCFE8',
												}}
											/>
											<div
												className='absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg'
												style={{
													background: '#FCCFE8',
												}}
											>
												<Users className='w-6 h-6 text-neutral-800' />
											</div>
										</div>
									</div>
									<div className='text-center'>
										<h3 className='text-3xl font-bold mb-3'>
											{member.name}
										</h3>
										<p
											className='font-bold text-lg mb-6 px-4 py-2 rounded-full inline-block text-white'
											style={{
												background: '#FCCFE8',
											}}
										>
											{member.role}
										</p>
										<p className='leading-relaxed mb-8 font-medium text-lg text-neutral-600'>
											{member.bio}
										</p>
										<div className='flex justify-center space-x-6'>
											{member.socials.map((social) => {
												const IconComponent =
													socialIconMap[social.icon];
												return (
													<a
														key={social.type}
														href={social.url}
														target='_blank'
														rel='noopener noreferrer'
														className='w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-translate-y-1 shadow-lg hover:shadow-xl'
														style={{
															background:
																'linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)',
															boxShadow:
																'0 5px 15px rgba(252, 207, 232, 0.3)',
														}}
													>
														<IconComponent className='w-6 h-6 text-neutral-800' />
													</a>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
