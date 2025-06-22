'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';

export default function StackedCardTestimonials({ testimonials }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const intervalRef = useRef(null);

	const startRotation = () => {
		if (intervalRef.current) clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			setActiveIndex(
				(prevIndex) => (prevIndex + 1) % testimonials.length
			);
		}, 5000);
	};

	const stopRotation = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	};

	useEffect(() => {
		startRotation();

		return () => stopRotation();
	}, [testimonials.length]);

	const getCardStyle = (index) => {
		const offset =
			(activeIndex - index + testimonials.length) % testimonials.length;

		if (offset === 0) {
			return { y: 0, scale: 1, zIndex: 3, opacity: 1 };
		} else if (offset === testimonials.length - 1) {
			return { y: -30, scale: 0.9, zIndex: 2, opacity: 0.7 };
		} else if (offset === testimonials.length - 2) {
			return { y: -60, scale: 0.8, zIndex: 1, opacity: 0.4 };
		} else {
			return { y: -90, scale: 0.7, zIndex: 0, opacity: 0 };
		}
	};

	return (
		<div
			className='relative flex flex-col items-center w-full'
			onMouseEnter={stopRotation}
			onMouseLeave={startRotation}
		>
			{/* The container for the stacked cards */}
			<div className='relative w-full max-w-xl h-[350px] md:h-[300px]'>
				{testimonials.map((testimonial, index) => (
					<motion.div
						key={index}
						className='absolute w-full'
						initial={false}
						animate={getCardStyle(index)}
						transition={{
							type: 'spring',
							stiffness: 200,
							damping: 30,
						}}
						style={{ willChange: 'transform, opacity' }}
					>
						<div
							className='p-8 md:p-12 rounded-[2rem] relative overflow-hidden h-full'
							style={{
								background:
									'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
								boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
							}}
						>
							<div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-neutral-800'></div>
							<div className='flex items-center mb-6'>
								<div className='relative flex-shrink-0'>
									<Image
										src={testimonial.img}
										alt={testimonial.name}
										width={64}
										height={64}
										className='w-16 h-16 rounded-2xl object-cover ring-4 ring-pink-300 shadow-lg'
									/>
									<div className='absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center bg-pink-300'>
										<Heart className='w-4 h-4 text-white' />
									</div>
								</div>
								<div className='ml-4'>
									<h4 className='text-lg font-bold text-neutral-800'>
										{testimonial.name}
									</h4>
									<p className='font-semibold text-md text-pink-500'>
										{testimonial.role}
									</p>
								</div>
							</div>
							<blockquote className='text-lg italic leading-relaxed text-neutral-600 relative'>
								<span className='text-5xl absolute -top-4 -left-2 opacity-10 text-pink-400'>
									"
								</span>
								{testimonial.text}
							</blockquote>
						</div>
					</motion.div>
				))}
			</div>

			{/* Navigation Dots */}
			<div className='flex space-x-3 mt-8'>
				{testimonials.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${
							activeIndex === index
								? 'bg-pink-500 scale-125'
								: 'bg-pink-200 hover:bg-pink-300'
						}`}
						aria-label={`Go to testimonial ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
