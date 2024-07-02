const Card: React.FC<CardProps> = ({ id, title, description }) => {
  return (
    <article className='flex flex-col grow items-start px-10 py-12 w-full bg-white rounded-md shadow-sm text-sky-950 hover:border-t hover:border-indigo-700 transition-all ease-in-out delay-150 duration-500 cursor-pointer'>
      <h2 className='mt-5 text-2xl capitalize'>{id}</h2>
      <h2 className='mt-5 text-2xl capitalize'>{title}</h2>
      <p className={'mt-6 text-base tracking-widerdescription'}>
        {description}
      </p>
    </article>
  );
};

export default Card;
