export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={'max-w-[85rem] mx-auto px-6 2xl:px-0'}>{children}</div>
  );
}
