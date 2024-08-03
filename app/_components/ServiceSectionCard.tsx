'use client';

import { useEnquiryModalContext } from '@/app/_contexts/EnquiryFormModalContext';
import { classNames } from '@/app/_lib/utils';
import { Fragment } from 'react';
import { serviceCardData } from '../_constants';
import EnquiryFormModal from './EnquiryFormModal';

export default function ServiceSectionCard() {
  const { onToogle } = useEnquiryModalContext();

  return (
    <div className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:mt-6 lg:mt-8'>
      {serviceCardData.map((data) => {
        // console.log('colors', data.bgClasses);
        return (
          <Fragment key={data.id}>
            <div
              className='relative p-8 text-center transition-all duration-500 bg-white rounded-lg shadow-xl cursor-pointer group hover:shadow-md'
              onClick={onToogle}>
              <div
                className={classNames(
                  `rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ${data.bgClasses}`
                )}>
                <data.icon className={`${data.iconClasses} size-10`} />
              </div>
              <h4 className='mb-3 text-sm font-medium text-gray-900 capitalize md:text-base lg:text-lg'>
                {data.title}
              </h4>
              <p className='text-sm font-normal text-gray-500'>
                {data.details}
              </p>
            </div>
          </Fragment>
        );
      })}
      <EnquiryFormModal />
    </div>
  );
}
