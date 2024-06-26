export default function FormError({ error }: { error: string | undefined }) {
  return (
    <p className='text-red-500 ms-2 text-xs font-normal leading-6'>{error}</p>
  );
}
