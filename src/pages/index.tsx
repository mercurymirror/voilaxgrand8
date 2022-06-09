import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="Voilà X Grand8"
          description="Pour la sortie du livre Voilà, Rodrigue de Ferluc a collaboré avec le duo de musicien Grand 8"
        />
      }
    >
      <div className='relative flex justify-center my-10 mx-4'>
        <img
          src="/sphere_3D.jpg"
          alt="sph"
          width="600"
        />
        <p className='huit absolute'>8</p>
        </div>
      {/* Liste des liens */}
      <div className='flex justify-center'>
        <ul className="flex flex-wrap text-xl lg:text-3xl">
          <li className="mr-10 md:mr-14">
            <Link href="#X">
              <a className="border-none text-black hover:text-blue-700">
                X
              </a>
            </Link>
          </li>
          <li className="mr-10 md:mr-14">
            <Link href="#8">
              <a className="border-none text-black hover:text-blue-700">
                8
              </a>
            </Link>
          </li>
          <li className="mr-10 md:mr-14">
            <a
              className="border-none text-black hover:text-blue-700"
              href="#V"
            >
              V
            </a>
          </li>
          <li className="mr-10 md:mr-14">
            <a
              className="border-none text-black hover:text-blue-700"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              P
            </a>
          </li>
          <li className="mr-10 md:mr-14">
            <a
              className="border-none text-black hover:text-blue-700"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              CM
            </a>
          </li>
          <li className="">
            <a
              className="border-none text-black hover:text-blue-700"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              OR
            </a>
          </li>
        </ul>
      </div>
      {/* titre+sous-titre */}
      <div className='flex justify-center flex-col mt-16 leading-none lg:text-2xl'>
        <p className='text-center my-1'>VOILÀ x GRAND 8</p>
        <p className='text-center my-1'>CLASSE MOYENNE ÉDITIONS x ONTO </p>
      </div>
      <hr className='w-1/2 mx-auto border-2 mt-20 border-black'></hr>
      {/* Ancer X */}
      <div className='mt-52 md:ml-52 grid grid-cols-2 justify-end max-w-xl gap-4'>
        <h2 className='text-10xl md:text-bigLetter text-center leading-bigLetter'>X</h2>
        <div id='X'>
          <h3 className='text-3xl'>
            VOILÀ X GRAND 8
          </h3>
          <p className='text-xs xl:text-base'>
            Improvisées et non montées, simplement mixées, les pistes audio regroupées ici constituent l’archive du processus d’épuisement mené par le duo du 11 au 14 novembre 2021 à Caen (LABA).
          </p>
        </div>
      </div>
      {/* Ancer 8 */}
      <div className='mt-52 md:ml-52 grid grid-cols-2 justify-end max-w-xl gap-4'>
        <h2 className='text-10xl md:text-bigLetter text-center leading-bigLetter'>8</h2>
        <div id='8'>
          <h3 className='text-3xl'>
          GRAND 8
          </h3>
          <p className='text-xs xl:text-base'>
          Composé de Clément et Jean, le duo de musiciens GRAND 8 <br/>

Composed by Clément and Jean, the duo of musicians GRAND 8 </p>
        </div>
      </div>
          {/* Ancer V */}
          <div className='mt-52 md:ml-52 grid grid-cols-2 justify-end max-w-xl gap-4'>
        <h2 className='text-10xl md:text-bigLetter text-center leading-bigLetter'>V</h2>
        <div id='V'>
          <h3 className='text-3xl'>
          GRAND 8
          </h3>
          <p className='text-xs xl:text-base'>
          Composé de Clément et Jean, le duo de musiciens GRAND 8 <br/>

Composed by Clément and Jean, the duo of musicians GRAND 8 </p>
        </div>
      </div>
    </Main>
  );
};

export default Index;
