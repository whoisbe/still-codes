import { useState } from 'react';
import svgPaths from "./imports/svg-mr5qr1s2nm";
import imgLogo from "figma:asset/88b54ce85e89de82af5d7646da98afeba8946900.png";

function Logo() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <img alt="Logo" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-[24px] relative shrink-0 w-[311.438px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[24px] items-center relative w-[311.438px]">
        <button onClick={() => scrollToSection('about')} className="h-[24px] bg-transparent border-0 cursor-pointer p-0">
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre hover:text-black transition-colors">About</p>
        </button>
        <button onClick={() => scrollToSection('services')} className="h-[24px] bg-transparent border-0 cursor-pointer p-0">
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre hover:text-black transition-colors">Services</p>
        </button>
        <button onClick={() => scrollToSection('skills')} className="h-[24px] bg-transparent border-0 cursor-pointer p-0">
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre hover:text-black transition-colors">Skills</p>
        </button>
        <button onClick={() => scrollToSection('contact')} className="h-[24px] bg-transparent border-0 cursor-pointer p-0">
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre hover:text-black transition-colors">Contact</p>
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="fixed bg-[rgba(255,255,255,0.95)] box-border content-stretch flex flex-col h-[81px] items-start left-0 top-0 w-full z-50 backdrop-blur-sm">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="h-[80px] w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[80px] items-center justify-between px-[24px] py-0 w-full max-w-[1143px] mx-auto">
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-[776px] relative w-full pt-[81px]">
      <div className="max-w-[1143px] mx-auto px-[24px] py-[96px]">
        <div className="flex flex-col items-center justify-center min-h-[600px]">
          <div className="mb-[32px]">
            <img src={imgLogo} alt="Logo" className="w-[320px] h-[320px] object-contain" />
          </div>
          
          <h1 className="font-['Poiret_One:Regular',sans-serif] leading-[75px] text-[60px] text-black text-center tracking-[1.5px] mb-[32px]">
            Simplifying the complex
          </h1>
          
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[39px] text-[24px] text-[rgba(0,0,0,0.8)] text-center max-w-[672px] mb-[48px]">
            AI Search & Analytics Engineering Studio specializing in intelligent data systems that think, explore, and take action
          </p>
          
          <button 
            onClick={scrollToServices}
            className="flex items-center gap-[8px] text-[rgba(0,0,0,0.7)] hover:text-black transition-colors cursor-pointer bg-transparent border-0 p-0"
          >
            <p className="font-['Space_Mono:Regular',sans-serif] leading-[28px] text-[18px]">View services</p>
            <div className="size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d="M8 3.33333V12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
                <path d={svgPaths.pc0e6f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="bg-gray-50 w-full py-[96px]">
      <div className="max-w-[896px] mx-auto px-[24px]">
        <div className="flex flex-col gap-[48px]">
          <h2 className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] text-center">
            About
          </h2>
          
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.7)]">
            I build AI-native search and analytics applications for companies that want to go beyond dashboards and keyword search. 
            With expertise in Elasticsearch, Typesense, OpenSearch, vector search, agentic frameworks, and modern analytics engineering, 
            I create intelligent data systems that think, explore, and take action — not just surface results. This boutique development 
            practice specializes in AI-driven search solutions, analytics engineering development, and agentic framework implementations 
            that transform how organizations interact with their data.
          </p>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
  pricing?: string;
}

