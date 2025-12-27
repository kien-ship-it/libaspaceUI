import Image from "next/image";

export function AIPanelCard() {
  return (
    <div className="bg-surface-primary rounded-[var(--radius-card)] p-[30px] relative overflow-hidden">
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
        <Image
          src="/images/ace.svg"
          alt="AI"
          width={30}
          height={30}
          className="mb-[16px]"
        />
        
        <h3 className="text-[16px] font-semibold text-content-secondary leading-[25px] tracking-[-0.32px] mb-[13px]">
          Ace Your Interviews with AI-Powered Mock Sessions!
        </h3>
        
        <p className="text-[14px] font-normal text-content-black leading-[20px] tracking-[-0.28px] mb-[24px]">
          Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
        </p>

        <div className="mb-[24px]">
          <h4 className="text-[16px] font-semibold text-content-secondary leading-[25px] tracking-[-0.32px] mb-[16px]">
            Why Choose Our AI Mock Interviews? 
            <Image
              src="/images/why-choose.svg"
              alt="Why Choose"
              width={21}
              height={21}
              className="inline-block ml-[8px]"
            />
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
          <Image
            src="/images/mock-interview.svg"
            alt="Mock Interview"
            width={16}
            height={16}
          />
          <span className="text-[16px] font-medium leading-[20px] tracking-[-0.32px]">
            Mock Interview
          </span>
        </button>
      </div>
    </div>
  );
}
