"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InvoicePDF from "./InvoicePDF";

type Inputs = {
  enquirerName: string;
  companyName: string;
  location: string;
  jobRole: string;
  monthlySalary: number;
  annualSalary: number;
  peopleCount: string;
  about: string;
};

type Calculations = {
  commission: number;
  taxAmount: number;
  CGST: number;
  SGST: number;
  netSalary: number;
};

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({
    defaultValues: {
      enquirerName: "Jhon Doe",
      companyName: "XYZ Company",
      location: "Chennai",
      jobRole: "Project manager",
      // monthlySalary: 0,
      // annualSalary: 0,
      peopleCount: "",
      about: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  });
  // const [instance, updateInstance] = usePDF({ document: '' });
  const [formData, setFormData] = useState<Inputs>();
  const [calculations, setCalculations] = useState<Calculations>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
    const annualSalary = data.annualSalary;
    const commission = Math.round((annualSalary / 100) * 8.33);
    const taxAmount = Math.round((annualSalary / 100) * 18);
    const CGST = Math.round((annualSalary / 100) * 9);
    const SGST = Math.round((annualSalary / 100) * 9);
    const netSalary = annualSalary - taxAmount - commission;

    setFormData(data);
    setCalculations({ commission, taxAmount, CGST, SGST, netSalary });

    console.log("monthlySalary:", data.monthlySalary);
    console.log("Annual Salary:", annualSalary);
    console.log("Tax Amount:", taxAmount);
    console.log("CTax:", CGST);
    console.log("STax:", SGST);
    console.log("Commission:", commission);
    console.log("Net Salary:", netSalary);
  };
  // console.log(instance);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-8 space-y-4">
        <div className={"flex gap-2"}>
          <div className={"flex flex-col gap-2"}>
            <label htmlFor="enquirerName" className={"text-sm font-semibold"}>
              Enquirer Name
            </label>
            <input
              id="enquirerName"
              type="text"
              className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              placeholder="Ex: Jhon Doe"
              {...register("enquirerName", {
                required: "This field is required",
              })}
            />
            {errors.enquirerName && (
              <FormError error={errors?.enquirerName.message} />
            )}
          </div>

          <div className={"flex flex-col gap-2"}>
            <label htmlFor="companyName" className={"text-sm font-semibold"}>
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              placeholder="Ex: XYZ Company"
              {...register("companyName", {
                required: "This field is required",
              })}
            />
            {errors.companyName && (
              <FormError error={errors?.companyName.message} />
            )}
          </div>
        </div>

        <div className={"flex gap-2"}>
          <div className={"flex flex-col gap-2"}>
            <label htmlFor="location" className={"text-sm font-semibold"}>
              Location
            </label>
            <input
              id="location"
              type="text"
              className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              placeholder="Ex: Chennai"
              {...register("location", {
                required: "This field is required",
              })}
            />
            {errors.location && <FormError error={errors?.location.message} />}
          </div>
          <div className={"flex flex-col gap-2"}>
            <label htmlFor="jobRole" className={"text-sm font-semibold"}>
              Job Role
            </label>
            <input
              id="jobRole"
              type="text"
              className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              placeholder="Ex: Project manager"
              {...register("jobRole", {
                required: "This field is required",
              })}
            />
            {errors.jobRole && <FormError error={errors?.jobRole.message} />}
          </div>
        </div>

        <div className={"flex gap-2"}>
          <div className={"flex flex-col gap-2"}>
            <label htmlFor="monthlySalary" className={"text-sm font-semibold"}>
              Monthly Salary
            </label>
            <input
              id="monthlySalary"
              type="number"
              className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              placeholder="Ex: 120000"
              {...register("monthlySalary", {
                required: "This field is required",
                valueAsNumber: true,
                onChange: (e) => {
                  const value = e.target.value as number;
                  setValue("annualSalary", Math.round(value * 12));
                },
              })}
            />
            {errors.monthlySalary && (
              <FormError error={errors?.monthlySalary.message} />
            )}
          </div>
          <div className={"flex flex-col gap-2"}>
            <label htmlFor="annualSalary" className={"text-sm font-semibold"}>
              Annual Salary
            </label>
            <input
              id="annualSalary"
              type="number"
              disabled
              className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500 select-none"
              {...register("annualSalary")}
            />
          </div>
        </div>

        <div className={"flex flex-col gap-2"}>
          <label htmlFor="peopleCount" className={"text-sm font-semibold"}>
            How many people in your office ?
          </label>
          <select
            className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
            id="peopleCount"
            {...register("peopleCount", {
              validate: (value) => {
                if (!value) {
                  return "This field is required";
                }
              },
            })}
          >
            <option value="">Select employee</option>
            <option value="2-10">2-10</option>
            <option value="11-20">11-20</option>
            <option value="50-100">50-100</option>
          </select>
          {errors.peopleCount && (
            <FormError error={errors?.peopleCount.message} />
          )}
        </div>

        <div className={"flex flex-col gap-2"}>
          <label htmlFor="about" className={"text-sm font-semibold"}>
            Tell us about your company
          </label>
          <textarea
            id="about"
            rows={5}
            className="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
            {...register("about")}
          ></textarea>
        </div>

        <button className="w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white">
          Send
        </button>
      </form>

      {formData && calculations && (
        <PDFDownloadLink
          document={<InvoicePDF data={formData} calculations={calculations} />}
          fileName="invoice.pdf"
          className="w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white"
        >
          {({ loading }) =>
            loading ? "Loading document..." : "Download Invoice"
          }
        </PDFDownloadLink>
      )}
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
  return <p className={"text-xs text-red-500 font-normal"}>{error}</p>;
}
