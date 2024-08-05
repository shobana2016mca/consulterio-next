'use client';

import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/lotties/failure.json';

export default function FailureAnimation() {
  return (
    <div className={'aspect-[6/2]'}>
      <Lottie
        loop
        animationData={lottieJson}
        play
        // style={{ width: '100%', height: '100%' }}
        className='object-cover w-full h-full'
      />
    </div>
  );
}
