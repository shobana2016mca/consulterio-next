'use client';

import FormError from '@/app/_components/FormError';
import { createQuote } from '@/app/_lib/get.query.actions';
import { calcTax } from '@/app/_lib/utils';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useState, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import InvoicePDF from './InvoicePDF';

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<QuoteFormInputsType>({
    // defaultValues: {
    //   enquirerName: 'Jhon Doe',
    //   companyName: 'XYZ Company',
    //   // email: 'jhondoe123@gmail.com',
    //   email: 'belocow407@orsbap.com',
    //   phoneNo: '9999911111',
    //   location: 'Chennai',
    //   jobRole: 'Project manager',
    //   monthlySalary: 10000,
    //   annualSalary: 120000,
    //   noOfEmployees: '2-10',
    //   about: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // },
  });
  const [formValues, setFormValues] = useState<QuoteFormInputsType>();
  const [calculations, setCalculations] = useState<CalculationsType>();
  const [invoiceBlob, setInvoiceBlob] = useState<Blob | undefined>();
  const [invoiceUrl, setInvoiceUrl] = useState<String | undefined>();

  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<QuoteFormInputsType> = async (
    data: QuoteFormInputsType
  ) => {
    // console.log(data);

    const calculatedTax = calcTax(data);
    setFormValues(data);
    setCalculations(calculatedTax);

    const formData = new FormData();
    formData.append('enquirerName', data.enquirerName);
    formData.append('companyName', data.companyName);
    formData.append('email', data.email);
    formData.append('phoneNo', data.phoneNo);
    formData.append('location', data.location);
    formData.append('jobRole', data.jobRole);
    formData.append('monthlySalary', calculatedTax.monthlySalary.toString());
    formData.append('annualSalary', calculatedTax.annualSalary.toString());
    formData.append('noOfEmployees', data.noOfEmployees);
    formData.append('about', data.about);

    formData.append(
      'beforeMonthlySalary',
      calculatedTax.monthlySalary.toString()
    );
    formData.append(
      'totalMonthlyTax',
      calculatedTax.totalMonthlyTax.toString()
    );
    formData.append('monthlyCGST', calculatedTax.monthlyCGST.toString());
    formData.append('monthlySGST', calculatedTax.monthlySGST.toString());
    formData.append(
      'afterMonthlysalary',
      calculatedTax.afterTaxMonthly.toString()
    );

    formData.append(
      'beforeAnnualSalary',
      calculatedTax.annualSalary.toString()
    );
    formData.append(
      'totalAnnuallyTax',
      calculatedTax.totalAnnuallyTax.toString()
    );
    formData.append('annualCGST', calculatedTax.annualCGST.toString());
    formData.append('annualSGST', calculatedTax.annualSGST.toString());
    formData.append(
      'afterAnnualSalary',
      calculatedTax.afterTaxAnnually.toString()
    );

    formData.append(
      'beforePayCommission',
      calculatedTax.beforePayCommission.toString()
    );
    formData.append('commission', calculatedTax.commission.toString());
    formData.append(
      'afterPayCommission',
      calculatedTax.afterPayCommission.toString()
    );
    formData.append('nettSalary', calculatedTax.nettSalary.toString());

    startTransition(async () => {
      const result = await createQuote(formData);
      // const result = await createQuote(formData);
      if (result.status === 'success') {
        toast.success('Email sent successfully', {
          position: 'top-center',
          duration: 5000,
          className: 'bg-green-500 text-white',
        });
      } else {
        toast.error('Email sent failed', {
          position: 'top-center',
          duration: 5000,
          className: 'bg-red-500 text-white',
        });
      }
    });

    reset();

    // setFormValues(undefined);
    // setCalculations(undefined);

    // console.log(invoiceBlob, invoiceUrl);
  };

  // const [instance, updateInstance] = usePDF({
  //   document: InvoicePDF({ data: formValues, calculations }),
  // });
  // console.log(instance);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='p-4 space-y-4 sm:p-8'>
        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-2'}>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='enquirerName' className={'text-sm font-semibold'}>
              Enquirer Name
            </label>
            <input
              id='enquirerName'
              type='text'
              className='w-full px-4 py-2 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-y focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: Jhon Doe'
              {...register('enquirerName', {
                required: 'This field is required',
              })}
            />
            {errors.enquirerName && (
              <FormError error={errors?.enquirerName.message} />
            )}
          </div>

          <div className={'flex flex-col gap-2'}>
            <label htmlFor='companyName' className={'text-sm font-semibold'}>
              Company Name
            </label>
            <input
              id='companyName'
              type='text'
              className='w-full px-4 py-2 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-y focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: XYZ Company'
              {...register('companyName', {
                required: 'This field is required',
              })}
            />
            {errors.companyName && (
              <FormError error={errors?.companyName.message} />
            )}
          </div>
        </div>

        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-2'}>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='email' className={'text-sm font-semibold'}>
              Your email
            </label>
            <input
              id='email'
              type='email'
              autoComplete='email'
              className='w-full px-4 py-2 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-y focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: example@gmail.com'
              {...register('email', {
                required: 'This field is required',
              })}
            />
            {errors.email && <FormError error={errors?.email.message} />}
          </div>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='phoneNo' className={'text-sm font-semibold'}>
              Your Mobile
            </label>
            <input
              id='phoneNo'
              type='tel'
              className='w-full px-4 py-2 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-y focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: example@gmail.com'
              {...register('phoneNo', {
                required: 'This field is required',
              })}
            />
            {errors.phoneNo && <FormError error={errors?.phoneNo.message} />}
          </div>
        </div>

        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-2'}>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='location' className={'text-sm font-semibold'}>
              Location
            </label>
            <input
              id='location'
              type='text'
              className='w-full px-4 py-2 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-y focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: Chennai'
              {...register('location', {
                required: 'This field is required',
              })}
            />
            {errors.location && <FormError error={errors?.location.message} />}
          </div>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='jobRole' className={'text-sm font-semibold'}>
              Job Role
            </label>
            <input
              id='jobRole'
              type='text'
              className='w-full px-4 py-2 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-y focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: Project manager'
              {...register('jobRole', {
                required: 'This field is required',
              })}
            />
            {errors.jobRole && <FormError error={errors?.jobRole.message} />}
          </div>
        </div>

        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-2'}>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='monthlySalary' className={'text-sm font-semibold'}>
              Monthly Salary
            </label>
            <input
              id='monthlySalary'
              type='number'
              className='w-full px-4 py-2 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-y focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: 120000'
              {...register('monthlySalary', {
                required: 'This field is required',
                valueAsNumber: true,
                onChange: (e) => {
                  const value = e.target.value as number;
                  setValue('annualSalary', Math.round(value * 12));
                },
              })}
            />
            {errors.monthlySalary && (
              <FormError error={errors?.monthlySalary.message} />
            )}
          </div>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='annualSalary' className={'text-sm font-semibold'}>
              Annual Salary
            </label>
            <input
              id='annualSalary'
              type='number'
              disabled
              className='w-full px-4 py-2 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-y select-none focus:border-blue-500 focus:outline-none hover:border-blue-500'
              {...register('annualSalary')}
            />
          </div>
        </div>

        <div className={'flex flex-col gap-2'}>
          <label htmlFor='peopleCount' className={'text-sm font-semibold'}>
            How many people in your office ?
          </label>
          <select
            className='px-2 py-2 border rounded-lg shadow-sm outline-none focus:ring'
            id='peopleCount'
            {...register('noOfEmployees', {
              validate: (value) => {
                if (!value) {
                  return 'This field is required';
                }
              },
            })}>
            <option value=''>Select employee</option>
            <option value='2-10'>2-10</option>
            <option value='11-20'>11-20</option>
            <option value='50-100'>50-100</option>
          </select>
          {errors.noOfEmployees && (
            <FormError error={errors?.noOfEmployees.message} />
          )}
        </div>

        <div className={'flex flex-col gap-2'}>
          <label htmlFor='about' className={'text-sm font-semibold'}>
            Tell us about your company
          </label>
          <textarea
            id='about'
            rows={5}
            className='w-full px-4 py-2 mb-8 overflow-auto border border-gray-300 rounded-lg shadow-sm resize-none focus:border-blue-500 focus:outline-none hover:border-blue-500'
            {...register('about')}></textarea>
        </div>
        {!formValues && !calculations && (
          <button
            disabled={isPending}
            className='w-full p-3 font-medium text-center text-white transition bg-blue-700 rounded-lg outline-none ring-1 ring-blue-700 focus:ring hover:ring-blue-400 hover:bg-blue-600 hover:text-white disabled:bg-blue-800 disabled:cursor-not-allowed'>
            {isPending ? 'Sending...' : 'Send'}
          </button>
        )}
        {/* <button className='w-full p-3 font-medium text-center text-white transition bg-blue-700 border border-blue-700 rounded-lg outline-none focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white'>
          Send
        </button> */}

        {formValues && calculations && (
          <PDFDownloadLink
            document={
              <InvoicePDF data={formValues} calculations={calculations} />
            }
            fileName='invoice.pdf'
            className='flex items-center justify-center w-full p-3 font-medium text-center text-white transition bg-blue-700 border border-blue-700 rounded-lg outline-none focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white'
            onChange={(e) => {
              console.log(e);
            }}>
            {({ loading, error, blob, url }) =>
              loading ? (
                <span> Loading document... </span>
              ) : (
                <span> Download Invoice</span>
              )
            }
          </PDFDownloadLink>
        )}
      </form>

      {/* {instance.url !== null && (
        <a
          href={instance.url}
          download={'invoice.pdf'}
          className='w-full p-3 font-medium text-center text-white transition bg-blue-700 border border-blue-700 rounded-lg outline-none focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white'>
          Download PDF
        </a>
      )} */}
    </>
  );
}
