import { MapPin, Briefcase, Heart, Link2 } from 'lucide-react';
import { MatchBadge } from './MatchBadge';
import { Button } from './Button';
import type { Job } from '@/types';

interface JobCardProps {
  job: Job;
  onApply?: () => void;
  onMockInterview?: () => void;
  onLike?: () => void;
}

export function JobCard({ job, onApply, onMockInterview, onLike }: JobCardProps) {
  const getMatchLevel = (percentage: number) => {
    if (percentage >= 85) return 'perfect';
    if (percentage >= 65) return 'Good';
    return 'fair';
  };

  return (
    <div className="bg-white rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <MatchBadge 
            percentage={job.matchPercentage} 
            level={getMatchLevel(job.matchPercentage)}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <h3 className="font-inter font-semibold text-[20px] leading-[25px] tracking-[-0.4px] text-black-primary mb-2">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                {job.companyLogo && (
                  <img 
                    src={job.companyLogo} 
                    alt={job.company}
                    className="w-5 h-5 rounded object-cover"
                  />
                )}
                <span className="font-inter font-normal text-body-14 text-black-gray">
                  {job.company}
                </span>
              </div>
              <div className="flex items-center gap-4 text-body-14 text-black-gray">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  <span>{job.locationType}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={onLike}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black-light transition-colors"
                aria-label="Like job"
              >
                <Heart className="w-5 h-5 text-black-gray" />
              </button>
              <button 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black-light transition-colors"
                aria-label="Share job"
              >
                <Link2 className="w-5 h-5 text-black-gray" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4 text-body-14">
            <span className="px-3 py-1 bg-black-light rounded-full text-black-primary">
              {job.employmentType}
            </span>
            <span className="text-black-gray">{job.skillsMatch}</span>
            <span className="text-black-gray">{job.experienceLevel}</span>
            <span className="font-medium text-black-primary">{job.salaryRange}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-body-14 text-black-gray">
              <span>{job.postedTime}</span>
              <span>{job.applicantCount} applicants</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="md" onClick={onApply}>
                Apply
              </Button>
              <Button variant="primary" size="md" onClick={onMockInterview}>
                Mock Interview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
