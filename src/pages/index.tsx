import { useRouter } from 'next/router';
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Voilà X Grand8"
          description="Pour la sortie du livre Voilà, Rodrigue de Ferluc a collaboré avec le duo de musicien Grand 8"
        />
      }
    >
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src="/sphere_3D.jpg"
          alt="sph"
        />
      </a>
      <div className='flex justify-center'>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-14">
              <Link href="/">
                <a className="border-none text-gray-900 hover:text-blue-700">
                  X
                </a>
              </Link>
            </li>
            <li className="mr-14">
              <Link href="/about/">
                <a className="border-none text-gray-900 hover:text-blue-700">
                  8
                </a>
              </Link>
            </li>
            <li className="mr-14">
              <a
                className="border-none text-gray-900 hover:text-blue-700"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                V
              </a>
            </li>
            <li className="mr-14">
              <a
                className="border-none text-gray-900 hover:text-blue-700"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                P
              </a>
            </li>
            <li className="mr-14">
              <a
                className="border-none text-gray-900 hover:text-blue-700"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                CM
              </a>
            </li>
            <li className="">
              <a
                className="border-none text-gray-900 hover:text-blue-700"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                OR
              </a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center flex-col mt-16 leading-none'>
          <p className='text-center my-1'>VOILÀ x GRAND 8</p>
          <p className='text-center my-1'>CLASSE MOYENNE ÉDITIONS x ONTO </p>
</div>
    <hr className='w-1/2 mx-auto border-2 mt-20 border-black'></hr>
    </Main>
  );
};

export default Index;
