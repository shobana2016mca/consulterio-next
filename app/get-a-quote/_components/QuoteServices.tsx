export default function QuoteServices({ content }: QuoteServicesProps) {
  return (
    <div className={'flex font-medium'}>
      <div className='mr-4'>
        <content.icon className='text-blue-600 size-4 md:size-6' />
      </div>
      <div className='space-y-1'>
        <p className=''>{content.title}</p>
        <span className='block text-sm font-normal text-gray-600'>
          {content.description}
        </span>
      </div>
    </div>
  );
}
