interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner({ bannerUrl, title, adsCount }: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} alt="" />
      <div className='absolute bottom-0 w-full pt-16 pb-4 px-4 bg-game-gradient'>
        <strong className='block text-white font-bold'>{title}</strong>
        <span className='text-zinc-300 text-sm'>{adsCount} anúncio(s)</span>
      </div>
    </a>
  );
}