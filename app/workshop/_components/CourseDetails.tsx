import SectionWrapper from '@/components/SectionWrapper';
import BatchDetailsCard from './BatchDetailsCard';
import CourseBenifits from './CourseBenifits';
import CourseCurriculam from './CourseCurriculam';
import CourseOverview from './CourseOverview';
import InstructorProfileCard from './InstructorProfileCard';

export default function CourseDetails() {
  return (
    <section>
      <SectionWrapper>
        <div className={'grid grid-cols-8 gap-4 xl:gap-x-8'}>
          <div className={'col-span-full xl:col-span-6 space-y-8 m-4'}>
            <CourseOverview />

            <CourseBenifits />

            <CourseCurriculam />
          </div>
          <div className={'col-span-full xl:col-span-2 space-y-8'}>
            <InstructorProfileCard />

            <BatchDetailsCard />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
