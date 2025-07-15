'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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

	return (
		<div className='min-h-screen bg-[#EEEEEE] text-[#222222] font-inter'>
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='relative overflow-hidden py-24 sm:py-32'
				style={{
					background:
						'linear-gradient(135deg, #ffffff 0%, #FCCFE8 100%)',
				}}
			>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className='relative max-w-7xl mx-auto px-4 text-center z-10'
				>
					<motion.h1
						variants={itemVariants}
						className='font-poppins text-5xl sm:text-6xl font-bold mb-4 text-[#222222]'
						style={{ textShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
					>
						Get in Touch
					</motion.h1>
					<motion.p
						variants={itemVariants}
						className='font-inter text-lg sm:text-xl max-w-3xl mx-auto text-[#555555]'
					>
						We'd love to hear from you. Send us a message and we'll
						respond as soon as possible.
					</motion.p>
				</motion.div>
			</motion.section>

			{/* Main Content */}
			<main className='py-20 sm:py-24'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.1 }}
					className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'
				>
					{/* Contact Form */}
					<motion.div
						variants={itemVariants}
						className='lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-full flex flex-col'
					>
						<h2 className='font-poppins text-3xl font-bold text-[#222222] mb-6'>
							Send Us a Message
						</h2>
						<div className='h-1 w-20 bg-[#FCCFE8] mb-8 rounded-full'></div>
						<form className='space-y-6'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block font-inter text-sm font-semibold text-gray-700 mb-2'
									>
										Full Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										placeholder='Jane Doe'
										className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:border-pink-300 font-inter text-[#222222] bg-gray-50'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block font-inter text-sm font-semibold text-gray-700 mb-2'
									>
										Email Address
									</label>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='jane.doe@example.com'
										required
										className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:border-pink-300 font-inter text-[#222222] bg-gray-50'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='subject'
									className='block font-inter text-sm font-semibold text-gray-700 mb-2'
								>
									Subject
								</label>
								<textarea
									rows={2}
									type='text'
									id='subject'
									name='subject'
									placeholder='Regarding our services...'
									className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:border-pink-300 font-inter text-[#222222] bg-gray-50'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block font-inter text-sm font-semibold text-gray-700 mb-2'
								>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									rows={6}
									placeholder='Write your message here...'
									className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:border-pink-300 resize-none font-inter text-[#222222] bg-gray-50'
								></textarea>
							</div>
							<motion.button
								type='submit'
								whileHover={{ scale: 1.0125 }}
								whileTap={{ scale: 0.98 }}
								className='w-full bg-[#FCCFE8] text-[#222222] font-poppins font-bold py-4 px-8 rounded-xl hover:shadow-lg transform transition-all duration-300 flex items-center justify-center space-x-2 border border-pink-200'
							>
								<span>Send Message</span>
								<Send className='w-5 h-5' />
							</motion.button>
						</form>
					</motion.div>

          {/* Contact Info */}
          <div className='flex flex-col gap-8 h-full'>
            <motion.div
              variants={itemVariants}
              className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex items-center space-x-4'
            >
              <div className='bg-[#FCCFE8] p-3 rounded-full shadow-lg flex-shrink-0'>
                <Phone className='w-6 h-6 text-[#222222]' />
              </div>
              <div>
                <h3 className='font-poppins text-xl font-semibold text-[#222222]'>
                  Phone
                </h3>
                <Link
                  href='tel:+967XXXX320'
                  className='font-inter text-[#555555] text-lg hover:text-[#d64a8b] transition-colors'
                >
                  +91 967XXXX320
                </Link>
              </div>
            </motion.div>

						<motion.div
							variants={itemVariants}
							className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex items-center space-x-4'
						>
							<div className='bg-[#FCCFE8] p-3 rounded-full shadow-lg flex-shrink-0'>
								<Mail className='w-6 h-6 text-[#222222]' />
							</div>
							<div>
								<h3 className='font-poppins text-xl font-semibold text-[#222222]'>
									Email
								</h3>
								<Link
									href='mailto:genosaathi@gmail.com'
									className='font-inter text-[#555555] text-lg hover:text-[#d64a8b] transition-colors'
								>
									genosaathi@gmail.com
								</Link>
							</div>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100'
						>
							<div className='flex items-start space-x-4'>
								<div className='bg-[#FCCFE8] p-3 rounded-full shadow-lg flex-shrink-0'>
									<MapPin className='w-6 h-6 text-[#222222]' />
								</div>
								<div>
									<h3 className='font-poppins text-xl font-semibold text-[#222222]'>
										Address
									</h3>
									<Link
										href='https://maps.google.com/maps?ll=28.363574,75.587451&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=2286371793580034125'
										className='font-inter text-[#555555] text-lg hover:text-[#d64a8b] transition-colors'
									>
										BITS Pilani, Pilani Campus
										<br />
										Rajasthan, India 333031
									</Link>
								</div>
							</div>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex-grow'
						>
							<div className='flex items-start space-x-4'>
								<div className='bg-[#FCCFE8] p-3 rounded-full shadow-lg flex-shrink-0'>
									<Clock className='w-6 h-6 text-[#222222]' />
								</div>
								<div className='flex flex-col'>
									<h3 className='font-poppins text-xl font-semibold text-[#222222] mb-1'>
										Hours
									</h3>
									<p className='font-inter text-[#555555] text-lg leading-relaxed'>
										Mon - Fri: 9am - 5pm
										<br />
										Saturday: 10am - 3pm
										<br />
										Sunday: Closed
									</p>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Map */}
					<motion.div
						variants={itemVariants}
						className='lg:col-span-3 rounded-3xl overflow-hidden shadow-2xl border border-gray-200'
					>
						<div className='w-full h-[300px] sm:h-[400px] lg:h-[500px]'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7022.010161698171!2d75.587808!3d28.358696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131964f43e4575%3A0x1fbad30854cf884d!2sBirla%20Institute%20of%20Technology%20And%20Science%20-%20Pilani!5e0!3m2!1sen!2sin!4v1751958258607!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
								width='100%'
								height='100%'
								style={{ border: 0 }}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='BITS Pilani Campus Location'
							></iframe>
						</div>
					</motion.div>
				</motion.div>
			</main>
		</div>
	);
}
