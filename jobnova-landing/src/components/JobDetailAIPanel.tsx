"use client";

import Image from "next/image";
import { useState } from "react";

interface MatchScoreProps {
  label: string;
  percent: number;
  color: "green" | "yellow";
}

function MatchScore({ label, percent, color }: MatchScoreProps) {
  const colorClasses = {
    green: { stroke: "#B9FD33", trackStroke: "rgba(185, 253, 51, 0.15)", text: "#B9FD33" },
    yellow: { stroke: "#FFD035", trackStroke: "rgba(255, 208, 53, 0.15)", text: "#FFD035" },
  };
  const { stroke, trackStroke, text } = colorClasses[color];
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progressLength = (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-[8px]">
      <div className="relative flex items-center justify-center" style={{ width: 70, height: 70 }}>
        <svg className="absolute" width="70" height="70" viewBox="0 0 70 70">
          <circle 
            cx="35" 
            cy="35" 
            r={radius} 
            fill="none" 
            stroke={trackStroke} 
            strokeWidth="6" 
          />
          <circle
            cx="35"
            cy="35"
            r={radius}
            fill="none"
            stroke={stroke}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${progressLength} ${circumference}`}
            transform="rotate(-90 35 35)"
            style={{ transition: "stroke-dasharray 0.3s ease" }}
          />
        </svg>
        <span className="text-[16px] font-semibold" style={{ color: text }}>
          {percent}%
        </span>
      </div>
      <span className="text-[12px] font-medium text-content-primary leading-[18px] tracking-[-0.24px]">
        {label}
      </span>
    </div>
  );
}

interface JobDetailAIPanelProps {
  matchScores?: {
    education: number;
    workExp: number;
    skills: number;
    expLevel: number;
  };
}

export function JobDetailAIPanel({ matchScores = { education: 93, workExp: 80, skills: 93, expLevel: 44 } }: JobDetailAIPanelProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="sticky top-[20px] bg-surface-primary rounded-[var(--radius-card)] p-[24px] relative overflow-hidden">
      <div className="absolute right-[-800px] top-[-800px] w-[1400px] h-[1400px] opacity-100 pointer-events-none">
        <Image
          src="/images/circle-radiant.svg"
          alt="Radiant background"
          width={1400}
          height={1400}
          className="object-cover"
        />
      </div>
      
      <div className="relative z-10">
        <div
          className={isUnlocked ? "" : "blur-md pointer-events-none select-none"}
          aria-hidden={!isUnlocked}
        >
          <h3 className="text-[16px] font-semibold text-content-secondary leading-[20px] tracking-[-0.32px] mb-[20px]">
            Why is this job a good fit for me?
          </h3>
          
          {/* Chart cards with white background */}
          <div className="grid grid-cols-2 gap-[10px] mb-[24px]">
            <div className="bg-white rounded-[5px] p-[12px] flex flex-col items-center">
              <MatchScore 
                label="Education" 
                percent={matchScores.education} 
                color={matchScores.education >= 70 ? "green" : "yellow"} 
              />
            </div>
            <div className="bg-white rounded-[5px] p-[12px] flex flex-col items-center">
              <MatchScore 
                label="Work Exp" 
                percent={matchScores.workExp} 
                color={matchScores.workExp >= 70 ? "green" : "yellow"} 
              />
            </div>
            <div className="bg-white rounded-[5px] p-[12px] flex flex-col items-center">
              <MatchScore 
                label="Skills" 
                percent={matchScores.skills} 
                color={matchScores.skills >= 70 ? "green" : "yellow"} 
              />
            </div>
            <div className="bg-white rounded-[5px] p-[12px] flex flex-col items-center">
              <MatchScore 
                label="Exp. Level" 
                percent={matchScores.expLevel} 
                color={matchScores.expLevel >= 70 ? "green" : "yellow"} 
              />
            </div>
          </div>

          <div className="border-t border-[#EDEDED] pt-[20px]">
            <h4 className="text-[14px] font-semibold text-content-secondary leading-[20px] tracking-[-0.28px] mb-[12px] flex items-center gap-[6px]">
              <span className="text-[#B9FD33]">✓</span> Relevant Experience
            </h4>
            <ul className="space-y-[8px] text-[13px] text-content-primary leading-[18px] tracking-[-0.26px]">
              <li className="flex items-start gap-[8px]">
                <span className="text-interactive-primary mt-[2px]">•</span>
                <span>You have substantial experience as a UI/UX Designer, Interaction Designer, and User Research Specialist. Your role at Safa aligns with designing interactions and user experiments to user experience design for digital products.</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-[#EDEDED] pt-[16px] mt-[16px]">
            <h4 className="text-[14px] font-semibold text-content-secondary leading-[20px] tracking-[-0.28px] mb-[12px] flex items-center gap-[6px]">
              <span className="text-[#FFD035]">⚠</span> Seniority
            </h4>
            <ul className="space-y-[8px] text-[13px] text-content-primary leading-[18px] tracking-[-0.26px]">
              <li className="flex items-start gap-[8px]">
                <span className="text-interactive-primary mt-[2px]">•</span>
                <span>You have amassed over eight years of relevant experience, meeting the mid-level seniority requirement for the role.</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-[#EDEDED] pt-[16px] mt-[16px]">
            <h4 className="text-[14px] font-semibold text-content-secondary leading-[20px] tracking-[-0.28px] mb-[12px] flex items-center gap-[6px]">
              <span className="text-[#B9FD33]">✓</span> Education
            </h4>
            <ul className="space-y-[8px] text-[13px] text-content-primary leading-[18px] tracking-[-0.26px]">
              <li className="flex items-start gap-[8px]">
                <span className="text-interactive-primary mt-[2px]">•</span>
                <span>While you hold a Master&apos;s degree from Politecnico di Milano in Digital and Interaction Design, it doesn&apos;t directly align with the specified fields of Computer Science, Computer Engineering, or Information Science and Technology required by the job.</span>
              </li>
            </ul>
          </div>
        </div>

        {!isUnlocked && (
          <div className="absolute inset-0 z-20 flex flex-col">
            <div className="flex-1 flex items-start justify-start pt-[6px]">
              <h3 className="text-[16px] font-semibold text-content-secondary leading-[20px] tracking-[-0.32px]">
                Why is this job a good fit for me?
              </h3>
            </div>
            <div className="flex items-end justify-center pb-[6px]">
              <button
                type="button"
                onClick={() => setIsUnlocked(true)}
                className="w-full max-w-[220px] flex items-center justify-center py-[12px] px-[28px] bg-surface-dark rounded-[var(--radius-button)] text-content-inverse"
              >
                <span className="text-[16px] font-medium leading-[20px] tracking-[-0.32px]">
                  Upgrade to check
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
