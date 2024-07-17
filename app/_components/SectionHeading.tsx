import { classNames } from '../_lib/utils';

export default function SectionHeading({
  children,
  center,
  color,
}: {
  children: string;
  center?: boolean;
  color?: string;
}) {
  return (
    <h2
      className={classNames(
        center ? 'text-center' : 'text-start',
        color ? color : 'text-black ',
        'font-sans font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-lg:text-center relative'
      )}>
      {children}
    </h2>
  );
}
