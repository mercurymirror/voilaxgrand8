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
        <ul className="flex flex-wrap text-xl lg:text-2xl">
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
              href="#P"
            >
              P
            </a>
          </li>
          <li className="mr-10 md:mr-14">
            <a
              className="border-none text-black hover:text-blue-700"
              href="#CM"
            >
              CM
            </a>
          </li>
          <li className="">
            <a
              className="border-none text-black hover:text-blue-700"
              href="#OR"
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
      <div className='relative md:left-28'>
      {/* Ancer X */}
      <div className='mt-52 px-5 grid grid-cols-2 md:grid-cols-bio justify-end gap-4'>
        <h2 className='text-7xl md:text-bigLetter text-center leading-bigLetter'>X</h2>
        <div id='X' className="md:w-colRight">
          <h3 className='text-2xl'>
            VOILÀ X GRAND 8
          </h3>
          <p className='text-xs xl:text-base'>
            Improvisées et non montées, simplement mixées, les pistes audio regroupées ici constituent l’archive du processus d’épuisement mené par le duo du 11 au 14 novembre 2021 à Caen (LABA).
          </p>
        </div>
      </div>
     
        {/* Ancer 8 */}
        <div className='mt-52 px-5 grid grid-cols-2 md:grid-cols-bio justify-end gap-4'>
          <h2 className='text-7xl md:text-bigLetter text-center leading-bigLetter'>8</h2>
          <div id='8' className="md:w-colRight">
            <h3 className='text-2xl'>
              GRAND 8
            </h3>
            <p className='text-xs xl:text-base'>
              Composé de Clément et Jean, le duo de musiciens GRAND 8 <br />

              Composed by Clément and Jean, the duo of musicians GRAND 8 </p>
          </div>
        </div>
        {/* Ancer V */}
        <div className='mt-52 px-5 grid grid-cols-2 md:grid-cols-bio justify-end gap-4'>
          <h2 className='text-7xl md:text-bigLetter text-center leading-bigLetter'>V</h2>
          <div id='V' className="md:w-colRight">
            <h3 className='text-2xl'>
              VOILÀ
            </h3>
            <p className='text-xs xl:text-base'>
              Simplement mis en page, les 88 polaroids de la série VOILÀ regroupées dans cette édition constituent l’archive de sculptures éphémères réalisées par
              Rodrigue de Ferluc de 2017 à 2021<br />
              Simply laid out, the 88 polaroids of the VOILÀ series grouped together in this book constitute
              the archive of ephemeral sculptures made by Rodrigue de Ferluc from 2017 to 2021 </p>
          </div>
        </div>
        {/* Ancer P */}
        <div className='mt-52 px-5 grid grid-cols-2 md:grid-cols-bio justify-end gap-4'>
          <h2 className='text-7xl md:text-bigLetter text-center leading-bigLetter'>P</h2>
          <div id='P' className="md:w-colRight">
            <h3 className='text-2xl'>
              PROTOCOLE
            </h3>
            <p className='text-xs xl:text-base'>
              Choisir un matériau/matière unique
              Opérer une transformation éphémère et non-préméditée
              Archiver l’expérience
              Recommencer jusqu’à épuisement
              <br />
              <em>
                Choose a unique material
                Carry out an ephemeral and unpremeditated transformation
                Archive the experience
                Repeat until exhaustion
              </em>
            </p>
          </div>
        </div>
        {/* Ancer CM */}
        <div className='mt-52 px-5 grid grid-cols-2 md:grid-cols-bio justify-end gap-4'>
          <h2 className='text-7xl md:text-bigLetter text-center leading-bigLetter'>CM</h2>
          <div id='CM' className="md:w-colRight">
            <h3 className='text-2xl'>
              CLASSE MOYENNE EDITIONS          </h3>
            <p className='text-xs xl:text-base'>
              Choisir un matériau/matière unique
              Opérer une transformation éphémère et non-préméditée
              Archiver l’expérience
              Recommencer jusqu’à épuisement
              <br />
              <em>
                Choose a unique material
                Carry out an ephemeral and unpremeditated transformation
                Archive the experience
                Repeat until exhaustion
              </em>
            </p>
          </div>
        </div>
        {/* Ancer OR */}
        <div className='mt-52 px-5 grid grid-cols-2 md:grid-cols-bio justify-end gap-4'>
          <h2 className='text-7xl md:text-bigLetter text-center leading-bigLetter'>OR</h2>
          <div id='OR' className="md:w-colRight">
            <h3 className='text-2xl'>
              ONTO RECORDS
            </h3>
            <p className='text-xs xl:text-base'>
              Choisir un matériau/matière unique
              Opérer une transformation éphémère et non-préméditée
              Archiver l’expérience
              Recommencer jusqu’à épuisement
              <br />
              <em>
                Choose a unique material
                Carry out an ephemeral and unpremeditated transformation
                Archive the experience
                Repeat until exhaustion
              </em>
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
