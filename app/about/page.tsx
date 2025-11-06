import { ArrowDown, CopyrightIcon } from 'lucide-react';
import AboutUs from '../components/AboutUs';

import { CarouselElement } from '../components/Carousel';
import Partners from '../components/Partners';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='flex max-h-screen items-center justify-center font-sans relative h-screen w-full overflow-hidden'>
        <img
          src='/3.webp'
          alt='hero image'
          className='absolute top-0 left-0 w-full h-full object-cover object-top z-0'
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
          }}
          fetchPriority='high'
          loading='eager'
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10'>
          <div className='flex flex-col items-center justify-center h-full w-full px-4 max-w-full overflow-hidden'>
            <h1 className='text-light md:text-6xl font-extrabold uppercase max-w-full wrap-break-word text-left translate-y-[245px]'>
              WE Are
            </h1>
            <Image
              src='/eliteLogo.svg'
              className='w-[838px] h-[700px] object-contain object-center'
              alt='logo'
              width={1920}
              height={1080}
            />
            <ArrowDown className='size-5 text-light animate-bounce md:hidden mt-10' />
          </div>
          <div className='flex items-center justify-between absolute bottom-10 left-0 right-0 px-10'>
            <div className='flex items-center justify-center gap-20'>
              <CopyrightIcon className='size-4 text-light' />
            </div>
            <div className='items-center justify-center gap-20 hidden md:flex'>
              <p className='text-light text-lg font-roboto font-light uppercase'>
                scroll down
              </p>
              <ArrowDown className='size-5 text-light animate-bounce' />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <div className='bg-lightBlue px-15 py-20'>
        <h2 className='text-black text-2xl font-roboto font-medium uppercase mb-20'>
          Services
        </h2>
        <div className='flex flex-col items-center justify-center gap-10 w-full max-w-7xl mx-auto'>
          <div className='flex flex-col items-center justify-center gap-5 w-full relative'>
            <div className='z-20 py-50'>
              <h1 className='text-light text-8xl font-judson uppercase text-center max-w-full wrap-break-word'>
                Athletes
              </h1>
              <p className='text-light text-2xl font-roboto font-light uppercase text-center max-w-full wrap-break-word'>
                Elevate Your Career Beyond the Court.
              </p>
            </div>
            <div className='bg-black/30 w-full h-full absolute top-0 left-0 right-0 bottom-0 z-10'></div>
            <Image
              src='/hero.webp'
              alt='frase'
              className='w-full h-full object-cover object-[50%_20%] absolute top-0 left-0 right-0 bottom-0'
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-5 w-full relative'>
            <div className='z-20 py-50'>
              <h1 className='text-light text-8xl font-judson uppercase text-center max-w-full wrap-break-word'>
                Organizations
              </h1>
              <p className='text-light text-2xl font-roboto font-light uppercase text-center max-w-full wrap-break-word'>
                Authentic Partnerships That Deliver Impact.
              </p>
            </div>
            <div className='bg-black/30 w-full h-full absolute top-0 left-0 right-0 bottom-0 z-10'></div>
            <Image
              src='/about-2.webp'
              alt='frase'
              className='w-full h-full object-cover object-[50%_50%] absolute top-0 left-0 right-0 bottom-0'
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-5 w-full relative'>
            <div className='z-20 py-50'>
              <h1 className='text-light text-8xl font-judson uppercase text-center max-w-full wrap-break-word'>
                Clubs
              </h1>
              <p className='text-light text-2xl font-roboto font-light uppercase text-center max-w-full wrap-break-word'>
                Expand Your Reach. Strengthen Your Community.
              </p>
            </div>
            <div className='bg-black/30 w-full h-full absolute top-0 left-0 right-0 bottom-0 z-10'></div>
            <Image
              src='/about-3.webp'
              alt='frase'
              className='w-full h-full object-cover object-[50%_70%] absolute top-0 left-0 right-0 bottom-0'
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </>
  );
}
