import Image from 'next/image';

export default function SectionBannerCover() {
  return (
    <div className={'aspect-[17/9] lg:aspect-[24/9] relative'}>
      <Image
        src={
          'https://askproject.net/evecon/wp-content/uploads/sites/126/2023/01/conference-room-HNX75CA.jpg'
        }
        alt='section-banner'
        fill
        sizes='(min-width: 640px) 640px, 100vw'
        priority={true}
        className={'w-full h-full object-cover'}
      />

      <div className={'absolute inset-0 bg-blue-950 bg-opacity-60'} />
    </div>
  );
}
