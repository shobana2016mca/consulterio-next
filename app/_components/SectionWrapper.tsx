export default function SectionWrapper({ children }: ChildrenPropType) {
  return (
    <div className={'max-w-[85rem] mx-auto px-4 md:px-6 2xl:px-0'}>
      {children}
    </div>
  );
}
