import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
	weight: ['400', '500', '700'],
});

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
	title: 'GenoSaathi',
	description: 'GenoSaathi Official Website',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${inter.variable} ${poppins.variable} antialiased`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
