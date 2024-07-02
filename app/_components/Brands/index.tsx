import Image from 'next/image';
import Link from 'next/link';
import brandsData from './brandsData';

const Brands = () => {
  return (
    <section className='max-w-screen-xl w-full mx-auto py-20'>
      <div className='flex flex-col justify-center items-center'>
        <h4 className={'text-stone-700 uppercase font-semibold text-lg'}>
          AS FEATURED IN
        </h4>
        <div className='w-full px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
            {brandsData.map((brand) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name, featureLogo } = brand;

  return (
    <div className=''>
      <Link
        href={href}
        target='_blank'
        rel='nofollow noreferrer'
        className='relative h-10 w-full opacity-70 transition hover:opacity-100'>
        {/* <img src={imageLight} alt={name} className='hidden dark:block' /> */}
        <div className={'aspect-square size-28'}>
          <Image
            src={featureLogo}
            alt={name}
            className='object-contain w-full h-full'
            width={192}
            height={40}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </Link>
    </div>
  );
};
