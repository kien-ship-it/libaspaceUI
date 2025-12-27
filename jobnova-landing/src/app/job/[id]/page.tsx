import { AppShell } from "@/components/AppShell";
import { JobDetailContent } from "@/components/JobDetailContent";
import { JobDetailAIPanel } from "@/components/JobDetailAIPanel";

const jobsData: Record<string, {
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
  matchScores: {
    education: number;
    workExp: number;
    skills: number;
    expLevel: number;
  };
}> = {
  "1": {
    id: "1",
    title: "UX Designer",
    company: "Company name",
    location: "Ann Arbor, MI",
    workType: "Remote",
    employmentType: "Internship",
    experience: "5+ years exp",
    level: "Mid Level",
    salary: "$90K/yr - $130K/yr",
    matchPercent: 93,
    postedTime: "2 hours ago",
    applicants: 27,
    description: "Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description Job description",
    qualifications: {
      required: [
        "3+ years of design experience",
        "3+ years of delivering design solutions as a UX designer or interaction designer experience",
        "Have an available online portfolio",
        "Experience prototyping (HTML, XHTML, JavaScript, CSS, Flash or Flash Catalyst, or Axure)"
      ],
      preferred: [
        "2+ years of mass-market consumer web / mobile products experience",
        "Experience working in a collaborative team and working directly with developers for implementation of designs"
      ]
    },
    responsibilities: [
      "Collaborate and work closely with product management, engineering, sales, and research from design concept to design solution, setting UX guidelines and driving cross-team collaboration and sharing, as well as establish best practices for interaction models and user interface designs throughout the team.",
      "Work in a start-up style environment, where iteration is encouraged and design acumen is demonstrated through design end-to-end product ownership.",
      "Communicate complex, interactive design concepts clearly and persuasively across different audiences and varying levels of the organization through excellent communication, presentation, interpersonal and analytical skills.",
      "Earn trust with product managers to develop shared vision and use research and data to identify opportunities and inform decisions."
    ],
    benefits: [
      "Remote Flexibility: Work from wherever you're most productive and happy.",
      "Equity Options: Become a shareholder through our stock options plan after 6 months.",
      "Meal Vouchers: Enjoy an €8/day meal voucher to make your lunch break even better.",
      "Lunch at the Office: If you're in Bologna, we have lunch together at the office, and it's on us!",
      "Health Coverage: Comprehensive support through the Metasalute Health Assistance Fund.",
      "Birthday Bliss: Celebrate your day with an extra day off, just for you.",
      "Mental Wellness: Free access to iFeel, our psychological support platform.",
      "International Environment: Grow your language skills while working with a diverse and global team."
    ],
    companyInfo: {
      name: "Company name",
      founded: "Founded in 1979",
      location: "Carlsbad, California, US",
      employees: "1001-5000 employees",
      website: "Website",
      description: "Kforce has a client that is seeking a UI/UX Developer in Madison, WI. Overview: In brief, we a handful of AI-powered tools for our workforce which could use a facelift to improve the overall user experience. In an ideal scenario, we would love to bring on someone that has the skills to work directly in our codebases (engineering skills) while they make improvements to the UI/UX based on their knowledge of best practices. We currently have three tools that users are interacting with; one is an Edge browser extension (JavaScript), one is using Streamlit web application (python currently but we'd be open to migrating this to some React/Angular/other framework), and the other is a basic React web application."
    },
    matchScores: {
      education: 93,
      workExp: 80,
      skills: 93,
      expLevel: 44
    }
  },
  "2": {
    id: "2",
    title: "Web Application Developer",
    company: "Backd Business Funding",
    companyLogo: "/images/Backd Business Funding.svg",
    location: "Austin, Texas Metropolitan Area",
    workType: "On-site",
    employmentType: "Full time",
    experience: "0 of 3 skills match",
    level: "Mid Level",
    salary: "$65/yr - $70/yr",
    matchPercent: 64,
    postedTime: "1 hours ago",
    applicants: 25,
    description: "We are looking for a skilled Web Application Developer to join our team. You will be responsible for developing and maintaining web applications using modern technologies and best practices.",
    qualifications: {
      required: [
        "3+ years of web development experience",
        "Proficiency in JavaScript, HTML, CSS",
        "Experience with React or similar frameworks",
        "Strong problem-solving skills"
      ],
      preferred: [
        "Experience with Node.js backend development",
        "Familiarity with cloud services (AWS, GCP)"
      ]
    },
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with design and product teams",
      "Write clean, maintainable code",
      "Participate in code reviews"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Flexible work hours"
    ],
    companyInfo: {
      name: "Backd Business Funding",
      founded: "Founded in 2015",
      location: "Austin, Texas",
      employees: "51-200 employees",
      website: "Website",
      description: "Backd Business Funding provides innovative financial solutions for businesses of all sizes."
    },
    matchScores: {
      education: 70,
      workExp: 60,
      skills: 55,
      expLevel: 70
    }
  },
  "3": {
    id: "3",
    title: "Software Engineer, Network Infrastructure",
    company: "Cursor AI",
    companyLogo: "/images/Cursor AI.svg",
    location: "Sunnyvale, CA",
    workType: "On-site",
    employmentType: "Full time",
    experience: "5+ years exp",
    level: "Mid Level",
    salary: "$161K/yr - $239K/yr",
    matchPercent: 93,
    postedTime: "2 hours ago",
    applicants: 25,
    description: "Join our team to build and scale network infrastructure for AI-powered development tools. You'll work on challenging problems at the intersection of networking and AI.",
    qualifications: {
      required: [
        "5+ years of software engineering experience",
        "Strong background in network protocols",
        "Experience with distributed systems",
        "Proficiency in Go or Rust"
      ],
      preferred: [
        "Experience with Kubernetes networking",
        "Background in AI/ML infrastructure"
      ]
    },
    responsibilities: [
      "Design and implement network infrastructure",
      "Optimize performance and reliability",
      "Collaborate with AI research teams",
      "Mentor junior engineers"
    ],
    benefits: [
      "Competitive compensation",
      "Equity package",
      "Unlimited PTO",
      "Health, dental, vision insurance",
      "Learning and development budget"
    ],
    companyInfo: {
      name: "Cursor AI",
      founded: "Founded in 2022",
      location: "Sunnyvale, California",
      employees: "11-50 employees",
      website: "Website",
      description: "Cursor AI is building the future of AI-powered software development with cutting-edge tools that enhance developer productivity."
    },
    matchScores: {
      education: 95,
      workExp: 90,
      skills: 93,
      expLevel: 85
    }
  },
  "4": {
    id: "4",
    title: "Full-Stack Software Engineer (Web Developer)",
    company: "Simons Foundation",
    companyLogo: "/images/Simons Foundation.svg",
    location: "New York, NY",
    workType: "On-site",
    employmentType: "Full time",
    experience: "5+ years exp",
    level: "Mid Level",
    salary: "$125K/yr - $140K/yr",
    matchPercent: 82,
    postedTime: "3 hours ago",
    applicants: 42,
    description: "The Simons Foundation is seeking a Full-Stack Software Engineer to join our technology team. You will work on web applications that support scientific research and data visualization.",
    qualifications: {
      required: [
        "5+ years of full-stack development experience",
        "Proficiency in Python and JavaScript",
        "Experience with React and Django/Flask",
        "Strong database skills (PostgreSQL, MongoDB)"
      ],
      preferred: [
        "Experience with scientific computing",
        "Background in data visualization"
      ]
    },
    responsibilities: [
      "Build and maintain web applications for scientific research",
      "Collaborate with scientists and researchers",
      "Implement data visualization features",
      "Ensure code quality and best practices"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "Generous retirement plan",
      "Professional development opportunities",
      "Collaborative work environment"
    ],
    companyInfo: {
      name: "Simons Foundation",
      founded: "Founded in 1994",
      location: "New York, NY",
      employees: "201-500 employees",
      website: "Website",
      description: "The Simons Foundation is a private foundation that supports basic research in mathematics and the sciences."
    },
    matchScores: {
      education: 85,
      workExp: 80,
      skills: 78,
      expLevel: 82
    }
  }
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params;
  const job = jobsData[id] || jobsData["1"];

  return (
    <AppShell aiPanel={<JobDetailAIPanel matchScores={job.matchScores} />}>
      <JobDetailContent job={job} />
    </AppShell>
  );
}
