import useAudio from './UseAudio';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

gsap.registerPlugin(ScrollToPlugin);

const Index = () => {

  const data = [
    {
      "id": "X",
      "letter": "X",
      "name": "VOILÀ x GRAND 8",
      "bio": "Improvisées et non montées, simplement mixées, les pistes audio regroupées ici constituent l’archive du processus d’épuisement mené par le duo du 11 au 14 novembre 2021 à Caen (LABA).",
    },
    {
      "id": "H",
      "letter": "8",
      "name": "GRAND 8",
      "bio": "Composé de Clément et Jean, le duo de musiciens GRAND 8 ..........................",
    },
    {
      "id": "V",
      "letter": "V",
      "name": "VOILÀ",
      "bio": "Simplement mis en page, les 88 polaroids de la série VOILÀ regroupées dans cette édition constituent l’archive de sculptures éphémères réalisées par Rodrigue de Ferluc de 2017 à 2021.",
    },
    {
      "id": "P",
      "letter": "P",
      "name": "PROTOCOLE",
      "bio": "Choisir un matériau/matière unique, Opérer une transformation éphémère et non-préméditée, Archiver l’expérience Recommencer jusqu’à épuisement",
    },
    {
      "id": "CM",
      "letter": "CM",
      "name": "CLASSE MOYENNE EDITIONS",
      "bio": "Fondée par Marie et Romain, la maison d’éditions Classe Moyenne ........",
    },
    {
      "id": "OR",
      "letter": "OR",
      "name": "ONTO RECORDS",
      "bio": "Onto Records est un label de musique indépendant fondé à Caen .....",
    },
  ];

  const dots = [
    {
      "id": "0",
      "x": 100,
      "y": 50,
      "piste": "Improvisées et non montées, simplement mixées, les pistes audio regroupées ici constituent l’archive du processus d’épuisement mené par le duo du 11 au 14 novembre 2021 à Caen (LABA).",
    },

  ];

  const audio = useAudio('/piste1.mp3', { volume: 0.8, playbackRate: 1 });
 
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
        <div className='dots' onClick={() => audio.play()}>
        </div>
      
      </div>
      {/* Liste des liens */}
      <div className='flex justify-center'>
        <ul className="link flex flex-wrap text-xl lg:text-2xl">
          {data.map((_data) => {
            const anchor = _data.id;
            const handleScroll = () => {
              gsap.to(window, { duration: 2, scrollTo: { y: "#" + anchor, offsetY: 250 } });
            }
            return (
              <li key={_data.letter} className="mr-10 md:mr-14">
                {/* <Link href={`#${_data.letter}`}> */}
                <a onClick={handleScroll} className="border-none text-black hover:text-blue-700">
                  {_data.letter}
                </a>
                {/* </Link> */}
              </li>
            )
          })}
        </ul>
      </div>
      {/* titre+sous-titre */}
      <div className='flex justify-center flex-col mt-16 leading-none lg:text-2xl'>
        <p className='text-center my-1'>VOILÀ x GRAND 8</p>
        <p className='text-center my-1'>CLASSE MOYENNE ÉDITIONS x ONTO </p>
      </div>
      <hr className='w-1/2 mx-6 md:mx-auto border-2 mt-20 border-black'></hr>
      <div className='relative md:left-28'>
        {data.map((_data) => (
          <div key={_data.letter} className='mt-52 px-5 grid grid-cols-2 md:grid-cols-bio justify-end gap-4'>
            <h2 className='text-7xl md:text-bigLetter text-center leading-bigLetter'>{_data.letter}</h2>
            <div id={_data.id} className="md:w-colRight">
              <h3 className='text-2xl'>
                {_data.name}
              </h3>
              <p className='text-xs xl:text-base'>
                {_data.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default Index;
