import Image from 'next/image';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const items = [
  {
    name: 'Pro pade',
    image: '/propadellogo.webp',
  },
  {
    name: 'Wilson',
    image: '/wilsonlogo.webp',
  },
  {
    name: 'BGO',
    image: '/bgocorporate.webp',
  },
  {
    name: 'Corkpade',
    image: '/corkpadellogo.webp',
  },
  {
    name: 'Red & Blue',
    image: '/red&blue.webp',
  },
  {
    name: 'Elite',
    image: '/eliteCorporatelogo.webp',
  },
  {
    name: 'Tower',
    image: '/towerlogo.webp',
  },
  {
    name: '6LS',
    image: '/6lslogo.webp',
  },
];
function Partners() {
  return (
    <div className='flex flex-col items-center justify-center relative bg-black/50 py-20'>
      <h1 className='text-light lg:text-6xl sm:text-5xl text-3xl font-roboto-mono font-medium uppercase text-center mb-20'>
        partners
      </h1>
      <InfiniteMovingCards items={items} speed='normal'/>
      <Image
        src='/2.webp'
        alt='Partners'
        className='w-full h-full object-cover object-top absolute top-0 left-0 right-0 bottom-0 -z-10'
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default Partners;
