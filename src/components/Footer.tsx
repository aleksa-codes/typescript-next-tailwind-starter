const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center justify-center border-t py-4'>
      <p className='text-center text-sm'>
        © {new Date().getFullYear()}{' '}
        <a
          href='https://www.nextjs.org'
          className='underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Next.js
        </a>{' '}
        +{' '}
        <a
          href='https://www.typescriptlang.org'
          className='underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          TypeScript
        </a>{' '}
        +{' '}
        <a
          href='https://tailwindcss.com'
          className='underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          TailwindCSS
        </a>{' '}
        ={' '}
        <a
          href='https://www.github.com/aleksastojsic/typescript-next-tailwind-start'
          className='underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Starter
        </a>{' '}
        ✌️ Have a great {days[new Date().getDay()]}!
      </p>
    </footer>
  );
};

export default Footer;
