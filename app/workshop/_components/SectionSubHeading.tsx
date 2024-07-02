export default function SectionSubHeading({
  children,
  iconLeft,
  iconRight,
}: SectionSubHeadingProps) {
  return (
    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-slate-900 mb-4 inline-flex items-center gap-x-2 w-full justify-center'>
      <span>{iconLeft}</span>
      <span>{children}</span>
      <span>{iconRight}</span>
    </h2>
  );
}
