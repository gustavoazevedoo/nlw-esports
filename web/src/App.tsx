import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

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
    const response = await fetch('http://localhost:3333/games')
    const data = await response.json();

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

        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 bg-black/60' />

          <Dialog.Content className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  py-8 px-10 bg-[#2A2634] text-white rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='font-black text-3xl'>
              Publique um anúncio
            </Dialog.Title>

            <form className='mt-8 grid gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                <Input id="game" placeholder='Selecione o game que deseja jogar' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='font-semibold'>Seu nome (ou nickname</label>
                <Input id="name" placeholder='Como te chamam dentro do game?' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying" className='font-semibold'>Joga há quantos anos?</label>
                  <Input id="yearsPlaying" type="number" placeholder='Tudo bem ser ZERO' />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord" className='font-semibold'>Qual seu Discord?</label>
                  <Input id="discord" placeholder='Usuario#0000' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays" className='font-semibold'>Quando costuma jogar?</label>

                  <div className='grid grid-cols-4 gap-y-2'>
                    <button 
                      title='Domingo' 
                      className='w-10 h-10 rounded bg-zinc-900 font-bold'
                    >
                      D
                    </button>
                    <button 
                      title='Segunda' 
                      className='w-10 h-10 rounded bg-zinc-900 font-bold'
                    >
                      S
                    </button>
                    <button 
                      title='Terça' 
                      className='w-10 h-10 rounded bg-zinc-900 font-bold'
                    >
                      T
                    </button>
                    <button 
                      title='Quarta' 
                      className='w-10 h-10 rounded bg-zinc-900 font-bold'
                    >
                      Q
                    </button>
                    <button 
                      title='Quinta' 
                      className='w-10 h-10 rounded bg-zinc-900 font-bold'
                    >
                      Q
                    </button>
                    <button 
                      title='Quinta' 
                      className='w-10 h-10 rounded bg-zinc-900 font-bold'
                    >
                      Q
                    </button>
                    <button 
                      title='Quinta' 
                      className='w-10 h-10 rounded bg-zinc-900 font-bold'
                    >
                      Q
                    </button>

                  </div>
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="hourStart" className='font-semibold'>Qual horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input id="hourStart" type="time" placeholder='De' />
                    <Input id="hourEnd" type="time" placeholder='Até' />
                  </div>
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm'>
                <input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close 
                  className='font-semibold h-12 px-5 bg-zinc-500 rounded-md hover:bg-zinc-600'
                >
                  Cancelar
                </Dialog.Close>
                <button 
                  type='submit' 
                  className='flex items-center gap-3 bg-violet-500 rounded-md font-semibold h-12 px-5 hover:bg-violet-600'
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
