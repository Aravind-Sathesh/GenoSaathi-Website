import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900'>
			<div className='max-w-md mx-auto text-center px-6'>
				<div className='mb-8'>
					<h1 className='text-9xl font-bold text-pink-200 mb-4'>
						404
					</h1>
					<div className='w-24 h-1 bg-pink-200 mx-auto mb-6'></div>
					<h2 className='text-2xl font-semibold text-white mb-4'>
						Page Not Found
					</h2>
					<p className='text-gray-300 mb-8'>
						The genetic sequence you're looking for doesn't exist in
						our database.
					</p>
				</div>

				<div className='space-y-4'>
					<Link
						href='/'
						className='inline-block bg-pink-200 text-black px-6 py-3 rounded-lg hover:bg-pink-300 transition-colors font-medium'
					>
						Return to Home
					</Link>
					<div className='text-sm text-gray-400'>
						or explore our{' '}
						<Link
							href='/services'
							className='text-pink-200 hover:underline'
						>
							services
						</Link>
					</div>
				</div>

				<div className='mt-12 text-xs text-gray-500'>
					GenoSaathi - Unlocking Love's Genetic Potential
				</div>
			</div>
		</div>
	);
}
