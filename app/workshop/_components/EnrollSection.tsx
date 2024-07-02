import SectionWrapper from '@/app/_components/SectionWrapper';
import Link from 'next/link';

export default function EnrollSection() {
  return (
    <section>
      <SectionWrapper>
        <div
          className={
            'bg-red-600 text-center w-full py-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-red-500'
          }>
          <Link href='/enroll' className={'text-white font-semibold text-2xl'}>
            Enroll Now
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
