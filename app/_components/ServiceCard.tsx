export default function ServiceCard({ icon, title, details }: ServiceCardType) {
  return (
    <div className='rounded-lg bg-sky-100 p-4 md:p-6 lg:p-8 xl:p-10 shadow-2 hover:shadow-lg cursor-pointer grid gap-y-2 lg:gap-y-4'>
      <div className='p-4 items-center justify-center rounded-2xl bg-indigo-600 justify-self-start'>
        {icon}
      </div>
      <h4 className='text-lg md:text-xl lg:text-2xl font-semibold text-dark'>
        {title}
      </h4>
      <p className='text-body-color text-xs sm:text-sm lg:text-base'>
        {details}
      </p>
    </div>
  );
}
