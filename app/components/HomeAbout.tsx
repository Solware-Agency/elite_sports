import Image from 'next/image';

function HomeAbout() {
  return (
    <div className='px-5 md:px-15 py-20 bg-lightBlue'>
      <h2 className='text-black text-2xl font-roboto-mono font-normal uppercase mb-14'>
        About
      </h2>
      <div className='flex flex-col md:flex-row items-start md:items-end justify-center gap-5 mb-20'>
        <h1 className='text-darkBlue md:text-7xl/15 sm:text-5xl/10 text-4xl/10 font-extrabold font-inter uppercase'>
          EXCELLENCE IN
          <br />
          EVERY MOVE
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto'>
        <a
          href='/athletes'
          className='flex flex-col p-7 hover:shadow-xl rounded-lg transition-all cursor-pointer group'
        >
          <div className='col-span-1 aspect-square overflow-hidden rounded-sm mb-5'>
            <Image
              src='/home-athletes.webp'
              alt='about 1'
              className='w-full h-full object-cover object-center group-hover:scale-105 transition-all'
              width={696}
              height={690}
            />
          </div>
          <h3 className='text-darkBlue text-2xl font-roboto font-medium uppercase'>
            Athletes
          </h3>
          <p className='text-darkBlue text-md font-roboto font-medium uppercase'>
            unlock your potential
          </p>
        </a>
        <a
          href='/clubs'
          className='flex flex-col p-7 hover:shadow-xl rounded-lg transition-all cursor-pointer group'
        >
          <div className='col-span-1 aspect-square overflow-hidden rounded-sm mb-5'>
            <Image
              src='/home-clubs.webp'
              alt='about 1'
              className='w-full h-full object-cover object-center group-hover:scale-105 transition-all'
              width={1920}
              height={1080}
            />
          </div>
          <h3 className='text-darkBlue text-2xl font-roboto font-medium uppercase'>
            clubs
          </h3>
          <p className='text-darkBlue text-lg font-mono font-medium uppercase'>
            Grow Your Community
          </p>
        </a>
        <a
          href='/clubs'
          className='flex flex-col p-7 hover:shadow-xl rounded-lg transition-all cursor-pointer group'
        >
          <div className='col-span-1 aspect-square overflow-hidden rounded-sm mb-5'>
            <Image
              src='/home-orga.webp'
              alt='about 1'
              className='w-full h-full object-cover object-center group-hover:scale-105 transition-all'
              width={1920}
              height={1080}
            />
          </div>
          <h3 className='text-darkBlue text-2xl font-roboto font-medium uppercase'>
            Organizations
          </h3>
          <p className='text-darkBlue text-md font-roboto font-medium uppercase'>
            Create Meaningful Impact
          </p>
        </a>
      </div>
    </div>
  );
}

export default HomeAbout;
