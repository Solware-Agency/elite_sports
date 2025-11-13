import Image from 'next/image';

function Desing() {
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-1 overflow-hidden'>
        <Image
          src='/desingGirl.webp'
          alt='athletes'
          className='w-full h-full object-cover object-top filter grayscale-100'
          width={1080}
          height={1920}
        />
      </div>
      <div className='col-span-1 relative'>
        <div className='absolute inset-0 z-20 flex items-center justify-center'>
          <Image
            src='/eliteManageLogo.svg'
            alt='athletes'
            className='w-3/4 h-3/4 object-contain'
            width={1920}
            height={1080}
          />
        </div>
        <Image
          src='/vector.webp'
          alt='athletes'
          className='w-full h-full object-cover object-center'
          width={1920}
          height={1080}
        />
      </div>
      <div className='col-span-1 overflow-hidden'>
        <Image
          src='/frase.webp'
          alt='athletes'
          className='w-full h-full object-cover object-center filter grayscale-100 scale-150'
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}

export default Desing;
