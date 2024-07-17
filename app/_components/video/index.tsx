'use client';

import Image from 'next/image';
import SectionHeading from '../SectionHeading';
// import SectionTitle from '../Common/SectionTitle';

// import ModalVideo from 'react-modal-video';

const SectionTitle = ({
  title,
  paragraph,
  width = '570px',
  center,
  mb = '100px',
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? 'mx-auto text-center space-y-4' : ''}`}
        style={{ maxWidth: width }}>
        <SectionHeading center>{title}</SectionHeading>
        <p className='font-normal text-sm md:text-lg lg:text-xl leading-5 md:leading-6 lg:leading-8 text-gray-500 text-center'>
          {paragraph}
        </p>
      </div>
    </>
  );
};

const Video = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <section className='relative z-10 pb-4 md:pb-6 lg:pb-8 w-full'>
      <div className='space-y-4 md:space-y-8 lg:space-y-12'>
        <SectionTitle
          title='We are ready to help'
          paragraph='There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'
          center
          // mb='80px'
        />

        <div className='flex flex-wrap'>
          <div className='w-full'>
            <div
              className='mx-auto max-w-[770px] overflow-hidden rounded-md'
              data-wow-delay='.15s'>
              <div className='relative aspect-[77/40] items-center justify-center'>
                <Image
                  src='/images/video/video.jpg'
                  alt='video image'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <div className='absolute right-0 top-0 flex h-full w-full items-center justify-center'>
                  <button
                    aria-label='video play button'
                    // onClick={() => setOpen(true)}
                    className='flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100'>
                    <svg
                      width='16'
                      height='18'
                      viewBox='0 0 16 18'
                      className='fill-current'>
                      <path d='M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ModalVideo
        channel='youtube'
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId='L61p2uyiMSo'
        onClose={() => setOpen(false)}
      /> */}

      <div className='absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat'></div>
    </section>
  );
};

export default Video;
