"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseIcon,
  AIMockIcon,
  ResumeIcon,
  ProfileIcon,
  SettingsIcon,
  SubscriptionIcon,
} from "@/components/icons";

export function Sidebar() {
  const pathname = usePathname();
  
  const topNavItems = [
    { icon: BriefcaseIcon, label: "Jobs", href: "/", active: pathname === "/" || pathname.startsWith("/job") },
    { icon: AIMockIcon, label: "AI Mock Interview", href: "#", active: false },
    { icon: ResumeIcon, label: "Resume", href: "#", active: false },
  ];

  const middleNavItems = [
    { icon: ProfileIcon, label: "Profile", href: "#", active: false },
    { icon: SettingsIcon, label: "Setting", href: "#", active: false },
  ];

  const bottomNavItems = [
    { icon: SubscriptionIcon, label: "Subscription", href: "#", active: false },
    { icon: () => <Image src="/images/credits.svg" alt="Credits" width={22} height={22} />, label: "Extra Credits", href: "#", active: false },
  ];

  const NavButton = ({ item }: { item: { icon: React.ComponentType<{ className?: string }> | (() => React.ReactNode); label: string; href: string; active: boolean } }) => (
    <Link
      href={item.href}
      className={`flex items-center gap-[9px] pl-[17px] pr-[29px] py-[11px] rounded-[var(--radius-button)] w-full transition-colors text-left ${
        item.active
          ? "bg-surface-accent text-content-inverse"
          : "bg-transparent text-[#1D2633] hover:bg-surface-page"
      }`}
    >
      <div className="w-[22px] h-[22px] flex items-center justify-center shrink-0">
        {typeof item.icon === 'function' && 'length' in item.icon && item.icon.length === 0 ? (item.icon as () => React.ReactNode)() : <item.icon className="w-full h-full" />}
      </div>
      <span className="text-[16px] font-medium leading-[20px] tracking-[-0.32px] whitespace-nowrap">
        {item.label}
      </span>
    </Link>
  );

  return (
    <aside className="w-[var(--spacing-sidebar-width)] bg-surface-primary h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="px-[12px] py-[20px] flex items-center justify-center">
        <Image
          src="/images/jobnova.svg"
          alt="JobNova"
          width={180}
          height={60}
          className="object-contain"
          priority
        />
      </div>

      <nav className="flex-1 py-[10px]">
        {/* Top nav items */}
        <div className="flex flex-col gap-[10px]">
          {topNavItems.map((item) => (
            <div key={item.label} className="px-[12px] py-0">
              <NavButton item={item} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-[10px] mx-[15px] h-[1px] bg-[#DFDFDF]" />

        {/* Middle nav items */}
        <div className="flex flex-col gap-[10px]">
          {middleNavItems.map((item) => (
            <div key={item.label} className="px-[12px] py-0">
              <NavButton item={item} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-[10px] mx-[15px] h-[1px] bg-[#DFDFDF]" />

        {/* Bottom nav items */}
        <div className="flex flex-col gap-[10px]">
          {bottomNavItems.map((item) => (
            <div key={item.label} className="px-[12px] py-0">
              <NavButton item={item} />
            </div>
          ))}
        </div>
      </nav>

      <div className="p-[20px]">
        <div
          className="rounded-[var(--radius-lg)] p-[20px] relative overflow-hidden"
          style={{
            backgroundImage: `url("/images/circle-radiant.svg"), linear-gradient(-47deg, #CBBAFF 0%, #C89FF3 54%, #7248F1 100%)`,
            backgroundSize: "cover, auto",
            backgroundPosition: "center, center",
          }}
        >
          <h4 className="text-[18px] font-medium text-content-inverse leading-[24px] tracking-[-0.36px] mb-[12px]">
            Upgrade Your Plan
          </h4>
          <p className="text-[14px] font-normal text-content-inverse leading-[22px] tracking-[-0.28px] mb-[16px] opacity-90">
            Boost your success rate now!
          </p>
          <button className="bg-surface-primary text-content-secondary px-[20px] py-[10px] rounded-[var(--radius-2xl)] text-[16px] font-medium leading-[20px] tracking-[-0.32px]">
            Subscription
          </button>
        </div>
      </div>
    </aside>
  );
}
