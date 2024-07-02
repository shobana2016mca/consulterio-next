export default function FormError({ error }: FormError) {
  return (
    <p className='text-red-500 ms-2 text-xs font-normal leading-6'>{error}</p>
  );
}
