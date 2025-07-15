'use client';

import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, UserCheck } from 'lucide-react';

export default function TermsOfService() {
  const sections = [
    {
      icon: UserCheck,
      title: 'Acceptance of Terms',
      content: [
        'By using GenoSaathi services, you agree to these terms',
        'You must be at least 18 years old to use our services',
        'You are responsible for maintaining account security',
        'We reserve the right to update these terms with notice',
      ],
    },
    {
      icon: FileText,
      title: 'Service Description',
      content: [
        'Genetic analysis and relationship insights based on uploaded data',
        'Educational content about genetics and relationships',
        'Secure platform for genetic data processing',
        'Results are for informational purposes only',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'User Responsibilities',
      content: [
        'Provide accurate information and own the genetic data you upload',
        'Use services for lawful purposes only',
        "Respect intellectual property and other users' privacy",
        'Do not attempt to reverse engineer our algorithms',
      ],
    },
    {
      icon: Scale,
      title: 'Limitations and Disclaimers',
      content: [
        'Results are estimates and should not replace professional advice',
        'We are not liable for decisions made based on our analysis',
        "Service availability may vary and is provided 'as is'",
        'Maximum liability is limited to the amount paid for services',
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-[#EEEEEE] text-[#222222]'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='relative overflow-hidden py-20'
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #FCCFE8 100%)',
        }}
      >
        <div className='relative max-w-4xl mx-auto px-4 text-center'>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-4xl sm:text-5xl font-bold font-poppins mb-4 text-[#222222]'
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg text-[#555555] max-w-2xl mx-auto'
          >
            Please read these terms carefully before using our services.
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className='py-16 px-4'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-8 shadow-lg mb-8'
          >
            <p className='text-[#555555] leading-relaxed'>
              <strong>Effective Date:</strong> July 15, 2025
            </p>
            <p className='text-[#555555] leading-relaxed mt-4'>
              These Terms of Service govern your use of GenoSaathi's genetic
              analysis platform and services. By accessing or using our
              services, you agree to be bound by these terms.
            </p>
          </motion.div>

          <div className='space-y-8'>
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-2xl p-8 shadow-lg'
              >
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-[#FCCFE8] to-[#d64a8b] flex items-center justify-center mr-4'>
                    <section.icon className='w-6 h-6 text-white' />
                  </div>
                  <h2 className='text-2xl font-bold font-poppins text-[#222222]'>
                    {section.title}
                  </h2>
                </div>
                <ul className='space-y-3'>
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className='flex items-start'>
                      <div className='w-2 h-2 rounded-full bg-[#d64a8b] mt-2 mr-3 flex-shrink-0'></div>
                      <span className='text-[#555555] leading-relaxed'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='bg-white rounded-2xl p-8 shadow-lg mt-8'
          >
            <h2 className='text-2xl font-bold font-poppins text-[#222222] mb-6'>
              Additional Terms
            </h2>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-[#222222] mb-2'>
                  Termination
                </h3>
                <p className='text-[#555555] leading-relaxed'>
                  We may terminate or suspend your account for violations of
                  these terms. You may close your account at any time through
                  your account settings.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-[#222222] mb-2'>
                  Governing Law
                </h3>
                <p className='text-[#555555] leading-relaxed'>
                  These terms are governed by applicable laws. Any disputes will
                  be resolved through appropriate legal channels.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-[#222222] mb-2'>
                  Contact Information
                </h3>
                <p className='text-[#555555] leading-relaxed'>
                  For questions about these terms, contact us at
                  genosaathi@gmail.com or through our contact page.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
