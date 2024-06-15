import SectionWrapper from '@/components/SectionWrapper';
import EnrollmentForm from './_components/EnrollmentForm';

export default function EnrollmentPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  return (
    <main>
      <section>
        <SectionWrapper>
          <div className={'grid grid-cols-4 gap-4 w-full'}>
            <div className={'col-span-full md:col-span-2 bg-blue-400'}>
              INFORMATION
            </div>

            <div className={'col-span-full md:col-span-2 bg-green-500'}>
              <EnrollmentForm />
            </div>
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}
