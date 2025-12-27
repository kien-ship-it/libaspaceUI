import { Sidebar } from '@/components/Sidebar';
import { JobCard } from '@/components/JobCard';
import { AIPanel } from '@/components/AIPanel';
import { Button } from '@/components/Button';
import { mockJobs } from '@/data/mockJobs';
import { RefreshCw, Sparkles } from 'lucide-react';
import { img14 } from '@/constants/assets';

function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Sidebar />

      <main className="ml-[219px] mr-[290px] px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-white rounded-full font-inter font-medium text-button-16 text-black-primary hover:bg-black-light transition-colors">
              Matched
            </button>
            <button className="px-6 py-2 bg-white rounded-full font-inter font-medium text-button-16 text-black-primary hover:bg-black-light transition-colors relative">
              Liked
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-[12px] font-semibold text-black">
                1
              </span>
            </button>
            <button className="px-6 py-2 bg-white rounded-full font-inter font-medium text-button-16 text-black-primary hover:bg-black-light transition-colors relative">
              Applied
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-[12px] font-semibold text-black">
                1
              </span>
            </button>
          </div>
        </div>

        <div className="mb-6">
          <Button 
            variant="outline" 
            size="lg"
            icon={<RefreshCw className="w-5 h-5" />}
            className="w-full bg-white border-2 border-primary-muted text-primary"
          >
            Change Job Reference
          </Button>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[16px] h-[16px]">
              <img src={img14} alt="" className="w-full h-full" />
            </div>
            <h2 className="font-inter font-medium text-button-16 text-black-primary">
              Top matched
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {mockJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={() => console.log('Apply to', job.id)}
              onMockInterview={() => console.log('Mock interview for', job.id)}
              onLike={() => console.log('Like', job.id)}
            />
          ))}
        </div>
      </main>

      <AIPanel />
    </div>
  );
}

export default App;
