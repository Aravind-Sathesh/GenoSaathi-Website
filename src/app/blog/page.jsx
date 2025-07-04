'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, LoaderCircle, Search } from 'lucide-react';

export default function BlogPage() {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredBlogs, setFilteredBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await fetch('/api/blogs');
				if (!res.ok) {
					throw new Error('Failed to fetch blog posts.');
				}
				const data = await res.json();
				setBlogs(data);
				setFilteredBlogs(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchBlogs();
	}, []);

	useEffect(() => {
		const results = blogs.filter(
			(blog) =>
				blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
				(blog.tags &&
					blog.tags.some((tag) =>
						tag.toLowerCase().includes(searchTerm.toLowerCase())
					))
		);
		setFilteredBlogs(results);
	}, [searchTerm, blogs]);

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
		<div className='min-h-screen bg-[#EEEEEE] text-[#222222] font-sans'>
			{/* Page Header */}
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
				<div className='relative max-w-7xl mx-auto px-4 text-center'>
					<motion.h1
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className='text-5xl sm:text-6xl font-bold font-poppins mb-4 text-[#222222]'
					>
						GenoSaathi Insights
					</motion.h1>
					<motion.p
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='text-lg sm:text-xl max-w-3xl mx-auto text-[#555555]'
					>
						Explore the latest in genetic science, relationship
						insights, and company news.
					</motion.p>
				</div>
			</motion.div>

			<div className='py-12 px-4'>
				<div className='max-w-xl mx-auto'>
					<div className='relative'>
						<input
							type='text'
							placeholder='Search articles by title, content, or tag...'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full bg-white text-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition'
						/>
						<Search className='absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' />
					</div>
				</div>
			</div>

			{/* Blog Grid */}
			<div className='pb-24 px-4'>
				<div className='max-w-7xl mx-auto'>
					{isLoading ? (
						<div className='flex justify-center items-center h-40'>
							<LoaderCircle className='w-12 h-12 animate-spin text-[#d64a8b]' />
						</div>
					) : error ? (
						<div className='text-center text-red-500'>
							<p>Error: {error}</p>
						</div>
					) : (
						<motion.div
							className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
							variants={containerVariants}
							initial='hidden'
							animate='visible'
						>
							{filteredBlogs.length > 0 ? (
								filteredBlogs.map((blog) => (
									<motion.div
										key={blog.id}
										variants={itemVariants}
										className='group'
									>
										<Link
											href={`/blog/${blog.slug}`}
											className='h-full'
										>
											<div
												className='h-full flex flex-col rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
												style={{
													background: '#ffffff',
													boxShadow:
														'0 20px 40px rgba(0,0,0,0.07)',
												}}
											>
												<div className='p-6 flex flex-col flex-grow'>
													{blog.tags &&
														Array.isArray(
															blog.tags
														) &&
														blog.tags.length >
															0 && (
															<div className='flex flex-wrap gap-2 mb-4'>
																{blog.tags
																	.slice(0, 3)
																	.map(
																		(
																			tag
																		) => (
																			<span
																				key={
																					tag
																				}
																				className='bg-[#FCCFE8] text-[#d64a8b] text-xs font-semibold px-2.5 py-1 rounded-full'
																			>
																				{
																					tag
																				}
																			</span>
																		)
																	)}
															</div>
														)}

													<h3 className='text-xl font-bold font-poppins mb-3 text-[#222222] leading-snug'>
														{blog.title}
													</h3>

													<p className='text-[#555555] leading-relaxed text-sm flex-grow mb-4'>
														{blog.excerpt}
													</p>

													<div className='mt-auto pt-4 border-t border-gray-100 flex justify-between items-center'>
														<div className='flex items-center text-xs text-[#555555] space-x-3'>
															<span className='flex items-center'>
																<Calendar className='w-4 h-4 mr-1.5' />
																{new Date(
																	blog.created_at
																).toLocaleDateString(
																	'en-US',
																	{
																		month: 'short',
																		day: 'numeric',
																		year: 'numeric',
																	}
																)}
															</span>
															<span className='flex items-center'>
																<User className='w-4 h-4 mr-1.5' />
																{blog.author}
															</span>
														</div>
														<span className='font-bold text-[#d64a8b] inline-flex items-center group-hover:text-[#c03974] transition-colors'>
															<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
														</span>
													</div>
												</div>
											</div>
										</Link>
									</motion.div>
								))
							) : (
								<div className='col-span-1 md:col-span-2 lg:col-span-3 text-center text-gray-500 py-16'>
									<h3 className='text-2xl font-poppins'>
										No posts found
									</h3>
									<p>Try adjusting your search term.</p>
								</div>
							)}
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}
