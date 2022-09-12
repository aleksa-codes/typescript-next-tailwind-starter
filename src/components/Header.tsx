import Link from 'next/link';
import { useState } from 'react';
// import DarkMode from './DarkMode';

const navItems = [
  {
    href: '/page1',
    label: 'Page 1'
  },
  {
    href: '/page2',
    label: 'Page 2'
  },
  {
    href: '/page3',
    label: '404'
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 rounded-full bg-black transition ease transform duration-300`;
  return (
    <nav>
      <div className='flex flex-row items-center justify-between py-4 md:py-8'>
        <Link href='/'>
          <a className='flex items-center gap-4 font-bold hover:underline md:text-2xl'>
            Logo
          </a>
        </Link>
        <div className='flex flex-row items-center'>
          <ul className='hidden p-0 md:flex md:flex-row md:gap-8'>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
          {/* <DarkMode /> */}
          <button
            className='group flex h-10 w-10 flex-col items-center justify-center rounded border-2 md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'my-1 translate-y-3 rotate-45 opacity-50 group-hover:opacity-100'
                  : 'my-[2px] opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'my-1 opacity-0'
                  : 'my-[2px] opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'my-1 -translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100'
                  : 'my-[2px] opacity-50 group-hover:opacity-100'
              }`}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <div className='bg-base-100 flex flex-col items-center gap-4 p-4 md:hidden'>
            {navItems.map(({ href, label }) => (
              <Link href={href} key={href}>
                <a>{label}</a>
              </Link>
            ))}
          </div>
          <hr className='mx-4 md:hidden' />
        </div>
      )}
    </nav>
  );
};

export default Header;
