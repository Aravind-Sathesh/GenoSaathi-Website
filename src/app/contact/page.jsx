// app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#EEEEEE] to-[#f8f9fa] font-inter">
      {/* Hero Section - Now at the top */}
      <section className="bg-gradient-to-r from-[#222222] to-[#333333] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCCFE8]/10 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-poppins text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FCCFE8]">
            Get in Touch
          </h1>
          <p className="font-inter text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Contact Form Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-[#FCCFE8]/20">
                  <h2 className="font-poppins text-3xl font-bold text-[#222222] mb-6">Contact Information</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#FCCFE8] to-[#ff9ff3] mb-8 rounded-full"></div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start p-5 rounded-2xl bg-gradient-to-r from-[#FCCFE8]/10 to-transparent hover:from-[#FCCFE8]/20 transition-all duration-300 group">
                      <div className="bg-gradient-to-r from-[#FCCFE8] to-[#ff9ff3] p-3 rounded-full mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-[#222222] mb-2">Phone Number</h3>
                        <p className="font-inter text-[#454F5E] text-lg">+91 xxxxx53320</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-5 rounded-2xl bg-gradient-to-r from-[#FCCFE8]/10 to-transparent hover:from-[#FCCFE8]/20 transition-all duration-300 group">
                      <div className="bg-gradient-to-r from-[#FCCFE8] to-[#ff9ff3] p-3 rounded-full mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-[#222222] mb-2">Email</h3>
                        <p className="font-inter text-[#454F5E] text-lg">genosaathi@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-5 rounded-2xl bg-gradient-to-r from-[#FCCFE8]/10 to-transparent hover:from-[#FCCFE8]/20 transition-all duration-300 group">
                      <div className="bg-gradient-to-r from-[#FCCFE8] to-[#ff9ff3] p-3 rounded-full mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 384 512">
                          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-[#222222] mb-2">Address</h3>
                        <p className="font-inter text-[#454F5E] text-lg leading-relaxed">
                          Birla Institute of Technology & Science<br />
                          Vidya Vihar<br />
                          Pilani 333031<br />
                          Rajasthan, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-5 rounded-2xl bg-gradient-to-r from-[#FCCFE8]/10 to-transparent hover:from-[#FCCFE8]/20 transition-all duration-300 group">
                      <div className="bg-gradient-to-r from-[#FCCFE8] to-[#ff9ff3] p-3 rounded-full mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-[#222222] mb-2">Business Hours</h3>
                        <p className="font-inter text-[#454F5E] text-lg leading-relaxed">
                          Monday — Friday 9am – 5pm<br />
                          Saturday — 10am – 3pm<br />
                          Sunday — Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form with black input text */}
              <div>
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-[#FCCFE8]/20">
                  <h2 className="font-poppins text-3xl font-bold text-[#222222] mb-6">Send Us a Message</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#FCCFE8] to-[#ff9ff3] mb-8 rounded-full"></div>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-inter text-sm font-semibold text-[#222222] mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FCCFE8] focus:border-transparent transition-all duration-300 hover:border-[#FCCFE8]/50 font-inter text-black"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-inter text-sm font-semibold text-[#222222] mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FCCFE8] focus:border-transparent transition-all duration-300 hover:border-[#FCCFE8]/50 font-inter text-black"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-inter text-sm font-semibold text-[#222222] mb-3">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter message subject"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FCCFE8] focus:border-transparent transition-all duration-300 hover:border-[#FCCFE8]/50 font-inter text-black"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-inter text-sm font-semibold text-[#222222] mb-3">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FCCFE8] focus:border-transparent transition-all duration-300 hover:border-[#FCCFE8]/50 resize-none font-inter text-black"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#FCCFE8] to-[#ff9ff3] text-[#222222] font-poppins font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="w-full h-[500px] bg-gradient-to-r from-[#EEEEEE] to-[#f8f9fa] relative overflow-hidden">
          <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-[#FCCFE8]/20">
            <h3 className="font-poppins font-semibold text-[#222222] mb-2">Our Location</h3>
            <p className="font-inter text-sm text-[#454F5E]">Birla Institute of Technology & Science, Pilani</p>
          </div>
          
          {/* Google Maps for BITS Pilani */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8537655765087!2d75.86374831507629!3d28.363679982579995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39145a15aa21c3c9%3A0x1732c2c1cbe09c1c!2sBirla%20Institute%20of%20Technology%20and%20Science%2C%20Pilani!5e0!3m2!1sen!2sin!4v1672147200000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter contrast-110 saturate-110 rounded-lg"
            title="BITS Pilani Campus Location"
          ></iframe>
        </section>
      </main>
    </div>
  );
}