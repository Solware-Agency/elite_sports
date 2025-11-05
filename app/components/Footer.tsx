// import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'instagram':
      return <Instagram size={24} />;
    case 'whatsapp':
      return <Phone size={24} />;
    case 'mail':
      return <Mail size={24} />;
    default:
      return null;
  }
};

function Footer() {
  return (
    <footer className='bg-off-white border-t border-blue-dark border-opacity-15'>
      <div className='max-w-[1280px] mx-auto px-10 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          <div className='flex flex-col gap-4'>
            <img
              src='/eliteLogo.svg'
              alt='Elite Sports Management'
              className='w-[180px] h-auto object-contain brightness-0'
            />
            <p className='text-blue-dark text-sm font-body-regular leading-relaxed max-w-xs'>
              Excellence in sports representation. Empowering athletes and
              building authentic partnerships.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='font-subtitles font-bold text-blue-dark text-lg mb-2'>
              Quick Links
            </h3>
            <nav className='flex flex-col gap-3'>
              <Link href='/'>About</Link>
              <Link href='/'>Athletes</Link>
              <Link href='/'>Contact</Link>
              <Link href='/'>Clubs | Organizations</Link>
            </nav>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='font-subtitles font-bold text-blue-dark text-lg mb-2'>
              Connect With Us
            </h3>
            <div className='flex gap-4'>
              <Link href='https://www.instagram.com/elitesportsmanagement/'>
                Instagram
              </Link>
              <Link href='/'>WhatsApp</Link>
              <Link href='/'>Email</Link>
            </div>
            <div className='mt-4 text-blue-dark text-sm font-body-regular'>
              <p className='mb-1'>
                <strong>Email:</strong>{' '}
                <a
                  href='mailto:info@elitesportsmanagement.com'
                  className='hover:text-red transition-colors'
                >
                  info@elitesportsmanagement.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a
                  href='tel:+1234567890'
                  className='hover:text-red transition-colors'
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='border-t border-blue-dark border-opacity-15 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-blue-dark text-xs font-body-regular text-center md:text-left'>
              © {new Date().getFullYear()} Elite Sport Management. All rights
              reserved.
            </p>
            <div className='flex gap-6 text-xs font-body-regular'>
              <Link
                href='/privacy'
                className='text-blue-dark hover:text-red transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-blue-dark hover:text-red transition-colors'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
