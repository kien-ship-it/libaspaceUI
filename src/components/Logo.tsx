import { imgLogo } from '@/constants/assets';

export function Logo() {
  return (
    <div className="relative w-[147px] h-[40px]" data-name="LOGO">
      <img
        src={imgLogo}
        alt="JobNova Logo"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
