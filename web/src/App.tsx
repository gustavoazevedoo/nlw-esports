import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import game1 from './assets/game-1.png';
import game2 from './assets/game-2.png';
import game3 from './assets/game-3.png';
import game4 from './assets/game-4.png';
import game5 from './assets/game-5.png';
import game6 from './assets/game-6.png';
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
  return (
    <div className='mx-auto max-w-[1344px] grid place-items-center'>
      <img src={logoImg} alt="" className='my-20' />

      <h1 className='text-[4rem] text-white font-black mb-16'>
        Seu <span className='
          bg-clip-text 
          text-transparent 
          bg-gradient-to-r 
          from-[#9572FC] 
          via-[#43E7AD] 
          to-[#E1D55D]'
        >duo </span>
        está aqui.
      </h1>

      <div className='grid grid-flow-col gap-6'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game1} alt="" />
          <div className='absolute bottom-0 w-full pt-16 pb-4 px-4 bg-game-gradient'>
            <strong className='block text-white font-bold'>Legue of Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game2} alt="" />
          <div className='absolute bottom-0 w-full pt-16 pb-4 px-4 bg-game-gradient'>
            <strong className='block text-white font-bold'>Dota 2</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game3} alt="" />
          <div className='absolute bottom-0 w-full pt-16 pb-4 px-4 bg-game-gradient'>
            <strong className='block text-white font-bold'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game4} alt="" />
          <div className='absolute bottom-0 w-full pt-16 pb-4 px-4 bg-game-gradient'>
            <strong className='block text-white font-bold'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game5} alt="" />
          <div className='absolute bottom-0 w-full pt-16 pb-4 px-4 bg-game-gradient'>
            <strong className='block text-white font-bold'>Fortnite</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game6} alt="" />
          <div className='absolute bottom-0 w-full pt-16 pb-4 px-4 bg-game-gradient'>
            <strong className='block text-white font-bold'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

      </div>

      <div className='my-8 bg-[#2A2634] w-full max-w-[1200px] py-6 px-8 rounded-lg overflow-hidden flex justify-between items-center relative before:content-[""] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] before:top-0 before:inset-0 before:rounded-lg'>
        <div>
          <strong className='text-2xl text-white font-black block '>
            Não encontrou seu duo?
          </strong>
          <span className='text-zinc-400'>
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <button className='bg-violet-500 hover:bg-violet-600 text-white font-medium py-3 px-4 rounded-md flex items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  )
}

export default App
