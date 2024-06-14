export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={'max-w-[85rem] mx-auto'}>{children}</div>;
}
