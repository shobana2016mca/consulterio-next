'use client';

import { serviceCardData } from '@/constants';
import { useEnquiryModalContext } from '@/contexts/EnquiryFormModalContext';
import { classNames } from '@/lib/utils';
import { Fragment } from 'react';
import EnquiryFormModal from './EnquiryFormModal';

export default function ServiceSectionCard() {
  const { onToogle } = useEnquiryModalContext();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
      {serviceCardData.map((data) => {
        console.log('colors', data.bgClasses);
        return (
          <Fragment key={data.id}>
            <div
              className='relative text-center group p-8 cursor-pointer shadow-xl rounded-lg hover:shadow-md transition-all duration-500 bg-white'
              onClick={onToogle}>
              <div
                className={classNames(
                  `rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ${data.bgClasses}`
                )}>
                <data.icon className={`${data.iconClasses} size-10`} />
              </div>
              <h4 className='text-lg font-medium text-gray-900 mb-3 capitalize'>
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
