"use client";

import Image from "next/image";
import Link from "next/link";
import { LikeButton } from "@/components/LikeButton";
import {
  BackIcon,
  ExternalLinkIcon,
  ArchiveIcon,
  AirplayIcon,
  ClockIcon,
  DatabaseIcon,
  BarChartIcon,
  CalendarIcon,
  LocationIcon,
  UsersIcon,
  GlobeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons";

interface JobData {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  workType: string;
  employmentType: string;
  experience: string;
  level: string;
  salary: string;
  matchPercent: number;
  postedTime: string;
  applicants: number;
  description: string;
  qualifications: {
    required: string[];
    preferred: string[];
  };
  responsibilities: string[];
  benefits: string[];
  companyInfo: {
    name: string;
    founded: string;
    location: string;
    employees: string;
    website: string;
    description: string;
  };
}

function MatchCircle({ percent }: { percent: number }) {
  const color = percent >= 80 ? "#B9FD33" : percent >= 60 ? "#B9FD33" : "#FFD035";
  const trackColor = percent >= 60 ? "rgba(185, 253, 51, 0.15)" : "rgba(255, 208, 53, 0.15)";
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const progressLength = (percent / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
      <svg className="absolute" width="80" height="80" viewBox="0 0 80 80">
        <circle 
          cx="40" 
          cy="40" 
          r={radius} 
          fill="none" 
          stroke={trackColor} 
          strokeWidth="6" 
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${progressLength} ${circumference}`}
          transform="rotate(-90 40 40)"
          style={{ transition: "stroke-dasharray 0.3s ease" }}
        />
      </svg>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[18px] font-semibold text-content-primary leading-[22px]">
          {percent}%
        </span>
        <span className="text-[12px] font-normal text-content-muted leading-[16px]">
          Match
        </span>
      </div>
    </div>
  );
}

function JobAttribute({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      <Icon className="w-[24px] h-[24px] text-content-muted" />
      <span className="text-[14px] font-normal text-content-muted leading-[22px] tracking-[-0.28px]">
        {label}
      </span>
    </div>
  );
}

function SkillTag({ label, variant = "default" }: { label: string; variant?: "default" | "highlight" }) {
  return (
    <span 
      className={`px-[12px] py-[6px] rounded-[20px] text-[14px] leading-[22px] tracking-[-0.28px] ${
        variant === "highlight" 
          ? "bg-[rgba(115,74,226,0.12)] text-content-primary" 
          : "border border-[#E8E8E8] text-content-primary"
      }`}
    >
      {label}
    </span>
  );
}

interface JobDetailContentProps {
  job: JobData;
}

export function JobDetailContent({ job }: JobDetailContentProps) {
  return (
    <div className="flex-1 max-w-[893px]">
      {/* Header with back button and applicants */}
      <div className="flex items-center justify-between mb-[16px]">
        <div className="flex items-center gap-[12px]">
          <Link 
            href="/"
            className="flex items-center justify-center w-[35px] h-[35px] bg-white border border-[#e8e8e8] rounded-[31px] hover:bg-gray-50 transition-colors"
          >
            <BackIcon className="w-[24px] h-[24px]" />
          </Link>
          <span className="px-[12px] py-[3px] h-[35px] flex items-center bg-[#a68bfa] rounded-[31px] text-[16px] font-medium text-white leading-[20.3px] tracking-[-0.32px]">
            {job.applicants} applicants
          </span>
        </div>
        
        <div className="flex items-center gap-[12px]">
          <button className="inline-flex items-center justify-center leading-none p-[8px] hover:bg-gray-100 rounded-full transition-colors">
            <ExternalLinkIcon className="w-[18px] h-[18px] text-content-muted" />
          </button>
          <LikeButton
            defaultLiked={false}
            className="p-[8px] hover:bg-gray-100 rounded-full transition-colors"
            iconClassName="w-[18px] h-[18px]"
          />
          <button className="px-[18px] py-[8px] h-[40px] bg-black rounded-[31px] flex items-center gap-[10px] text-white text-[16px] font-medium leading-[20.3px] tracking-[-0.32px] hover:bg-gray-900 transition-colors">
            Apply Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66667 11.3333L11.3333 4.66667M11.3333 4.66667H4.66667M11.3333 4.66667V11.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main content card */}
      <div className="bg-surface-primary rounded-[13px] p-[30px]">
        {/* Posted time */}
        <div className="flex items-center gap-[8px] mb-[12px]">
          <span className="text-[14px] text-content-muted leading-[22px] tracking-[-0.28px]">
            {job.postedTime}
          </span>
        </div>

        {/* Job title and match */}
        <div className="flex items-start justify-between mb-[20px]">
          <div className="flex items-center gap-[16px]">
            {job.companyLogo ? (
              <Image
                src={job.companyLogo}
                alt={job.company}
                width={60}
                height={60}
                className="rounded-[8px]"
              />
            ) : (
              <div className="w-[60px] h-[60px] rounded-[8px] bg-gray-100 flex items-center justify-center">
                <span className="text-[24px] font-semibold text-content-muted">
                  {job.company.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h1 className="text-[25px] font-semibold text-black leading-[32px] tracking-[-0.5px] mb-[4px]">
                {job.title}
              </h1>
              <p className="text-[16px] font-medium text-content-muted leading-[20px] tracking-[-0.32px]">
                {job.company}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-[16px]">
            <MatchCircle percent={job.matchPercent} />
            <div className="flex items-center gap-[12px]">
              <button className="p-[8px] hover:bg-surface-page rounded-full transition-colors">
                <ExternalLinkIcon className="w-[20px] h-[20px] text-content-muted" />
              </button>
              <LikeButton
                defaultLiked={false}
                className="transition-colors"
                iconClassName="w-[20px] h-[20px]"
              />
            </div>
          </div>
        </div>

        {/* Location info */}
        <div className="flex items-center gap-[8px] mb-[16px]">
          <LocationIcon className="w-[16px] h-[16px] text-content-muted" />
          <span className="text-[14px] text-content-muted leading-[22px] tracking-[-0.28px]">
            {job.location}
          </span>
          <span className="w-[6px] h-[6px] rounded-full bg-content-muted" />
          <AirplayIcon className="w-[16px] h-[16px] text-content-muted" />
          <span className="text-[14px] text-content-muted leading-[22px] tracking-[-0.28px]">
            {job.workType}
          </span>
        </div>

        {/* Job attributes */}
        <div className="flex flex-wrap items-center gap-[20px] pb-[20px] border-b border-[#EDEDED]">
          <JobAttribute icon={ArchiveIcon} label={job.employmentType} />
          <JobAttribute icon={AirplayIcon} label={job.workType} />
          <JobAttribute icon={ClockIcon} label={job.experience} />
          <JobAttribute icon={DatabaseIcon} label={job.salary} />
          <JobAttribute icon={BarChartIcon} label={job.level} />
        </div>

        {/* Description */}
        <div className="py-[20px] border-b border-[#EDEDED]">
          <p className="text-[14px] text-black leading-[22px] tracking-[-0.28px]">
            {job.description}
          </p>
        </div>

        {/* Interview success card */}
        <div className="my-[20px] bg-[#B9FD33] rounded-[24px] px-[26px] pb-[24px]">
          {/* Header section with border */}
          <div className="flex items-center gap-[23px] py-[24px] border-b border-[rgba(14,16,17,0.24)]">
            <div className="w-[48px] h-[48px] shrink-0">
              <Image
                src="/images/bot.svg"
                alt="AI Bot"
                width={48}
                height={48}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] font-semibold text-black leading-[20px] tracking-[-0.36px] mb-[10px]">
                Maximize your interview success
              </h3>
              <p className="text-[14px] font-normal text-[rgba(14,16,17,0.6)] leading-[22px] tracking-[-0.28px]">
                Our platform simulates real interview scenarios, helping you refine your responses and boost your confidence.
              </p>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="flex gap-[23px] pt-[24px] pb-[16px]">
            <div className="flex-1">
              <h4 className="text-[16px] font-semibold text-[#1f2937] leading-[1.3] mb-[8px]">
                Job-Specific Simulations:
              </h4>
              <p className="text-[14px] font-normal text-[rgba(14,16,17,0.6)] leading-[22px] tracking-[-0.28px]">
                Practice with questions tailored to your target role, ensuring relevance and preparation.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-[16px] font-semibold text-[#1f2937] leading-[1.3] mb-[8px]">
                Actionable Feedback
              </h4>
              <p className="text-[14px] font-normal text-[rgba(14,16,17,0.6)] leading-[22px] tracking-[-0.28px]">
                Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-[16px] font-semibold text-[#1f2937] leading-[1.3] mb-[8px]">
                Boost Success Rates:
              </h4>
              <p className="text-[14px] font-normal text-[rgba(14,16,17,0.6)] leading-[22px] tracking-[-0.28px]">
                Perfect your interview skills and increase your chances of landing the job you want.
              </p>
            </div>
          </div>
          
          {/* Button aligned right */}
          <div className="flex justify-end">
            <button className="px-[18px] py-[8px] h-[40px] bg-[#1f2937] rounded-[43px] text-white text-[16px] font-medium leading-[20.3px] tracking-[-0.32px]">
              Start Interview
            </button>
          </div>
        </div>

        {/* Qualification */}
        <div className="py-[20px] border-b border-[#EDEDED]">
          <h2 className="text-[20px] font-semibold text-black leading-[26px] tracking-[-0.4px] mb-[16px]">
            Qualification
          </h2>
          <p className="text-[14px] text-content-muted leading-[22px] tracking-[-0.28px] mb-[16px]">
            Discover how your skills align with the requirements of this position. Below is a detailed list of the essential skills needed for the role.
          </p>
          
          <div className="flex flex-wrap gap-[8px] mb-[20px]">
            <SkillTag label="Accidental Death and Dismemberment (AD&D)" />
            <SkillTag label="Amazon Web Services (AWS)" />
            <SkillTag label="Analysis Skills" />
            <SkillTag label="DevOps" />
            <SkillTag label="Apache ActiveMQ" />
            <SkillTag label="Application Programming Interface (API)" />
            <SkillTag label="Call Center" />
            <SkillTag label="Change Control" />
          </div>

          <div className="mb-[16px]">
            <h3 className="text-[16px] font-semibold text-black leading-[20px] tracking-[-0.32px] mb-[12px]">
              Required
            </h3>
            <ul className="space-y-[8px]">
              {job.qualifications.required.map((item, index) => (
                <li key={index} className="flex items-start gap-[8px] text-[14px] text-content-primary leading-[22px] tracking-[-0.28px]">
                  <span className="text-interactive-primary mt-[6px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-black leading-[20px] tracking-[-0.32px] mb-[12px]">
              Preferred
            </h3>
            <ul className="space-y-[8px]">
              {job.qualifications.preferred.map((item, index) => (
                <li key={index} className="flex items-start gap-[8px] text-[14px] text-content-primary leading-[22px] tracking-[-0.28px]">
                  <span className="text-interactive-primary mt-[6px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="py-[20px] border-b border-[#EDEDED]">
          <h2 className="text-[20px] font-semibold text-black leading-[26px] tracking-[-0.4px] mb-[16px]">
            Responsibilities
          </h2>
          <ul className="space-y-[8px]">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-[8px] text-[14px] text-content-primary leading-[22px] tracking-[-0.28px]">
                <span className="text-interactive-primary mt-[6px]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="py-[20px] border-b border-[#EDEDED]">
          <h2 className="text-[20px] font-semibold text-black leading-[26px] tracking-[-0.4px] mb-[12px]">
            Benefits
          </h2>
          <p className="text-[14px] text-content-primary leading-[22px] tracking-[-0.28px] mb-[16px]">
            We believe happy team members create amazing work. Here&apos;s what we offer to make that happen:
          </p>
          <ul className="space-y-[8px]">
            {job.benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-[8px] text-[14px] text-content-primary leading-[22px] tracking-[-0.28px]">
                <span className="text-[16px]">{getBenefitIcon(index)}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="py-[20px]">
          <h2 className="text-[20px] font-semibold text-black leading-[26px] tracking-[-0.4px] mb-[16px]">
            Company
          </h2>
          
          <div className="flex items-start gap-[16px] mb-[16px]">
            <div className="w-[103px] h-[103px] rounded-[12px] bg-gray-200 shrink-0" />
            <div className="flex-1">
              <h3 className="text-[23px] font-semibold text-black leading-[30px] tracking-[-0.46px] mb-[8px]">
                {job.companyInfo.name}
              </h3>
              <div className="flex items-center gap-[12px] flex-wrap mb-[8px]">
                <div className="flex items-center gap-[6px]">
                  <CalendarIcon className="w-[16px] h-[16px] text-content-muted" />
                  <span className="text-[14px] text-content-muted leading-[22px] tracking-[-0.28px]">
                    {job.companyInfo.founded}
                  </span>
                </div>
                <span className="w-[6px] h-[6px] rounded-full bg-content-muted" />
                <div className="flex items-center gap-[6px]">
                  <LocationIcon className="w-[16px] h-[16px] text-content-muted" />
                  <span className="text-[14px] text-content-muted leading-[22px] tracking-[-0.28px]">
                    {job.companyInfo.location}
                  </span>
                </div>
                <span className="w-[6px] h-[6px] rounded-full bg-content-muted" />
                <div className="flex items-center gap-[6px]">
                  <UsersIcon className="w-[18px] h-[18px] text-content-muted" />
                  <span className="text-[14px] text-content-muted leading-[22px] tracking-[-0.28px]">
                    {job.companyInfo.employees}
                  </span>
                </div>
                <span className="w-[6px] h-[6px] rounded-full bg-content-muted" />
                <div className="flex items-center gap-[6px]">
                  <GlobeIcon className="w-[16px] h-[16px] text-content-muted" />
                  <span className="text-[14px] text-content-muted leading-[22px] tracking-[-0.28px]">
                    Website
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <LinkedInIcon className="w-[24px] h-[24px] text-content-muted hover:text-interactive-primary cursor-pointer transition-colors" />
                <TwitterIcon className="w-[24px] h-[24px] text-content-muted hover:text-interactive-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <p className="text-[14px] text-black leading-[22px] tracking-[-0.28px]">
            {job.companyInfo.description}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-[12px] pt-[20px] border-t border-[#EDEDED]">
          <button className="px-[24px] py-[12px] border border-[rgba(177,174,174,0.5)] rounded-[43px] text-[17px] font-medium text-content-primary hover:bg-surface-page transition-colors leading-[22px] tracking-[-0.35px]">
            Apply Now
          </button>
          <button className="px-[24px] py-[12px] bg-surface-success rounded-[43px] text-[17px] font-medium text-content-primary hover:opacity-90 transition-opacity leading-[22px] tracking-[-0.35px]">
            Mock Interview
          </button>
        </div>
      </div>
    </div>
  );
}

function getBenefitIcon(index: number): string {
  const icons = ["🏠", "💰", "🍽️", "🍴", "🏥", "🎂", "🧠", "🌍"];
  return icons[index % icons.length];
}
