'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, Tag, LoaderCircle, AlertTriangle } from 'lucide-react';

export default function BlogPostPage() {
	const [post, setPost] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const params = useParams();
	const { slug } = params;

	useEffect(() => {
		if (slug) {
			const fetchPost = async () => {
				try {
					const res = await fetch(`/api/blogs/${slug}`);
					if (!res.ok) {
						throw new Error('Post not found.');
					}
					const data = await res.json();
					setPost(data);
				} catch (err) {
					setError(err.message);
				} finally {
					setIsLoading(false);
				}
			};
			fetchPost();
		}
	}, [slug]);

	if (isLoading) {
		return (
			<div className='min-h-screen flex items-center justify-center bg-[#EEEEEE]'>
				<LoaderCircle className='w-16 h-16 animate-spin text-[#d64a8b]' />
			</div>
		);
	}

	if (error) {
		return (
			<div className='min-h-screen flex flex-col items-center justify-center bg-[#EEEEEE] text-center'>
				<AlertTriangle className='w-16 h-16 text-red-500 mb-4' />
				<h1 className='text-3xl font-bold font-poppins text-[#222222]'>
					Post Not Found
				</h1>
				<p className='text-[#555555] mt-2'>{error}</p>
			</div>
		);
	}

	return (
		<div className='bg-[#EEEEEE] text-[#222222] font-sans'>
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='py-20 sm:py-28 text-center px-4'
				style={{
					background:
						'linear-gradient(135deg, #ffffff 0%, #FCCFE8 100%)',
				}}
			>
				<h1 className='text-4xl md:text-6xl font-bold font-poppins mb-4 text-[#222222]'>
					{post.title}
				</h1>
				<div className='flex justify-center items-center space-x-6 text-sm text-[#555555] mt-6'>
					<span className='flex items-center'>
						<Calendar className='w-4 h-4 mr-2' />{' '}
						{new Date(post.created_at).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</span>
					<span className='flex items-center'>
						<User className='w-4 h-4 mr-2' /> {post.author}
					</span>
				</div>
			</motion.div>

			{/* Main Content */}
			<div className='max-w-4xl mx-auto px-4 py-16 sm:py-24'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<article className='prose prose-lg max-w-none prose-pink prose-headings:font-poppins prose-headings:text-[#222222] prose-p:text-[#555555] prose-a:text-[#d64a8b] prose-strong:text-[#222222]'>
						<ReactMarkdown>{post.content}</ReactMarkdown>
					</article>

					{/* Tags and Source */}
					<div className='mt-12 pt-8 border-t border-[#DD9EC8]'>
						{post.tags && (
							<div className='mb-6'>
								<h3 className='flex items-center text-lg font-bold font-poppins mb-3'>
									<Tag className='w-5 h-5 mr-2 text-[#d64a8b]' />{' '}
									Tags
								</h3>
								<div className='flex flex-wrap gap-2'>
									{post.tags.map((tag) => (
										<span
											key={tag}
											className='bg-[#FCCFE8] text-[#d64a8b] text-xs font-semibold px-3 py-1 rounded-full'
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						)}
						{post.source && (
							<div>
								<h3 className='text-lg font-bold font-poppins mb-2'>
									Source
								</h3>
								<div className='flex flex-col gap-1'>
									{post.source
										.split(/[\s,]+/)
										.filter(Boolean)
										.map((src, idx) => {
											const isURL =
												src.startsWith('http://') ||
												src.startsWith('https://');
											const displayText = isURL
												? src
														.replace(
															/^https?:\/\//,
															''
														)
														.split('/')[0]
												: src;

											return isURL ? (
												<a
													key={idx}
													href={src}
													rel='noopener noreferrer'
													target='_blank'
													className='text-sm text-[#d64a8b] underline italic'
												>
													{displayText}
												</a>
											) : (
												<p
													key={idx}
													className='text-sm text-[#d64a8b] italic'
												>
													{displayText}
												</p>
											);
										})}
								</div>
							</div>
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
