'use client';

import { FaGithub, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white px-6 overflow-hidden">
      
      {/* Sidebar for Get in Touch */}
      <div className="fixed left-0 top-1/3 transform -translate-y-1/2 w-16 sm:hover:w-48 sm:w-16 bg-gradient-to-b from-teal-500 to-teal-700 p-4 rounded-r-lg shadow-xl transition-all duration-300 z-10 sm:z-50">
  <div className="flex flex-col gap-8 items-center text-lg">
    <a href="tel:+918979646025">
      <FaPhone className="cursor-pointer hover:text-white transition-all" title="Call Me" />
    </a>
    <a href="mailto:deepakpapney111@gmail.com">
      <FaEnvelope className="cursor-pointer hover:text-white transition-all" title="Email Me" />
    </a>
    <a href="https://wa.me/+918979646025" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="cursor-pointer hover:text-white transition-all" title="WhatsApp Me" />
    </a>
  </div>
</div>


      {/* Main Content */}
      <header className="flex flex-col justify-center items-center text-center space-y-6 mt-40 sm:mt-40">
        
        {/* Profile Image */}
        <a href="/images/myimage.jpeg" target="_blank">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/images/myimage.jpeg"
              alt="Profile Image"
              className="w-full h-full object-cover"
              fill
            />
          </div>
        </a>

        {/* Name and Title */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl font-bold tracking-wide mb-4 sm:mb-6 text-shadow-md animate__animated animate__fadeIn animate__delay-1s">
            Hi, I&apos;m Deepak Papney 👋
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto px-4">
            Highly skilled Frontend Developer with 3+ years of experience in building and deploying mobile and web applications. 
            <Link href="/about" className="underline text-teal-400"> Learn more about me</Link>.
          </p>
        </div>

        {/* Action Links */}
        <div className="flex gap-6 justify-center">
          <Link href="/about" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
            About Me
          </Link>
          <Link href="/projects" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
           Projects
          </Link>
        </div>

        {/* Download Resume Button */}
        <a href="/pdf/DeepakPapney_2025.pdf" download>
          <button className="px-6 py-3 mt-8 bg-teal-500 text-white rounded-lg shadow-xl hover:bg-teal-600 transition-all transform hover:scale-105">
            Download Resume
          </button>
        </a>
      </header>

      {/* Social Media Icons */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white text-3xl">
        <div className="flex justify-center gap-8">
          <a href="https://github.com/deepakpapney" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon transition-transform transform hover:scale-125 hover:text-yellow-400" />
          </a>
          <a href="https://www.linkedin.com/in/deepak-papney" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon transition-transform transform hover:scale-125 hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/iamdeepakpapney" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon transition-transform transform hover:scale-125 hover:text-pink-400" />
          </a>
        </div>
      </footer>

      {/* Styling */}
      <style jsx global>{`
        .social-icon {
          font-size: 2.5rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .transform {
          transition: transform 0.3s ease;
        }

        .hover:scale-110 {
          transform: scale(1.1);
        }

        .shadow-2xl {
          box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.1);
        }

        .shadow-lg {
          box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1), -4px -4px 12px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
