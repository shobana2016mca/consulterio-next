export default function SectionSubHeading({
  children,
  iconLeft,
  iconRight,
}: SectionSubHeadingProps) {
  return (
    <h2 className='inline-flex items-center justify-center w-full mb-4 text-2xl font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 gap-x-2'>
      <span>{iconLeft}</span>
      <span>{children}</span>
      <span>{iconRight}</span>
    </h2>
  );
}
