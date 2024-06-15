import SectionWrapper from '@/components/SectionWrapper';
import SectionBannerCover from './SectionBannerCover';

export default function BannerSection() {
  return (
    <section className={'relative'}>
      <SectionBannerCover />

      <SectionWrapper>
        <div
          className={
            'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-sky-950'
          }>
          <div className={'grid items-center justify-items-center h-full'}>
            <h1
              className={
                'text-stone-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold lg:font-bold text-center'
              }>
              Interview Mastery
              <span
                className={
                  'bg-gradient-to-b from-blue-600 to-blue-400 text-transparent bg-clip-text block'
                }>
                Ace Your Next Job Interview
              </span>
            </h1>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
