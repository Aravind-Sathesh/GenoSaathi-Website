'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Lock, Unlock, Save, FilePlus, Edit, LoaderCircle } from 'lucide-react';

export default function EditBlogPage() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [password, setPassword] = useState('');

	const [allBlogs, setAllBlogs] = useState([]);
	const [selectedBlogId, setSelectedBlogId] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const emptyPost = {
		title: '',
		author: '',
		slug: '',
		excerpt: '',
		content: '',
		tags: '',
		source: '',
	};
	const [post, setPost] = useState(emptyPost);

	useEffect(() => {
		const fetchBlogList = async () => {
			try {
				const res = await fetch('/api/blogs');
				const data = await res.json();
				setAllBlogs(data);
			} catch (err) {
				console.error('Failed to fetch blog list', err);
			}
		};
		fetchBlogList();
	}, []);

	const handleLogin = (e) => {
		e.preventDefault();
		if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD_FOR_CLIENT) {
			setIsAuthenticated(true);
			setError('');
		} else {
			setError('Please enter the admin password.');
		}
	};

	const handleBlogSelect = (e) => {
		const blogId = e.target.value;
		setSelectedBlogId(blogId);

		if (blogId) {
			const blogToEdit = allBlogs.find((b) => b.id.toString() === blogId);
			setPost({
				...blogToEdit,
				tags: Array.isArray(blogToEdit.tags)
					? blogToEdit.tags.join(', ')
					: '',
			});
		} else {
			setPost(emptyPost);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setPost((prev) => ({ ...prev, [name]: value }));
	};

	const handleSave = async () => {
		setIsLoading(true);
		setError('');
		setSuccessMessage('');

		const isEditing = !!selectedBlogId;
		const method = isEditing ? 'PUT' : 'POST';

		const postData = {
			...post,
			tags: post.tags
				.split(',')
				.map((tag) => tag.trim())
				.filter(Boolean),
		};

		const body = isEditing
			? JSON.stringify({ password, postId: selectedBlogId, postData })
			: JSON.stringify({ password, postData });

		try {
			const res = await fetch('/api/admin/blogs', {
				method,
				headers: { 'Content-Type': 'application/json' },
				body,
			});

			if (!res.ok) {
				const errData = await res.json();
				throw new Error(
					errData.error ||
						`Failed to ${isEditing ? 'update' : 'create'} post.`
				);
			}

			const updatedPost = await res.json();
			setSuccessMessage(
				`Post successfully ${isEditing ? 'updated' : 'created'}!`
			);

			if (!isEditing) {
				setAllBlogs((prev) => [...prev, updatedPost]);
			} else {
				setAllBlogs((prev) =>
					prev.map((b) => (b.id === updatedPost.id ? updatedPost : b))
				);
			}
			setSelectedBlogId('');
			setPost(emptyPost);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	if (!isAuthenticated) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='min-h-screen flex items-center justify-center bg-gray-100 text-gray-900'
			>
				<div className='w-full max-w-sm p-8 space-y-6 bg-white rounded-3xl shadow-2xl'>
					<div className='text-center'>
						<Lock className='mx-auto w-12 h-12 text-pink-400' />
						<h1 className='text-2xl font-bold font-poppins text-gray-900 mt-4'>
							Admin Access
						</h1>
						<p className='text-sm text-gray-500'>
							Enter password to manage blog content.
						</p>
					</div>
					<form onSubmit={handleLogin} className='space-y-4'>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Password'
							className='w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-50 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition'
						/>
						{error && (
							<p className='text-sm text-red-600 text-center'>
								{error}
							</p>
						)}
						<button
							type='submit'
							className='w-full flex justify-center items-center font-bold text-white bg-pink-500 hover:bg-pink-600 py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
						>
							<Unlock className='w-4 h-4 mr-2' />
							Unlock Editor
						</button>
					</form>
				</div>
			</motion.div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-100 text-gray-900 p-4 sm:p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4'>
					<h1 className='text-4xl font-bold font-poppins text-gray-900'>
						Blog Editor
					</h1>
					<div className='flex items-center gap-4'>
						<select
							onChange={handleBlogSelect}
							value={selectedBlogId}
							className='p-3 border border-gray-300 rounded-md bg-white focus:ring-pink-500 focus:border-pink-500'
						>
							<option value=''>-- Create New Post --</option>
							{allBlogs.map((blog) => (
								<option key={blog.id} value={blog.id}>
									{blog.title}
								</option>
							))}
						</select>
						<button
							onClick={() => {
								setSelectedBlogId('');
								setPost(emptyPost);
							}}
							className='p-3 bg-gray-200 hover:bg-gray-300 rounded-md'
							title='Clear Form'
						>
							<FilePlus className='w-5 h-5' />
						</button>
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* Form Input Side */}
					<div className='space-y-4 p-8 bg-white rounded-3xl shadow-xl'>
						<h2 className='text-2xl font-poppins font-bold text-gray-800 flex items-center'>
							{selectedBlogId ? (
								<Edit className='w-6 h-6 mr-3 text-pink-500' />
							) : (
								<FilePlus className='w-6 h-6 mr-3 text-pink-500' />
							)}
							{selectedBlogId
								? 'Editing Post'
								: 'Creating New Post'}
						</h2>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<input
								name='title'
								value={post.title}
								onChange={handleInputChange}
								placeholder='Title'
								className='w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 bg-gray-50'
							/>
							<input
								name='author'
								value={post.author}
								onChange={handleInputChange}
								placeholder='Author'
								className='w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 bg-gray-50'
							/>
						</div>
						<input
							name='slug'
							value={post.slug}
							onChange={handleInputChange}
							placeholder='URL Slug (e.g., my-new-post)'
							className='w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 bg-gray-50'
						/>
						<textarea
							name='excerpt'
							value={post.excerpt}
							onChange={handleInputChange}
							placeholder='Short excerpt for blog card'
							className='w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 bg-gray-50'
							rows={3}
						></textarea>

						<textarea
							name='content'
							value={post.content}
							onChange={handleInputChange}
							placeholder='Write your blog post here in Markdown...'
							className='w-full p-3 border border-gray-300 rounded-md font-mono text-sm bg-gray-50'
							rows={15}
						/>

						<input
							name='tags'
							value={post.tags}
							onChange={handleInputChange}
							placeholder='Tags (comma-separated, e.g., AI, Health)'
							className='w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 bg-gray-50'
						/>
						<input
							name='source'
							value={post.source}
							onChange={handleInputChange}
							placeholder='Source (Optional)'
							className='w-full p-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 bg-gray-50'
						/>

						{error && (
							<p className='text-sm text-red-600 p-3 bg-red-100 rounded-md'>
								{error}
							</p>
						)}
						{successMessage && (
							<p className='text-sm text-green-700 p-3 bg-green-100 rounded-md'>
								{successMessage}
							</p>
						)}

						<button
							onClick={handleSave}
							disabled={isLoading}
							className='w-full flex justify-center items-center font-bold text-white bg-green-600 hover:bg-green-700 py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
						>
							{isLoading ? (
								<LoaderCircle className='w-5 h-5 animate-spin' />
							) : (
								<Save className='w-5 h-5 mr-2' />
							)}
							{isLoading
								? 'Saving...'
								: selectedBlogId
								? 'Update Post'
								: 'Create Post'}
						</button>
					</div>

					{/* Markdown Preview Side */}
					<div className='sticky top-8 p-8 bg-white rounded-3xl shadow-xl'>
						<h2 className='text-2xl font-poppins font-bold border-b border-gray-200 pb-3 mb-4 text-gray-800'>
							Live Preview
						</h2>
						<article className='prose prose-lg max-w-none prose-pink prose-headings:font-poppins'>
							<ReactMarkdown>{`# ${
								post.title || 'Your Title Here'
							}\n\n${post.content}`}</ReactMarkdown>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
}
