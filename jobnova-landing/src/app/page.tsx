import Image from "next/image";
import Link from "next/link";
import {
  RefreshIcon,
  LocationIcon,
  WifiIcon,
} from "@/components/icons";
import { LikeButton } from "@/components/LikeButton";
import { Sidebar } from "@/components/Sidebar";
import { AIPanelCard } from "@/components/AIPanelCard";

interface JobCardProps {
  id: string;
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
    perfect: { stroke: "#B9FD33", trackStroke: "rgba(34, 197, 94, 0.15)" },
    good: { stroke: "#B9FD33", trackStroke: "rgba(34, 197, 94, 0.15)" },
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
          transform="rotate(45 54 54)"
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
  id,
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
              {company === "Backd Business Funding" ? (
                <Image
                  src="/images/Backd Business Funding.svg"
                  alt={company}
                  width={22}
                  height={22}
                  className="rounded-full"
                />
              ) : company === "Cursor AI" ? (
                <Image
                  src="/images/Cursor AI.svg"
                  alt={company}
                  width={22}
                  height={22}
                  className="rounded-full"
                />
              ) : company === "Simons Foundation" ? (
                <Image
                  src="/images/Simons Foundation.svg"
                  alt={company}
                  width={22}
                  height={22}
                  className="rounded-full"
                />
              ) : (
                <div className="w-[22px] h-[22px] rounded-full bg-gray-200 overflow-hidden" />
              )}
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
            <button className="inline-flex items-center justify-center leading-none text-content-muted hover:text-content-primary transition-colors">
              <span className="inline-flex items-center justify-center w-[19px] h-[19px]">
                <Image
                  src="/images/link.svg"
                  alt="Link"
                  width={19}
                  height={19}
                  className="w-full h-full object-contain"
                />
              </span>
            </button>
            <LikeButton
              defaultLiked={isLiked}
              className="transition-colors"
              iconClassName="w-[19px] h-[19px]"
            />
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
            <Link 
              href={`/job/${id}`}
              className="px-[19px] py-[9px] border border-[rgba(177,174,174,0.5)] rounded-[43px] text-[17px] font-medium text-content-primary hover:bg-surface-page transition-colors leading-[22px] tracking-[-0.35px]"
            >
              Apply
            </Link>
            <button className="px-[19px] py-[9px] bg-surface-success rounded-[43px] text-[17px] font-medium text-content-primary hover:opacity-90 transition-opacity leading-[22px] tracking-[-0.35px]">
              Mock Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const tabs = [
    { label: "Matched", active: true },
    { label: "Liked", count: 1, active: false },
    { label: "Applied", count: 1, active: false },
  ];

  return (
    <header className="flex items-center justify-between mb-[20px] bg-white py-[8px] px-[20px] rounded-[8px]">
      <div className="flex items-center">
        {tabs.map((tab, index) => (
          <div key={tab.label} className="flex items-center">
            <button
              className={`px-[20px] py-[6px] rounded-[22px] text-[16px] font-medium transition-colors ${
                tab.active
                  ? "border-[1.9px] border-[#a68bfa] text-[#19212c]"
                  : "text-[rgba(27,35,47,0.6)] hover:text-[#19212c]"
              }`}
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '20.3px',
                letterSpacing: '-0.32px'
              }}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-[10px] inline-flex items-center justify-center bg-[#b7fd33] rounded-[17px] text-[#171e29] text-[14px] font-medium leading-[normal] tracking-[0.28px] min-w-[18px] h-[18px] px-[6px] py-0">
                  {tab.count}
                </span>
              )}
            </button>
            {index < tabs.length - 1 && (
              <div className="w-[24px] h-[40px] flex items-center justify-center">
                <div className="w-[1px] h-[20px] bg-[#E5E7EB]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}

function JobReferenceBar() {
  return (
    <div className="flex items-center gap-[12px] mb-[16px]">
      <button className="flex-1 flex items-center justify-center gap-[8px] py-[12px] rounded-[31px] border border-[#E8E8E8] bg-[#A68BFA] text-white">
        <RefreshIcon className="w-[16px] h-[16px]" />
        <span className="text-[14px] font-medium">Change Job Reference</span>
      </button>
      <button className="flex items-center gap-[8px] px-[16px] py-[12px] bg-surface-primary rounded-[var(--radius-button)] border border-border-default">
        <Image
          src="/images/top-matched.svg"
          alt="Top matched"
          width={16}
          height={16}
          className="w-[16px] h-[16px]"
        />
        <span className="text-[16px] font-medium text-content-primary">Top matched</span>
      </button>
    </div>
  );
}

export default function Home() {
  const jobs: JobCardProps[] = [
    {
      id: "2",
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
      id: "3",
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
      isLiked: false,
    },
    {
      id: "4",
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
