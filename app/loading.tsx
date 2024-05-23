import { ImSpinner2 } from 'react-icons/im';
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={'flex justify-center items-center h-screen'}>
      <ImSpinner2 className={'size-12 animate-spin stroke-sky-700'} />
    </div>
  );
}
