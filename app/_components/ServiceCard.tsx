export default function ServiceCard({ icon, title, details }: ServiceCardType) {
  return (
    <div className='grid p-4 rounded-lg cursor-pointer bg-sky-100 md:p-6 lg:p-8 xl:p-10 shadow-2 hover:shadow-lg gap-y-2 lg:gap-y-4'>
      <div className='items-center justify-center p-4 bg-indigo-600 rounded-2xl justify-self-start'>
        {icon}
      </div>
      <h4 className='text-lg font-semibold md:text-xl lg:text-2xl text-dark'>
        {title}
      </h4>
      <p className='text-xs text-body-color sm:text-sm lg:text-base'>
        {details}
      </p>
    </div>
  );
}
