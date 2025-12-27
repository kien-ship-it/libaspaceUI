import { imgMatch, imgMatch1, imgMatch2 } from '@/constants/assets';
import type { MatchLevel } from '@/types';

interface MatchBadgeProps {
  percentage: number;
  level?: MatchLevel;
  className?: string;
}

export function MatchBadge({ percentage, level = 'perfect', className = '' }: MatchBadgeProps) {
  const isFair = level === 'fair';
  const isPerfect = level === 'perfect';

  const getMatchLevel = (pct: number): MatchLevel => {
    if (pct >= 85) return 'perfect';
    if (pct >= 65) return 'Good';
    return 'fair';
  };

  const actualLevel = level || getMatchLevel(percentage);
  const isActuallyPerfect = actualLevel === 'perfect';
  const isActuallyFair = actualLevel === 'fair';

  return (
    <div className={`relative ${className}`}>
      <div className={isActuallyPerfect ? 'relative w-[107.826px] h-[107.826px]' : isActuallyFair ? 'relative w-[90.4px] h-[107.826px]' : ''}>
        {isActuallyPerfect && (
          <>
            <p className="absolute font-inter font-semibold text-[23.961px] leading-[27.361px] tracking-[-0.4792px] text-black-primary text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-12px]">
              {percentage}%
            </p>
            <p className="absolute font-inter font-normal text-[16.773px] leading-[26.957px] tracking-[-0.3355px] text-black-primary text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[14px]">
              Match
            </p>
          </>
        )}
        <img
          src={isActuallyPerfect ? imgMatch : isActuallyFair ? imgMatch1 : imgMatch}
          alt="Match indicator"
          className="block w-full h-full"
        />
        {isActuallyPerfect && (
          <img
            src={imgMatch2}
            alt="Match overlay"
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
      {isActuallyFair && (
        <>
          <p className="absolute font-inter font-semibold text-[23.961px] leading-[27.361px] tracking-[-0.4792px] text-black-primary text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-12px]">
            {percentage}%
          </p>
          <p className="absolute font-inter font-normal text-[16.773px] leading-[26.957px] tracking-[-0.3355px] text-black-primary text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[14px]">
            Match
          </p>
          <img
            src={imgMatch}
            alt="Match background"
            className="absolute inset-0 w-full h-full"
          />
        </>
      )}
    </div>
  );
}
