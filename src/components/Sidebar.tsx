import { Briefcase, MessageSquare, FileText, User, Settings, CreditCard, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { img, img1, img2, img3, img4, img5 } from '@/constants/assets';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { id: 'jobs', label: 'Jobs', icon: img, active: true },
  { id: 'ai-mock', label: 'AI Mock Interview', icon: img1 },
  { id: 'resume', label: 'Resume', icon: img2 },
  { id: 'profile', label: 'Profile', icon: img3 },
  { id: 'setting', label: 'Setting', icon: img4 },
  { id: 'subscription', label: 'Subscription', icon: img5 },
  { id: 'extra-credits', label: 'Extra Credits', icon: img5 },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[219px] bg-white overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="px-6 py-6">
          <Logo />
        </div>

        <nav className="flex flex-col gap-[10px] px-0 mt-[30px]">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`
                flex items-center gap-[9px] h-[45px] px-[29px] mx-[12px] rounded-[31px] 
                font-inter font-medium text-button-16 transition-all duration-200
                ${item.active 
                  ? 'bg-primary-muted text-white' 
                  : 'bg-white text-black-primary hover:bg-black-light'
                }
              `}
            >
              <div className="w-[22px] h-[22px] flex items-center justify-center">
                <img src={item.icon} alt="" className="w-full h-full" />
              </div>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto mb-0 h-[255px] relative">
          <div className="absolute left-[20px] top-[41px] w-[179px] h-[214px] rounded-[16px] bg-gradient-purple" />
          <div 
            className="absolute left-[20px] top-[41px] w-[179px] h-[214px] mix-blend-overlay"
            style={{ 
              backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGD4z4AHMAGBKSA+xQUFAEfvAgXD9P0FAAAAAElFTkSuQmCC)',
              backgroundRepeat: 'repeat',
              backgroundSize: '10px 10px'
            }}
          />
          <div className="absolute left-[39px] top-[67px] w-[140px]">
            <p className="font-inter font-medium text-[18px] leading-[24px] tracking-[-0.36px] text-white">
              Upgrade Your Plan
            </p>
          </div>
          <div className="absolute left-[42px] top-[127px] w-[137px] h-[57px]">
            <p className="font-inter font-normal text-body-14 text-white">
              Boost your success rate now!
            </p>
          </div>
          <button className="absolute left-[42px] top-[195px] w-[135px] h-[40px] bg-white rounded-[33px] flex items-center justify-center hover:bg-opacity-90 transition-all">
            <span className="font-inter font-medium text-[16px] leading-[20.3px] tracking-[-0.32px] text-[#19212d]">
              Subscription
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
