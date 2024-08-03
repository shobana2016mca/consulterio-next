export default function Divider({ children }: ChildrenPropType) {
  return (
    <div className='flex items-center w-full rounded-full'>
      <div className='flex-1 border-b border-gray-300'></div>
      <span className='px-8 py-3 text-lg font-semibold leading-8 text-black'>
        {children}
      </span>
      <div className='flex-1 border-b border-gray-300'></div>
    </div>
  );
}
