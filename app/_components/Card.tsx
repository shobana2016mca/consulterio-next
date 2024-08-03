const Card: React.FC<CardProps> = ({ id, title, description }) => {
  return (
    <article className='flex flex-col items-start w-full px-10 py-12 transition-all duration-500 ease-in-out delay-150 bg-white rounded-md shadow-sm cursor-pointer grow text-sky-950 hover:border-t hover:border-indigo-700'>
      <h2 className='mt-5 text-2xl capitalize'>{id}</h2>
      <h2 className='mt-5 text-2xl capitalize'>{title}</h2>
      <p className={'mt-6 text-base tracking-widerdescription'}>
        {description}
      </p>
    </article>
  );
};

export default Card;
