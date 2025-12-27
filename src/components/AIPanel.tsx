import { imgIconAiGenerateALined, imgIconGenerateB, imgTexture, imgEclipse } from '@/constants/assets';
import { Button } from './Button';

export function AIPanel() {
  return (
    <div className="fixed right-0 top-[100px] w-[290px] h-[790px] rounded-[12px] overflow-hidden">
      <div className="relative bg-white w-full h-full">
        <div className="absolute left-[113px] w-[395px] h-[395px] top-[-38px]">
          <img 
            src={imgEclipse} 
            alt="" 
            className="absolute inset-[-50.63%] w-full h-full"
          />
        </div>

        <div 
          className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none"
          style={{ 
            backgroundImage: `url(${imgTexture})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '134px 134px'
          }}
        />

        <div className="relative z-10 px-[30px] pt-[23px]">
          <div className="w-[30px] h-[30px] mb-[20px]">
            <img src={imgIconAiGenerateALined} alt="AI Icon" className="w-full h-full" />
          </div>

          <div className="mb-[30px]">
            <h3 className="font-inter font-semibold text-[16px] leading-[25px] tracking-[-0.32px] text-[#19212d] mb-[13px]">
              Ace Your Interviews with AI-Powered Mock Sessions!
            </h3>
            <p className="font-inter font-normal text-body-14 text-black">
              Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
            </p>
          </div>

          <div className="mb-[40px]">
            <div className="flex items-center gap-2 mb-[20px]">
              <img src={imgIconGenerateB} alt="" className="w-[22px] h-[22px]" />
              <h4 className="font-inter font-semibold text-[16px] leading-[25px] tracking-[-0.32px] text-[#19212d]">
                Why Choose Our AI Mock Interviews?
              </h4>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-inter font-semibold text-body-14 text-black mb-2">
                  Job-Specific Simulations:
                </p>
                <ul className="list-disc list-inside font-inter font-normal text-body-14 text-black">
                  <li>Practice with questions tailored to your target role, ensuring relevance and preparation.</li>
                </ul>
              </div>

              <div>
                <p className="font-inter font-semibold text-body-14 text-black mb-2">
                  Actionable Feedback
                </p>
                <ul className="list-disc list-inside font-inter font-normal text-body-14 text-black">
                  <li>Get detailed analysis of your responses and practical, step-by-step improvement suggestions.</li>
                </ul>
              </div>

              <div>
                <p className="font-inter font-semibold text-body-14 text-black mb-2">
                  Boost Success Rates:
                </p>
                <ul className="list-disc list-inside font-inter font-normal text-body-14 text-black">
                  <li>Perfect your interview skills and increase your chances of landing the job you want.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-[#19202b] hover:bg-[#2a3240] w-[234px]"
            >
              Mock Interview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
