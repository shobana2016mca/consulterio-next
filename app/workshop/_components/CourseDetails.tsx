import SectionWrapper from '@/app/_components/SectionWrapper';
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

            <div className={'aspect-video h-full w-full'}>
              <video
                width='100%'
                height={'100%'}
                autoPlay={true}
                loop={true}
                crossOrigin='anonymous'
                disablePictureInPicture={true}
                disableRemotePlayback={true}
                preload='metadata'
                poster='/images/video-cover.jpg'
                // controls
                // controlsList='nodownload'
              >
                <source src='/videos/intro-video-2.mp4' type='video/mp4' />
              </video>
            </div>
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
