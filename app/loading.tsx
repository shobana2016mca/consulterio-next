import { ImSpinner2 } from 'react-icons/im';
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      className={
        'flex justify-center items-center h-screen backdrop-blur-xl bg-gradient-to-tr from-sky-900 via-blue-800 to-indigo-900'
      }>
      <ImSpinner2 className={'size-12 animate-spin text-sky-200'} />
    </div>
  );
}
