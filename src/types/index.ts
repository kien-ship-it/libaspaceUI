export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: 'On-site' | 'Remote' | 'Hybrid';
  employmentType: 'Full time' | 'Part time' | 'Contract';
  experienceLevel: 'Entry Level' | 'Mid Level' | 'Senior Level';
  salaryRange: string;
  matchPercentage: number;
  skillsMatch: string;
  postedTime: string;
  applicantCount: number;
  companyLogo?: string;
}

export type MatchLevel = 'perfect' | 'Good' | 'fair';
export type ButtonVariant = 'like' | 'job顶部分类栏';
export type ButtonState = 'off' | 'on' | 'like' | 'applied' | 'matched';
