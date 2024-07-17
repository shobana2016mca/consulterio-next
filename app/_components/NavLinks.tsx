import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '../_constants';
import { classNames } from '../_lib/utils';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              isActive
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-sky-700 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}>
            {item.name}
          </Link>
        );
      })}
    </>
  );
}
