'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when using our genetic analysis services',
        'Genetic data uploaded through our platform',
        'Account information including email and preferences',
        'Usage data and analytics to improve our services',
      ],
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'Provide genetic analysis and relationship insights',
        'Improve our algorithms and services',
        'Communicate important updates about your account',
        'Ensure platform security and prevent misuse',
      ],
    },
    {
      icon: Shield,
      title: 'Data Protection',
      content: [
        'All genetic data is encrypted and stored securely',
        'We never sell your personal or genetic information',
        'Access to your data is strictly limited to authorized personnel',
        'You can delete your account and data at any time',
      ],
    },
    {
      icon: Eye,
      title: 'Your Rights',
      content: [
        'Access and download your personal data',
        'Correct inaccurate information',
        'Delete your account and associated data',
        'Opt out of non-essential communications',
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg text-[#555555] max-w-2xl mx-auto'
          >
            Your privacy and genetic data security are our top priorities.
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
              GenoSaathi is committed to protecting your privacy and ensuring
              the security of your genetic information. This Privacy Policy
              explains how we collect, use, and safeguard your data when you use
              our services.
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
            <h2 className='text-2xl font-bold font-poppins text-[#222222] mb-4'>
              Contact Us
            </h2>
            <p className='text-[#555555] leading-relaxed'>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at genosaathi@gmail.com or through
              our contact page.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
