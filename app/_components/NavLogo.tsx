import Image from 'next/image';
import Link from 'next/link';

export default function NavLogo() {
  return (
    <Link href='/' className={'h-8 w-full'}>
      <Image
        className='object-contain w-full h-full'
        src='/logo.png'
        alt='Your Company'
        width={100}
        height={100}
        // priority={true}
      />
    </Link>
  );
}
