import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';

import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  async function listGames() {
    const { data } = await axios('http://localhost:3333/games')

    setGames(data)
  }

  useEffect(() => {
    listGames();
  }, [])

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

      <div className='grid grid-cols-6 gap-6'>
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
