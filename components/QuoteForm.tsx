'use client';

import { CalculationsType, QuoteFormInputsType } from '@/types';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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
    //   enquirerName: "Jhon Doe",
    //   companyName: "XYZ Company",
    //   location: "Chennai",
    //   jobRole: "Project manager",
    //   // monthlySalary: 0,
    //   // annualSalary: 0,
    //   peopleCount: "",
    //   about: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // },
  });
  // const [instance, updateInstance] = usePDF({ document: '' });
  const [formData, setFormData] = useState<QuoteFormInputsType>();
  const [calculations, setCalculations] = useState<CalculationsType>();

  const onSubmit: SubmitHandler<QuoteFormInputsType> = (
    data: QuoteFormInputsType
  ) => {
    console.log(data);

    // const monthlySalary = data.monthlySalary; // 10000
    // const annualSalary = data.annualSalary; // 12 * 10000 = 120000

    // const commission = Number(((annualSalary / 108.33) * 100).toFixed(2)); // 9227.36
    // const afterCommissionAnnualSalary = Number(
    //   (annualSalary - commission).toFixed(2)
    // ); // 110772.64

    // const afterTaxAnnualSalary = Number(
    //   ((annualSalary / 118) * 100).toFixed(2)
    // ); //
    // const taxAmount = Number(((annualSalary * 100) / 118).toFixed(2)); //18305.08

    // const CGST = Math.round((annualSalary / 109) * 100);
    // const SGST = Math.round((annualSalary / 109) * 100);
    // const netSalary = annualSalary - taxAmount - commission;
    const monthlySalary = data.monthlySalary;
    const annualSalary = 12 * monthlySalary;

    const afterTaxMonthly = Number(((monthlySalary / 118) * 100).toFixed(2));
    const monthlyCGST = Number((afterTaxMonthly / 2).toFixed(2));
    const monthlySGST = Number((afterTaxMonthly / 2).toFixed(2));
    const totalMonthlyTax = monthlySalary - afterTaxMonthly;

    const afterTaxAnnually = Number(((annualSalary / 118) * 100).toFixed(2));
    const annualCGST = Number((afterTaxAnnually / 2).toFixed(2));
    const annualSGST = Number((afterTaxAnnually / 2).toFixed(2));
    const totalAnnuallyTax = annualSalary - afterTaxAnnually;

    console.log('before monthly', monthlySalary);
    console.log('monthlyTax', monthlySalary - afterTaxMonthly);
    console.log('after paid monthly', afterTaxMonthly);

    console.log('before annual', annualSalary);
    console.log('annual tax', annualSalary - afterTaxAnnually);
    console.log('after paid annual', afterTaxAnnually);

    const beforePayCommission = afterTaxAnnually; //101694.92
    const commission = Number(
      (afterTaxAnnually - (afterTaxAnnually / 108.33) * 100).toFixed(2)
    );
    const afterPayCommission = Number(
      ((afterTaxAnnually / 108.33) * 100).toFixed(2)
    );

    const nettSalary = afterPayCommission;

    //93,875.11 net salary
    // 7,819.79 commision
    console.log(beforePayCommission);
    console.log(commission);
    console.log(afterPayCommission);

    setFormData(data);
    setCalculations({
      afterTaxMonthly,
      monthlyCGST,
      monthlySGST,
      totalMonthlyTax,
      afterTaxAnnually,
      annualCGST,
      annualSGST,
      totalAnnuallyTax,
      beforePayCommission,
      commission,
      afterPayCommission,
      nettSalary,
    });

    // console.log("monthlySalary:", data.monthlySalary); //10000
    // console.log("monthlySalaryBeforeTax:", data.monthlySalary); // 8474.58 + 1525.42 /2
    // console.log(
    //   "monthlySalaryAfterTax:",
    //   ((data.monthlySalary / 118) * 100).toFixed(2)
    // ); //8474.58

    // console.log("Annual Salary:", annualSalary); //120000
    // console.log("Annual Salary Before Tax:", annualSalary); // 101694.92 + 18305.08 /2
    // console.log(
    //   "Annual Salary After Tax:",
    //   ((data.annualSalary / 118) * 100).toFixed(2)
    // ); //101694.92

    // console.log("Tax Amount In total:", taxAmount);
    // console.log("CTax:", CGST);
    // console.log("STax:", SGST);
    // console.log("Commission:", commission); // 9227.36 + 110772.64=> base
    // console.log("Net Salary:", netSalary);
    reset();
  };
  // console.log(instance);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='p-4 sm:p-8 space-y-4'>
        <div className={'grid grid-cols-2 gap-2'}>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='enquirerName' className={'text-sm font-semibold'}>
              Enquirer Name
            </label>
            <input
              id='enquirerName'
              type='text'
              className='w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500'
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
              className='w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500'
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

        <div className={'grid grid-cols-2 gap-2'}>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='email' className={'text-sm font-semibold'}>
              Your email
            </label>
            <input
              id='email'
              type='email'
              className='w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500'
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
              className='w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: example@gmail.com'
              {...register('phoneNo', {
                required: 'This field is required',
              })}
            />
            {errors.phoneNo && <FormError error={errors?.phoneNo.message} />}
          </div>
        </div>

        <div className={'grid grid-cols-2 gap-2'}>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='location' className={'text-sm font-semibold'}>
              Location
            </label>
            <input
              id='location'
              type='text'
              className='w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500'
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
              className='w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500'
              placeholder='Ex: Project manager'
              {...register('jobRole', {
                required: 'This field is required',
              })}
            />
            {errors.jobRole && <FormError error={errors?.jobRole.message} />}
          </div>
        </div>

        <div className={'grid grid-cols-2 gap-2'}>
          <div className={'flex flex-col gap-2'}>
            <label htmlFor='monthlySalary' className={'text-sm font-semibold'}>
              Monthly Salary
            </label>
            <input
              id='monthlySalary'
              type='number'
              className='w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500'
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
              className='w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500 select-none'
              {...register('annualSalary')}
            />
          </div>
        </div>

        <div className={'flex flex-col gap-2'}>
          <label htmlFor='peopleCount' className={'text-sm font-semibold'}>
            How many people in your office ?
          </label>
          <select
            className='rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring'
            id='peopleCount'
            {...register('peopleCount', {
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
          {errors.peopleCount && (
            <FormError error={errors?.peopleCount.message} />
          )}
        </div>

        <div className={'flex flex-col gap-2'}>
          <label htmlFor='about' className={'text-sm font-semibold'}>
            Tell us about your company
          </label>
          <textarea
            id='about'
            rows={5}
            className='mb-8 w-full resize-none overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500'
            {...register('about')}></textarea>
        </div>
        {!formData && !calculations && (
          <button className='w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white'>
            Send
          </button>
        )}
        {formData && calculations && (
          <PDFDownloadLink
            document={
              <InvoicePDF data={formData} calculations={calculations} />
            }
            fileName='invoice.pdf'
            className='w-full flex justify-center items-center rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white'>
            {({ loading }) =>
              loading ? 'Loading document...' : 'Download Invoice'
            }
          </PDFDownloadLink>
        )}
      </form>

      {/* {instance.url !== null && (
        <a
          href={instance.url}
          download={'invoice.pdf'}
          className='w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white'>
          Download PDF
        </a>
      )} */}
    </>
  );
}

function FormError({ error }: { error: string | undefined }) {
  return <p className={'text-xs text-red-500 font-normal'}>{error}</p>;
}
