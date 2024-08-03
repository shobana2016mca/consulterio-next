export default function FormError({ error }: FormError) {
  return (
    <p className='text-xs font-normal leading-6 text-red-500 ms-2'>{error}</p>
  );
}
