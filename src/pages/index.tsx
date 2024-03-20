import { Button } from '@/components';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className={`flex min-h-screen p-5`}>
      <div className="flex flex-row flex-1 m-6">
        <Card className="text-color-grey text-center">
          <div className="grid grid-flow-col grid-rows-2 place-items-center">
            <img src="./img/warning.png" alt="404" width="100%" height="auto" className=" min-h-80 min-w-80" />
            <div className="">
              <h1 className="text-9xl">404</h1>
              <div className="text-6xl sm:text-3xl">Ops! So sorry</div>
              <p className="text-lg font-medium">The page you are looking for cannot be found</p>
            </div>
          </div>
        </Card>
        {/* <div className="flex flex-1 items-center">
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
        </div> */}
      </div>
    </main>
  );
}
