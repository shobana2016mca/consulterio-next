export default function QuoteServices({ content }: QuoteServicesProps) {
  return (
    <div className={'flex font-medium'}>
      <div className='mr-4'>
        <content.icon className='size-4 md:size-6 text-blue-500' />
      </div>
      <div className=''>
        <p className='mb-2'>{content.title}</p>
        <span className='font-normal text-gray-600'>{content.description}</span>
      </div>
    </div>
  );
}
