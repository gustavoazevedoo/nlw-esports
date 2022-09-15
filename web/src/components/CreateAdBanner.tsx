import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
    <div className='my-8 bg-[#2A2634] w-full py-6 px-8 rounded-lg overflow-hidden flex justify-between items-center relative before:content-[""] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] before:top-0 before:inset-0 before:rounded-lg'>
    <div>
      <strong className='text-2xl text-white font-black block '>
        Não encontrou seu duo?
      </strong>
      <span className='text-zinc-400'>
        Publique um anúncio para encontrar novos players!
      </span>
    </div>

    <Dialog.Trigger className='bg-violet-500 hover:bg-violet-600 text-white font-medium py-3 px-4 rounded-md flex items-center gap-3'>
      <MagnifyingGlassPlus size={24} />
      Publicar anúncio
    </Dialog.Trigger>
  </div>
  )
}