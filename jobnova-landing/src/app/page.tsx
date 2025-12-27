import Image from "next/image";
import {
  BriefcaseIcon,
  AIMockIcon,
  ResumeIcon,
  ProfileIcon,
  SettingsIcon,
  SubscriptionIcon,
  CreditsIcon,
  RefreshIcon,
  FilterIcon,
  LinkIcon,
  HeartIcon,
  LocationIcon,
  WifiIcon,
  AISparkleIcon,
} from "@/components/icons";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  workType: string;
  employmentType: string;
  experience: string;
  level: string;
  salary: string;
  matchPercent: number;
  matchColor: "perfect" | "good" | "fair";
  postedTime: string;
  applicants: number;
  isLiked?: boolean;
}

function MatchCircle({ percent, color }: { percent: number; color: "perfect" | "good" | "fair" }) {
  const colorMap = {
    perfect: { stroke: "#22C55E", trackStroke: "rgba(34, 197, 94, 0.15)" },
    good: { stroke: "#22C55E", trackStroke: "rgba(34, 197, 94, 0.15)" },
    fair: { stroke: "#FFD035", trackStroke: "rgba(255, 208, 53, 0.15)" },
  };
  const { stroke, trackStroke } = colorMap[color];
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progressLength = (percent / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: 108, height: 108 }}>
      <svg className="absolute" width="108" height="108" viewBox="0 0 108 108">
        {/* Background track - full circle */}
        <circle 
          cx="54" 
          cy="54" 
          r={radius} 
          fill="none" 
          stroke={trackStroke} 
          strokeWidth="8" 
        />
        {/* Progress arc - starts from top (12 o'clock), goes clockwise */}
        <circle
          cx="54"
          cy="54"
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${progressLength} ${circumference}`}
          transform="rotate(-90 54 54)"
          style={{ transition: "stroke-dasharray 0.3s ease" }}
        />
      </svg>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[24px] font-semibold text-content-primary leading-[27px] tracking-[-0.48px]">
          {percent}%
        </span>
        <span className="text-[17px] font-normal text-content-primary leading-[27px] tracking-[-0.34px]">
          Match
        </span>
      </div>
    </div>
  );
}

function JobCard({
  title,
  company,
  location,
  workType,
  employmentType,
  experience,
  level,
  salary,
  matchPercent,
  matchColor,
  postedTime,
  applicants,
  isLiked = false,
}: JobCardProps) {
  return (
    <div className="bg-surface-primary rounded-[13px] px-[26px] py-[15px] flex gap-[22px]">
      <div className="shrink-0 flex items-center">
        <MatchCircle percent={matchPercent} color={matchColor} />
      </div>
      <div className="flex-1 flex flex-col">
        {/* Header section */}
        <div className="flex items-start justify-between pb-[5px]">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[25px] font-semibold text-black leading-[32px] tracking-[-0.5px]">
              {title}
            </h3>
            <div className="flex items-center gap-[6px]">
              <div className="w-[22px] h-[22px] rounded-full bg-gray-200 overflow-hidden" />
              <span className="text-[16px] font-medium text-content-muted leading-[20px] tracking-[-0.32px]">
                {company}
              </span>
            </div>
            <div className="flex items-center gap-[13px] text-[15px] text-content-primary">
              <div className="flex items-center gap-[4px]">
                <LocationIcon className="w-[15px] h-[15px]" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <span className="w-[6px] h-[6px] rounded-full bg-interactive-primary" />
                <WifiIcon className="w-[17px] h-[17px]" />
                <span className="text-[14px] leading-[22px] tracking-[-0.28px]">{workType}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <button className="text-content-muted hover:text-content-primary transition-colors">
              <LinkIcon className="w-[19px] h-[19px]" />
            </button>
            <button className={`transition-colors ${isLiked ? "text-interactive-primary" : "text-content-muted hover:text-content-primary"}`}>
              <HeartIcon className="w-[19px] h-[19px]" filled={isLiked} />
            </button>
          </div>
        </div>
        {/* Tags row with border styling per Figma */}
        <div className="flex items-center gap-[6px] flex-wrap border-b border-[#EDEDED] pb-[13px]">
          <span className="px-[15px] py-[3px] border border-[#E8E8E8] rounded-[30px] text-[14px] text-content-primary leading-[22px] tracking-[-0.28px]">
            {employmentType}
          </span>
          <span className="px-[15px] py-[3px] border border-[#E8E8E8] rounded-[30px] text-[14px] text-content-primary leading-[22px] tracking-[-0.28px]">
            {experience}
          </span>
          <span className="px-[15px] py-[3px] border border-[#E8E8E8] rounded-[30px] text-[14px] text-content-primary leading-[22px] tracking-[-0.28px]">
            {level}
          </span>
          <span className="px-[15px] py-[3px] border border-[#E8E8E8] rounded-[30px] text-[14px] text-content-primary leading-[22px] tracking-[-0.28px]">
            {salary}
          </span>
        </div>
        {/* Footer row */}
        <div className="flex items-center justify-between pt-[13px]">
          <div className="flex items-center gap-[8px] text-[14px]">
            <span className="px-[13px] py-[2px] bg-[rgba(115,74,226,0.12)] rounded-[35px] text-content-primary leading-[22px] tracking-[-0.28px]">{postedTime}</span>
            <span className="text-content-primary leading-[22px] tracking-[-0.28px]">{applicants} applicants</span>
          </div>
          <div className="flex items-center gap-[11px]">
            <button className="px-[19px] py-[9px] border border-[rgba(177,174,174,0.5)] rounded-[43px] text-[17px] font-medium text-content-primary hover:bg-surface-page transition-colors leading-[22px] tracking-[-0.35px]">
              Apply
            </button>
            <button className="px-[19px] py-[9px] bg-surface-success rounded-[43px] text-[17px] font-medium text-content-primary hover:opacity-90 transition-opacity leading-[22px] tracking-[-0.35px]">
              Mock Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const topNavItems = [
    { icon: BriefcaseIcon, label: "Jobs", active: true },
    { icon: AIMockIcon, label: "AI Mock Interview", active: false },
    { icon: ResumeIcon, label: "Resume", active: false },
  ];

  const middleNavItems = [
    { icon: ProfileIcon, label: "Profile", active: false },
    { icon: SettingsIcon, label: "Setting", active: false },
  ];

  const bottomNavItems = [
    { icon: SubscriptionIcon, label: "Subscription", active: false },
    { icon: CreditsIcon, label: "Extra Credits", active: false },
  ];

  const NavButton = ({ item }: { item: { icon: React.ComponentType<{ className?: string }>; label: string; active: boolean } }) => (
    <button
      className={`flex items-center gap-[9px] px-[29px] py-[11px] rounded-[var(--radius-button)] w-full transition-colors text-left ${
        item.active
          ? "bg-surface-accent text-content-inverse"
          : "bg-transparent text-[#1D2633] hover:bg-surface-page"
      }`}
    >
      <item.icon className="w-[22px] h-[22px]" />
      <span className="text-[16px] font-medium leading-[20px] tracking-[-0.32px]">
        {item.label}
      </span>
    </button>
  );

  return (
    <aside className="w-[var(--spacing-sidebar-width)] bg-surface-primary h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="px-[12px] py-[10px]">
        <Image
          src="/images/jobnova-logo.png"
          alt="JobNova"
          width={140}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      <nav className="flex-1 px-[12px] py-[10px]">
        {/* Top nav items */}
        <div className="flex flex-col gap-[10px]">
          {topNavItems.map((item) => (
            <NavButton key={item.label} item={item} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-[10px] mx-[15px] h-[1px] bg-[#DFDFDF]" />

        {/* Middle nav items */}
        <div className="flex flex-col gap-[10px]">
          {middleNavItems.map((item) => (
            <NavButton key={item.label} item={item} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-[10px] mx-[15px] h-[1px] bg-[#DFDFDF]" />

        {/* Bottom nav items */}
        <div className="flex flex-col gap-[10px]">
          {bottomNavItems.map((item) => (
            <NavButton key={item.label} item={item} />
          ))}
        </div>
      </nav>

      <div className="p-[20px]">
        <div
          className="rounded-[var(--radius-lg)] p-[20px] relative overflow-hidden"
          style={{
            background: "linear-gradient(-47deg, #CBBAFF 0%, #C89FF3 54%, #7248F1 100%)",
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

function Header() {
  const tabs = [
    { label: "Matched", active: true },
    { label: "Liked", count: 1, active: false },
    { label: "Applied", count: 1, active: false },
  ];

  return (
    <header className="flex items-center gap-[40px] mb-[20px]">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={`px-[20px] py-[8px] rounded-[var(--radius-button)] text-[14px] font-medium transition-colors ${
            tab.active
              ? "bg-surface-primary text-content-primary border border-border-default"
              : "bg-transparent text-content-muted hover:text-content-primary"
          }`}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-[6px] w-[20px] h-[20px] inline-flex items-center justify-center bg-surface-success rounded-full text-[12px] text-content-secondary">
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </header>
  );
}

function JobReferenceBar() {
  return (
    <div className="flex items-center gap-[12px] mb-[16px]">
      <button className="flex-1 flex items-center justify-center gap-[8px] py-[12px] bg-surface-success rounded-[var(--radius-button)] text-content-secondary">
        <RefreshIcon className="w-[16px] h-[16px]" />
        <span className="text-[14px] font-medium">Change Job Reference</span>
      </button>
      <button className="flex items-center gap-[8px] px-[16px] py-[12px] bg-surface-primary rounded-[var(--radius-button)] border border-border-default">
        <FilterIcon className="w-[16px] h-[16px] text-content-primary" />
        <span className="text-[16px] font-medium text-content-primary">Top matched</span>
      </button>
    </div>
  );
}

function AIPanelCard() {
  return (
    <div className="bg-surface-primary rounded-[var(--radius-card)] p-[30px] relative overflow-hidden">
      <div className="absolute top-[-38px] left-[113px] w-[395px] h-[395px] rounded-full bg-gradient-to-br from-purple-100 to-purple-50 opacity-50" />
      
      <div className="relative z-10">
        <AISparkleIcon className="w-[30px] h-[30px] text-interactive-primary mb-[16px]" />
        
        <h3 className="text-[16px] font-semibold text-content-secondary leading-[25px] tracking-[-0.32px] mb-[13px]">
          Ace Your Interviews with AI-Powered Mock Sessions!
        </h3>
        
        <p className="text-[14px] font-normal text-content-black leading-[20px] tracking-[-0.28px] mb-[24px]">
          Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
        </p>

        <div className="mb-[24px]">
          <h4 className="text-[16px] font-semibold text-content-secondary leading-[25px] tracking-[-0.32px] mb-[16px]">
            Why Choose Our AI Mock Interviews?
          </h4>
          
          <div className="flex flex-col gap-[12px]">
            <div>
              <p className="text-[14px] font-semibold text-content-black leading-[20px] tracking-[-0.28px] mb-[4px]">
                Job-Specific Simulations:
              </p>
              <p className="text-[14px] font-normal text-content-black leading-[20px] tracking-[-0.28px] pl-[21px]">
                • Practice with questions tailored to your target role, ensuring relevance and preparation.
              </p>
            </div>
            
            <div>
              <p className="text-[14px] font-semibold text-content-black leading-[20px] tracking-[-0.28px] mb-[4px]">
                Actionable Feedback
              </p>
              <p className="text-[14px] font-normal text-content-black leading-[20px] tracking-[-0.28px] pl-[21px]">
                • Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
              </p>
            </div>
            
            <div>
              <p className="text-[14px] font-semibold text-content-black leading-[20px] tracking-[-0.28px] mb-[4px]">
                Boost Success Rates:
              </p>
              <p className="text-[14px] font-normal text-content-black leading-[20px] tracking-[-0.28px] pl-[21px]">
                • Perfect your interview skills and increase your chances of landing the job you want.
              </p>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-[10px] py-[12px] bg-surface-dark rounded-[var(--radius-button)] text-content-inverse">
          <AISparkleIcon className="w-[16px] h-[16px]" />
          <span className="text-[16px] font-medium leading-[20px] tracking-[-0.32px]">
            Mock Interview
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const jobs: JobCardProps[] = [
    {
      title: "Web Application Developer",
      company: "Backd Business Funding",
      location: "Austin, Texas Metropolitan Area",
      workType: "On-site",
      employmentType: "Full time",
      experience: "0 of 3 skills match",
      level: "Mid Level",
      salary: "$65/yr - $70/yr",
      matchPercent: 64,
      matchColor: "fair",
      postedTime: "1 hours ago",
      applicants: 25,
      isLiked: false,
    },
    {
      title: "Software Engineer, Network Infrastructure",
      company: "Cursor AI",
      location: "Sunnyvale, CA",
      workType: "On-site",
      employmentType: "Full time",
      experience: "5+ years exp",
      level: "Mid Level",
      salary: "$161K/yr - $239K/yr",
      matchPercent: 93,
      matchColor: "perfect",
      postedTime: "2 hours ago",
      applicants: 25,
      isLiked: true,
    },
    {
      title: "Full-Stack Software Engineer (Web Developer)",
      company: "Simons Foundation",
      location: "New York, NY",
      workType: "On-site",
      employmentType: "Full time",
      experience: "5+ years exp",
      level: "Mid Level",
      salary: "$125K/yr - $140K/yr",
      matchPercent: 82,
      matchColor: "good",
      postedTime: "3 hours ago",
      applicants: 42,
      isLiked: false,
    },
  ];

  return (
    <div className="min-h-screen bg-surface-page">
      <Sidebar />
      
      <main className="ml-[var(--spacing-sidebar-width)] p-[var(--spacing-page-y)] pr-[20px]">
        <div className="flex gap-[20px]">
          <div className="flex-1 max-w-[893px]">
            <Header />
            <JobReferenceBar />
            
            <div className="flex flex-col gap-[16px]">
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>
          
          <div className="w-[290px] shrink-0">
            <AIPanelCard />
          </div>
        </div>
      </main>
    </div>
  );
}
