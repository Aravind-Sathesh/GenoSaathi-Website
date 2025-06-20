"use client";
import React, { useState } from "react";
import { Heart, Users, Shield, Zap, Facebook, Twitter, Linkedin, Mail, Phone, ChevronDown, Sparkles, Dna } from "lucide-react";

const teamMembers = [
	{
		name: "Deepti Kaushik",
		role: "Co-Founder & CTO",
		img: "https://genosaathi.com/wp-content/uploads/2025/03/image-1-1.png",
		bio: "Postgraduate in biotechnology and PhD candidate at BITS Pilani. Leading the scientific innovation behind genetic compatibility matching.",
		socials: [
			{ type: "facebook", url: "https://facebook.com", icon: Facebook },
			{ type: "twitter", url: "https://twitter.com", icon: Twitter },
			{ type: "linkedin", url: "https://linkedin.com", icon: Linkedin }
		]
	},
	{
		name: "Vidit Kaushik",
		role: "Co-Founder & CEO",
		img: "https://genosaathi.com/wp-content/uploads/2025/03/image-2.png",
		bio: "M.Sc. in Biological Sciences at BITS Pilani. Bridging the gap between cutting-edge science and meaningful relationships.",
		socials: [
			{ type: "facebook", url: "https://facebook.com", icon: Facebook },
			{ type: "twitter", url: "https://twitter.com", icon: Twitter },
			{ type: "linkedin", url: "https://linkedin.com", icon: Linkedin }
		]
	}
];

const testimonials = [
	{
		name: "Nancy Smith",
		role: "Happy Customer",
		img: "https://genosaathi.com/wp-content/uploads/2025/05/portrait-young-indian-woman-happy-with-internship-human-resources-opportunity-mission-vision-company-va.jpg",
		text: "GenoSaathi was a game-changer! I was matched with someone who shared my values and dreams. We connected instantly and are now building a beautiful life together."
	}
];

const steps = [
	{
		title: "Sample Collection",
		desc: "Simple, convenient sample collection by our certified experts at your preferred location.",
		icon: Shield
	},
	{
		title: "Genetic Analysis",
		desc: "Advanced laboratory analysis using cutting-edge algorithms to assess genetic compatibility.",
		icon: Zap
	},
	{
		title: "Profile Creation",
		desc: "Personalized profile integration combining genetic data with your lifestyle preferences.",
		icon: Users
	},
	{
		title: "Find Your Match",
		desc: "Discover scientifically-compatible partners with detailed compatibility scores and insights.",
		icon: Heart
	}
];

const FloatingElement = ({ children, delay = 0 }) => {
	return (
		<div 
			className="animate-pulse"
			style={{ 
				animationDelay: `${delay}s`,
				animationDuration: '3s',
				animationIterationCount: 'infinite'
			}}
		>
			{children}
		</div>
	);
};

