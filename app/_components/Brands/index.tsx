import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../SectionWrapper';
import brandsData from './brandsData';

const Brands = () => {
  return (
    <section className=''>
      <SectionWrapper>
        <div className='flex flex-col items-center justify-center'>
          <h4
            className={
              'text-stone-700 uppercase font-medium lg:font-semibold text-sm md:text-base lg:text-lg'
            }>
            AS FEATURED IN
          </h4>
          <div className='w-full'>
            <div className='grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
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
        // target='_blank'
        // rel='nofollow noreferrer'
        className='relative w-full h-10 transition opacity-70 hover:opacity-100'>
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
