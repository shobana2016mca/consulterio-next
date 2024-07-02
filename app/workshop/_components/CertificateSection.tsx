import SectionWrapper from '@/app/_components/SectionWrapper';
import Image from 'next/image';
import { GrCertificate } from 'react-icons/gr';
import SectionSubHeading from './SectionSubHeading';

export default function CertificateSection() {
  return (
    <section>
      <SectionWrapper>
        <SectionSubHeading
          iconLeft={<GrCertificate className='fill-yellow' />}
          iconRight={<GrCertificate className='fill-yellow' />}>
          Course Completion Certificate
        </SectionSubHeading>
        <div className={'relative aspect-video mt-12'}>
          <Image
            src='/images/certificate.png'
            alt='certificate-image'
            fill
            sizes='(min-width: 640px) 640px, 100vw'
            className='object-contain w-full h-full'
            priority
          />
        </div>
      </SectionWrapper>
    </section>
  );
}
