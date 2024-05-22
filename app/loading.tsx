import { ImSpinner2 } from 'react-icons/im';
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      className={
        'flex justify-center items-center h-screen bg-sky-950/20 backdrop-blur-sm'
      }>
      <ImSpinner2 className={'size-12 animate-spin stroke-sky-700'} />
    </div>
  );
}
