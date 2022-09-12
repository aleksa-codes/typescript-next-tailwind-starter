import Footer from '../Footer';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex h-full flex-col items-center'>
      <main className='flex h-full min-h-screen w-full max-w-4xl flex-col px-4'>
        <div className='flex-grow'>
          <Header />
          <div className='prose min-w-full lg:prose-lg'>{children}</div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
