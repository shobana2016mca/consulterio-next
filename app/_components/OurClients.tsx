import Image from 'next/image';
import { ourClients } from '../_constants';

export default function OurClients() {
  return (
    <section className='py-8'>
      <h2 className='mb-2 text-2xl font-bold leading-8 text-center'>
        Our Clients
      </h2>
      <p className='text-lg leading-8 text-center font-extralight '>
        We are trusted by the world&apos;s most innovative teams
      </p>
      <div className='logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]'>
        <div className='inline-flex animate-slide-left group-hover:animation-pause w-max'>
          {ourClients.map((client) => (
            <div key={client.id} className={'aspect-[6/2] md:aspect-[2/1]'}>
              <Image
                className={'object-contain w-full h-full'}
                src={client.featureLogo}
                alt={`company-logo-${client.id}`}
                width={158}
                height={50}
              />
            </div>
          ))}
        </div>

        {/* <!-- Duplicate the logos for infinite scroll effect --> */}
        <div className='inline-flex animate-slide-left group-hover:animation-pause w-max'>
          {ourClients.map((client) => (
            <div key={client.id} className={'aspect-[6/2] md:aspect-[2/1]'}>
              <Image
                className={'object-contain w-full h-full'}
                src={client.featureLogo}
                alt={`company-logo-${client.id}`}
                width={158}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
