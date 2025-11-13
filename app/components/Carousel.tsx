import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '../components/ui/carousel';
import Image from 'next/image';

const images = [
  '/about-2.webp',
  '/clubs-and-org.webp',
  '/home-clubs.webp',
  '/athletes.webp',
  '/team.webp',
];

export function CarouselElement() {
  return (
    <Carousel className='w-full md:max-w-7xl'>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={1920}
              height={1080}
              className='w-full lg:h-[600px] md:h-[400px] h-[200px] object-cover object-center rounded-lg'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots />
    </Carousel>
  );
}
