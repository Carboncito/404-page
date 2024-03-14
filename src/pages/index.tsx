import { Button } from '@/components';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen p-5`}>
      <div className="flex flex-row flex-1">
        <div className="flex flex-1 items-center">
          <div>
            <img src="/img/warning.png" alt="404" width={300} height={60} />
          </div>
        </div>
        <div className="flex flex-1 items-center flex-col justify-center">
          <h1 className="text-9xl">404</h1>
          <p className="text-lg text-left">
            Ops! The page you are looking might be removed or is temporarily
            unavailable
          </p>
          <Button label="Back to Home" className="justify-start mt-14" />
        </div>
      </div>
    </main>
  );
}
