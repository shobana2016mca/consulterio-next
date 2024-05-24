import { ServiceCardType } from '@/types';

export default function ServiceCard({ icon, title, details }: ServiceCardType) {
  return (
    <>
      <div className='rounded-[20px] bg-sky-100 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 cursor-pointer'>
        <div className='mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-indigo-600'>
          {icon}
        </div>
        <h4 className='mb-[14px] text-2xl font-semibold text-dark'>{title}</h4>
        <p className='text-body-color'>{details}</p>
      </div>
    </>
  );
}
