import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from './Form/Input';
import { Check, GameController } from 'phosphor-react';

interface Game {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  async function listGames() {
    const { data } = await axios('http://localhost:3333/games')

    setGames(data)
  }

  useEffect(() => {
    listGames();
  }, [])

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)

    if (!data.name) return

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel
      })

      alert('Anúncio criado com sucesso')
    } catch (error) {
      console.log(error) 
      alert('Erro ao criar o anúncio')
    }

  }

  return (

    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-black/60' />

      <Dialog.Content className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  py-8 px-10 bg-[#2A2634] text-white rounded-lg w-[480px] shadow-lg shadow-black/25'>
        <Dialog.Title className='font-black text-3xl'>
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAd} className='mt-8 grid gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="game" className='font-semibold'>Qual o game?</label>
            <select
              id="game"
              name='game'
              className='bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-500 text-sm appearance-none'
              defaultValue=""
            >
              <option disabled value="">Selecione o game que deseja jogar</option>
              {games.map((game) => (
                <option key={game.id} value={game.id}>{game.title}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='font-semibold'>Seu nome (ou nickname)</label>
            <Input id="name" name="name" placeholder='Como te chamam dentro do game?' />
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearsPlaying" className='font-semibold'>Joga há quantos anos?</label>
              <Input id="yearsPlaying" name='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="discord" className='font-semibold'>Qual seu Discord?</label>
              <Input id="discord" name='discord' placeholder='Usuario#0000' />
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="weekDays" className='font-semibold'>Quando costuma jogar?</label>

              <ToggleGroup.Root
                type='multiple'
                className='grid grid-cols-4 gap-y-2'
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title='Domingo'
                  className={`w-10 h-10 rounded font-bold ${weekDays.includes("0") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title='Segunda'
                  className={`w-10 h-10 rounded font-bold ${weekDays.includes("1") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title='Terça'
                  className={`w-10 h-10 rounded font-bold ${weekDays.includes("2") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title='Quarta'
                  className={`w-10 h-10 rounded font-bold ${weekDays.includes("3") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title='Quinta'
                  className={`w-10 h-10 rounded font-bold ${weekDays.includes("4") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title='Sexta'
                  className={`w-10 h-10 rounded font-bold ${weekDays.includes("5") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title='Sábado'
                  className={`w-10 h-10 rounded font-bold ${weekDays.includes("6") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>

            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor="hourStart" className='font-semibold'>Qual horário do dia?</label>
              <div className='grid grid-cols-2 gap-2'>
                <Input id="hourStart" name='hourStart' type="time" placeholder='De' />
                <Input id="hourEnd" name='hourEnd' type="time" placeholder='Até' />
              </div>
            </div>
          </div>

          <label className='mt-2 flex gap-2 text-sm items-center'>
            <Checkbox.Root
              className='bg-zinc-900 w-6 h-6 rounded'
              checked={useVoiceChannel}
              onCheckedChange={(checked) => checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false)}
            >
              <Checkbox.Indicator className='bg-[#18181B] w-6 h-6 rounded flex items-center justify-center text-emerald-400'>
                <Check size={16} />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

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
  );
}