import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

function HomeAbout() {
  return (
    <section id='about' className='px-15 py-20'>
        <h2 className='text-black text-2xl font-roboto font-medium uppercase mb-14'>
          About
        </h2>
        <div className='flex items-end justify-center gap-5 mb-20'>
          <h1 className='text-darkBlue text-7xl/15 font-bold font-inter uppercase'>
            EXCELLENCE IN
            <br />
            EVERY MOVE
          </h1>
          <p className='text-darkBlue text-lg/5 font-roboto font-light '>
            Why Partner with Elite Sports
            <br />
            Management?
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 max-w-7xl mx-auto'>
          <div className='flex flex-col'>
            <div className='col-span-1 w-auto h-[445px] overflow-hidden rounded-sm mb-5'>
              <Image
                src='/hero.webp'
                alt='about 1'
                className='w-full h-full object-cover object-center'
                width={500}
                height={500}
              />
            </div>
            <h3 className='text-darkBlue text-2xl font-mono font-bold uppercase'>
              Athletes
            </h3>
            <p className='text-darkBlue text-lg font-mono font-medium uppercase'>
              unlock your potential
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='col-span-1 w-auto h-[445px] overflow-hidden rounded-sm mb-5'>
              <Image
                src='/about-2.webp'
                alt='about 1'
                className='w-full h-full object-cover object-center'
                width={500}
                height={500}
              />
            </div>
            <h3 className='text-darkBlue text-2xl font-mono font-bold uppercase'>
              Organizations
            </h3>
            <p className='text-darkBlue text-lg font-mono font-medium uppercase'>
              Create Meaningful Impact
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='col-span-1 w-auto h-[445px] overflow-hidden rounded-sm mb-5'>
              <Image
                src='/about-3.webp'
                alt='about 1'
                className='w-full h-full object-cover object-center'
                width={500}
                height={500}
              />
            </div>
            <h3 className='text-darkBlue text-2xl font-mono font-bold uppercase'>
              clubs
            </h3>
            <p className='text-darkBlue text-lg font-mono font-medium uppercase'>
              Grow Your Community
            </p>
          </div>
        </div>
        <div className='flex items-center gap-10 mt-10'>
          <ArrowLeft className='size-8 text-redd cursor-pointer' />
          <ArrowRight className='size-8 text-redd cursor-pointer' />
        </div>
      </section>
  )
}

export default HomeAbout