function ServiceCard({ title, description, tags, pricing }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-[14px] h-full relative">
      <div className="box-border flex flex-col h-full items-start overflow-clip p-[25px] rounded-[inherit]">
        <div className="flex flex-col gap-[12px] w-full h-full">
          <h3 className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] min-h-[48px]">
            {title}
          </h3>
          
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.6)] flex-1">
            {description}
          </p>
          
          {pricing && (
            <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.8)] mb-[12px]">
              {pricing}
            </p>
          )}
          
          <div className="relative w-full min-h-[72px]">
            <div className="flex flex-wrap gap-[8px]">
              {tags.map((tag, index) => (
                <div key={index} className="bg-[rgba(0,0,0,0.05)] h-[28px] rounded-[1.67772e+07px] px-[12px] py-[4px]">
                  <p className="font-['Space_Mono:Regular',sans-serif] leading-[20px] text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "AI Search MVP",
      description: "Build a fully functional AI search system in 4–6 weeks. Complete with search backend (Typesense/Elastic/OpenSearch), vector + keyword hybrid search, embedding pipeline, reranking, SvelteKit UI, and LLM query enrichment. Perfect for SaaS startups adding search or internal enterprise teams needing better search UX.",
      tags: ["Vector Search", "Hybrid Search", "SvelteKit", "RAG"],
      pricing: "$12k–$35k"
    },
    {
      title: "AI Analytics Copilot",
      description: "Interactive copilot that analyzes data, generates SQL, and answers questions. Features agentic SQL generator, DuckDB analytics engine, dashboard generation via natural language, and SvelteKit interface. Ideal for teams wanting to democratize data access.",
      tags: ["Agentic AI", "DuckDB", "SQL Generation", "NL Interface"],
      pricing: "$15k–$45k"
    },
    {
      title: "Autonomous Data Agent",
      description: "Deployable agents for data transformations, cleaning, or exploration. Includes multi-agent orchestration, SQL runner, file parser, schema inspector, vector search tools, evaluations + guardrails, and integration with your data platform. Built for intelligent workflow automation.",
      tags: ["Multi-Agent", "Automation", "Data Pipeline", "LLM"],
      pricing: "$20k–$50k"
    }
  ];

  return (
    <div id="services" className="bg-white w-full py-[96px]">
      <div className="max-w-[1143px] mx-auto px-[24px]">
        <div className="flex flex-col gap-[48px]">
          <h2 className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] text-center">
            Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillColumn({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="box-border flex h-[36px] items-start pb-[9px] pt-0 px-0 w-full border-b border-[rgba(0,0,0,0.1)]">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[27px] text-[18px] text-[rgba(0,0,0,0.9)]">
          {title}
        </p>
      </div>
      
      <div className="flex flex-col gap-[8px]">
        {skills.map((skill, index) => (
          <div key={index} className="h-[24px] relative w-full flex items-center">
            <div className="bg-[rgba(0,0,0,0.3)] rounded-full size-[6px] mr-[8px]" />
            <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.7)]">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Frontend / UI",
      skills: ["SvelteKit", "React / NextJS", "Tailwind CSS", "Vercel / Cloudflare"]
    },
    {
      title: "Search & Analytics",
      skills: ["Elasticsearch", "OpenSearch", "Typesense", "DuckDB", "BigQuery", "dbt"]
    },
    {
      title: "AI / Agents",
      skills: ["OpenAI / Anthropic", "LangChain", "DSPy", "HuggingFace", "Vector DBs"]
    }
  ];

  return (
    <div id="skills" className="bg-gray-50 w-full py-[96px]">
      <div className="max-w-[896px] mx-auto px-[24px]">
        <div className="flex flex-col gap-[48px]">
          <h2 className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
            {skillCategories.map((category, index) => (
              <SkillColumn key={index} title={category.title} skills={category.skills} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const handleGetInTouch = () => {
    window.location.href = 'mailto:hello@yourdomain.com';
  };

  return (
    <div id="contact" className="bg-white w-full py-[96px]">
      <div className="max-w-[896px] mx-auto px-[24px]">
        <div className="flex flex-col items-center gap-[48px]">
          <h2 className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] text-center">
            Let's Build Something Intelligent
          </h2>
          
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.6)] text-center max-w-[647px]">
            Ready to go beyond traditional search and analytics? Let's discuss how AI-native systems can transform your data infrastructure and unlock new capabilities.
          </p>
          
          <button 
            onClick={handleGetInTouch}
            className="bg-black h-[40px] rounded-[8px] px-[40px] flex items-center gap-[8px] hover:bg-[rgba(0,0,0,0.8)] transition-colors cursor-pointer border-0"
          >
            <div className="size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2f8e7e80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p17070980} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
            <p className="font-['Space_Mono:Regular',sans-serif] leading-[20px] text-[14px] text-white">
              Get in Touch
            </p>
          </button>
          
          <div className="flex gap-[24px] items-center pt-[32px]">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="size-[20px] hover:opacity-70 transition-opacity">
              <svg className="block size-full" fill="none" viewBox="0 0 16 19">
                <path d={svgPaths.p17d8aa0} stroke="rgba(0,0,0,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </a>
            
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="size-[20px] hover:opacity-70 transition-opacity">
              <svg className="block size-full" fill="none" viewBox="0 0 12 13">
                <path d={svgPaths.p21836480} stroke="rgba(0,0,0,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p1a426680} stroke="rgba(0,0,0,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p29efb800} stroke="rgba(0,0,0,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </a>
            
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="size-[20px] hover:opacity-70 transition-opacity">
              <svg className="block size-full" fill="none" viewBox="0 0 19 16">
                <path d={svgPaths.p3693ea00} stroke="rgba(0,0,0,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white w-full py-[33px] border-t border-[rgba(0,0,0,0.05)]">
      <div className="max-w-[1143px] mx-auto px-[24px]">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.4)] text-center">
          © 2025 AI Search & Analytics Engineering Studio. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