export default function About() {
	const [hoveredStep, setHoveredStep] = useState(null);

	return (
		<div className="min-h-screen relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#EEEEEE" }}>
			{/* Animated Background Elements */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				<FloatingElement delay={0}>
					<div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-10" style={{ background: "#FCCFE8" }}></div>
				</FloatingElement>
				<FloatingElement delay={1}>
					<div className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-10" style={{ background: "#FCCFE8" }}></div>
				</FloatingElement>
				<FloatingElement delay={2}>
					<div className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full opacity-10" style={{ background: "#FCCFE8" }}></div>
				</FloatingElement>
			</div>

			{/* Hero Section */}
			<div
				className="relative overflow-hidden"
				style={{
					background: "linear-gradient(135deg, #FCCFE8 0%, #EEEEEE 50%, #ffffff 100%)",
					color: "#222222",
					fontFamily: "'Poppins', 'Inter', sans-serif"
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20"></div>
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2730%22%20cy=%2730%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
				
				{/* Floating DNA strands */}
				<div className="absolute top-20 right-20 opacity-20">
					<Dna className="w-24 h-24 text-pink-300 animate-spin" style={{ animationDuration: '20s' }} />
				</div>
				<div className="absolute bottom-20 left-20 opacity-20">
					<Sparkles className="w-16 h-16 text-pink-300 animate-pulse" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 py-32 sm:py-40">
					<div className="text-center">
						<div className="mb-12">
							<div
								className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 overflow-hidden shadow-2xl transform hover:scale-110 transition-transform duration-500"
								style={{ 
									background: "linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)",
									boxShadow: "0 25px 50px -12px rgba(252, 207, 232, 0.5)"
								}}
							>
								<img
									src="/logo.jpeg"
									alt="GenoSaathi Logo"
									className="w-20 h-20 object-contain"
								/>
							</div>
							<h1
								className="text-6xl sm:text-7xl font-bold mb-8 leading-tight"
								style={{
									color: "#000000",
									fontFamily: "'Poppins', 'Inter', sans-serif",
									textShadow: "0 4px 8px rgba(0,0,0,0.05)"
								}}
							>
								Welcome to<br />GenoSaathi
							</h1>
							<p className="text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium" style={{ color: "#444444" }}>
								Revolutionary genetic compatibility matching for deeper, more meaningful relationships. 
								
							</p>
						</div>
					</div>
					
					{/* Enhanced Vision & Mission */}
					<div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
						<div className="group cursor-pointer">
							<div
								className="p-10 rounded-[2rem] border-2 h-full transition-all duration-500 hover:scale-105 hover:rotate-1 relative overflow-hidden"
								style={{
									background: "linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)",
									borderColor: "transparent",
									color: "#222222",
									fontFamily: "'Inter', sans-serif",
									boxShadow: "0 20px 40px -12px rgba(252, 207, 232, 0.4)"
								}}
							>
								<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
								<div className="relative">
									<div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500" 
										style={{ 
											background: "linear-gradient(135deg, #ffffff 0%, #EEEEEE 100%)",
											boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
										}}>
										<Zap className="w-10 h-10" style={{ color: "#FCCFE8" }} />
									</div>
									<h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Vision</h3>
									<p className="text-lg leading-relaxed font-medium">
										We envision a world where finding love is a science-backed journey. We aim to raise awareness about genetic health to improve everyone's quality of life and create lasting, compatible relationships.
									</p>
								</div>
							</div>
						</div>
						<div className="group cursor-pointer">
							<div
								className="p-10 rounded-[2rem] border-2 h-full transition-all duration-500 hover:scale-105 hover:-rotate-1 relative overflow-hidden"
								style={{
									background: "linear-gradient(135deg, #ffffff 0%, #EEEEEE 100%)",
									borderColor: "#FCCFE8",
									color: "#222222",
									fontFamily: "'Inter', sans-serif",
									boxShadow: "0 20px 40px -12px rgba(34, 34, 34, 0.1)"
								}}
							>
								<div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent"></div>
								<div className="relative">
									<div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transform group-hover:-rotate-12 transition-transform duration-500" 
										style={{ 
											background: "linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)",
											boxShadow: "0 10px 20px rgba(252, 207, 232, 0.3)"
										}}>
										<Heart className="w-10 h-10" style={{ color: "#222222" }} />
									</div>
									<h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Mission</h3>
									<p className="text-lg leading-relaxed font-medium">
										Creating healthier and more fulfilling relationships through genetic compatibility matching. We provide comprehensive support and guidance throughout your journey to find your perfect match.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* How it Works - Enhanced Vertical Layout */}
			<div className="py-24 relative" style={{ background: "linear-gradient(180deg, #EEEEEE 0%, #ffffff 100%)" }}>
				<div className="max-w-5xl mx-auto px-4">
					<div className="text-center mb-20">
						<h2 className="text-5xl font-bold mb-6" style={{ color: "#222222", fontFamily: "'Poppins', sans-serif" }}>
							How It Works
						</h2>
						<p className="text-xl max-w-3xl mx-auto font-medium" style={{ color: "#555555" }}>
							Our scientifically-proven process makes finding your compatible partner simple and reliable
						</p>
						<div className="w-24 h-1 mx-auto mt-8 rounded-full" style={{ background: "#FCCFE8" }}></div>
					</div>
					
					<div className="space-y-12">
						{steps.map((step, idx) => {
							const IconComponent = step.icon;
							const isHovered = hoveredStep === idx;
							return (
								<div key={step.title} className="relative">
									<div 
										className="flex items-start space-x-8 group cursor-pointer"
										onMouseEnter={() => setHoveredStep(idx)}
										onMouseLeave={() => setHoveredStep(null)}
									>
										<div className="flex-shrink-0 relative">
											<div className={`flex items-center justify-center w-20 h-20 rounded-3xl transition-all duration-500 ${isHovered ? 'scale-125 rotate-12' : 'group-hover:scale-110'}`}
												style={{ 
													background: isHovered 
														? "linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)" 
														: "#FCCFE8",
													boxShadow: isHovered 
														? "0 20px 40px rgba(252, 207, 232, 0.6)" 
														: "0 10px 20px rgba(252, 207, 232, 0.3)"
												}}>
												<IconComponent className="w-10 h-10" style={{ color: "#222222" }} />
											</div>
											<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
												style={{ background: "#222222" }}>
												{idx + 1}
											</div>
										</div>
										<div
											className={`flex-1 p-10 rounded-[2rem] border-2 transition-all duration-500 ${isHovered ? 'scale-105 -translate-y-2' : 'hover:scale-102 hover:-translate-y-1'}`}
											style={{
												background: isHovered 
													? "linear-gradient(135deg, #ffffff 0%, #FCCFE8 100%)" 
													: "#ffffff",
												borderColor: isHovered ? "#FCCFE8" : "rgba(252, 207, 232, 0.3)",
												color: "#222222",
												fontFamily: "'Inter', sans-serif",
												boxShadow: isHovered 
													? "0 25px 50px rgba(252, 207, 232, 0.4)" 
													: "0 10px 30px rgba(0,0,0,0.1)"
											}}
										>
											<div className="text-sm font-bold mb-3 tracking-wider uppercase" 
												style={{ color: isHovered ? "#222222" : "#FCCFE8" }}>
												Step {idx + 1}
											</div>
											<h3 className="text-3xl font-bold mb-4" 
												style={{ color: "#222222", fontFamily: "'Poppins', sans-serif" }}>
												{step.title}
											</h3>
											<p className="text-lg leading-relaxed font-medium" style={{ color: "#555555" }}>
												{step.desc}
											</p>
										</div>
									</div>
									{idx < steps.length - 1 && (
										<div className="flex justify-center my-8">
											<div className="flex flex-col items-center">
												<ChevronDown className="w-8 h-8 animate-bounce" style={{ color: "#FCCFE8" }} />
												<div className="w-0.5 h-8 mt-2" style={{ background: "linear-gradient(180deg, #FCCFE8 0%, transparent 100%)" }}></div>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Enhanced Testimonials */}
			<div className="py-24 relative" style={{ background: "linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)" }}>
				<div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/20"></div>
				<div className="relative max-w-7xl mx-auto px-4">
					<div className="text-center mb-20">
						<h2 className="text-5xl font-bold mb-6" style={{ color: "#222222", fontFamily: "'Poppins', sans-serif" }}>
							Success Stories
						</h2>
						<p className="text-xl font-medium" style={{ color: "#444444" }}>Real people, real connections, real happiness</p>
						<div className="w-24 h-1 mx-auto mt-8 rounded-full" style={{ background: "#222222" }}></div>
					</div>
					<div className="flex justify-center">
						{testimonials.map((testimonial) => (
							<div key={testimonial.name} className="max-w-3xl">
								<div
									className="p-12 rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
									style={{ 
										background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)", 
										color: "#222222", 
										fontFamily: "'Inter', sans-serif",
										boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
									}}
								>
									<div className="absolute top-0 left-0 w-full h-2" style={{ background: "linear-gradient(90deg, #FCCFE8 0%, #222222 100%)" }}></div>
									<div className="flex items-center mb-8">
										<div className="relative">
											<img
												src={testimonial.img}
												alt={testimonial.name}
												className="w-20 h-20 rounded-2xl object-cover ring-4 shadow-lg"
												style={{ borderColor: "#FCCFE8" }}
											/>
											<div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
												style={{ background: "#FCCFE8" }}>
												<Heart className="w-4 h-4" style={{ color: "#222222" }} />
											</div>
										</div>
										<div className="ml-6">
											<h4 className="text-xl font-bold" style={{ color: "#222222", fontFamily: "'Poppins', sans-serif" }}>
												{testimonial.name}
											</h4>
											<p className="font-semibold text-lg" style={{ color: "#FCCFE8" }}>
												{testimonial.role}
											</p>
										</div>
									</div>
									<blockquote className="text-xl italic leading-relaxed font-medium relative">
										<span className="text-6xl absolute -top-4 -left-2 opacity-20" style={{ color: "#FCCFE8" }}>"</span>
										{testimonial.text}
										<span className="text-6xl absolute -bottom-8 -right-2 opacity-20" style={{ color: "#FCCFE8" }}>"</span>
									</blockquote>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Enhanced Team Section */}
			<div className="py-24" style={{ background: "linear-gradient(180deg, #ffffff 0%, #EEEEEE 100%)" }}>
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-20">
						<h2 className="text-5xl font-bold mb-6" style={{ color: "#222222", fontFamily: "'Poppins', sans-serif" }}>
							Meet Our Founders
						</h2>
						<p className="text-xl max-w-4xl mx-auto font-medium" style={{ color: "#555555" }}>
							Pioneering the future of relationships through cutting-edge genetic science and innovative technology
						</p>
						<div className="w-24 h-1 mx-auto mt-8 rounded-full" style={{ background: "#FCCFE8" }}></div>
					</div>
					<div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
						{teamMembers.map((member, idx) => (
							<div key={member.name} className="group cursor-pointer">
								<div
									className="p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
									style={{ 
										background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)", 
										color: "#222222", 
										fontFamily: "'Inter', sans-serif",
										boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
									}}
								>
									<div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16" 
										style={{ background: "#FCCFE8" }}></div>
									<div className="relative mb-8">
										<div className="relative inline-block">
											<img
												src={member.img}
												alt={member.name}
												className="w-40 h-48 object-cover rounded-3xl mx-auto ring-4 group-hover:ring-8 transition-all duration-500 shadow-xl"
												style={{ borderColor: "#FCCFE8" }}
											/>
											<div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
												style={{ background: "#FCCFE8" }}>
												<Users className="w-6 h-6" style={{ color: "#222222" }} />
											</div>
										</div>
									</div>
									<div className="text-center">
										<h3 className="text-3xl font-bold mb-3" style={{ color: "#222222", fontFamily: "'Poppins', sans-serif" }}>
											{member.name}
										</h3>
										<p className="font-bold text-lg mb-6 px-4 py-2 rounded-full inline-block" 
											style={{ color: "#ffffff", background: "#FCCFE8" }}>
											{member.role}
										</p>
										<p className="leading-relaxed mb-8 font-medium text-lg" style={{ color: "#555555" }}>
											{member.bio}
										</p>
										<div className="flex justify-center space-x-6">
											{member.socials.map((social) => {
												const IconComponent = social.icon;
												return (
													<a
														key={social.type}
														href={social.url}
														target="_blank"
														rel="noopener noreferrer"
														className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-translate-y-1 shadow-lg hover:shadow-xl"
														style={{ 
															background: "linear-gradient(135deg, #FCCFE8 0%, #ffffff 100%)",
															boxShadow: "0 5px 15px rgba(252, 207, 232, 0.3)"
														}}
													>
														<IconComponent className="w-6 h-6" style={{ color: "#222222" }} />
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