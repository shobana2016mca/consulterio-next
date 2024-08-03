const JobOpening: React.FC<JobOpeningProps> = ({
  title,
  location,
  salary,
  description,
  bgColor,
}) => {
  return (
    <>
      <article
        className={`${bgColor} flex flex-col grow px-12 py-16 w-full text-xl tracking-wider text-white border border-white border-solid`}>
        <h3 className='text-2xl font-bold tracking-widest'>{title}</h3>
        <div className='mt-4'>{location}</div>
        <div className='mt-10'>{salary}</div>
        <p className='text-lg tracking-wider mt-9'>{description}</p>{' '}
        <div className='text-lg tracking-wider underline capitalize mt-14'>
          view job
        </div>{' '}
      </article>
    </>
  );
};

export default JobOpening;
