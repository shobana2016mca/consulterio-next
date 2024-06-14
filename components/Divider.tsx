export default function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full items-center rounded-full'>
      <div className='flex-1 border-b border-gray-300'></div>
      <span className='text-black text-lg font-semibold leading-8 px-8 py-3'>
        {children}
      </span>
      <div className='flex-1 border-b border-gray-300'></div>
    </div>
  );
}
