import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultLogo from '../../assets/bfaaf854-f802-443f-b8a3-cf7e50c2499e.jpg';

export interface ResearchTypeItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
}

export interface PostgraduateServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
}

export interface GuaranteeItemContent {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  bullets: string[];
}

export interface SloganHighlightItemContent {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  features: string[];
}

export interface ContactInfoContent {
  brandTitle: string;
  mainHeadingPrefix: string;
  mainHeadingHighlight: string;
  description: string;
  phone1Display: string;
  phone1Raw: string;
  phone1Label: string;
  phone1Available: string;
  phone2Display: string;
  phone2Raw: string;
  phone2Label: string;
  phone2Available: string;
  bottomBannerText: string;
}

export interface AppContent {
  brandName: string;
  trialBadgeText: string;
  freeBadgeText: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  heroPill1: string;
  heroPill2: string;
  heroPill3: string;
  tickerItems: string[];
  sloganHighlights: SloganHighlightItemContent[];
  researchTypes: ResearchTypeItem[];
  postgraduateServices: PostgraduateServiceItem[];
  guarantees: GuaranteeItemContent[];
  contact: ContactInfoContent;
  footerCopyright: string;
  logoUrl?: string;
}

export const DEFAULT_LOGO_URL = defaultLogo;

export const DEFAULT_CONTENT: AppContent = {
  brandName: 'HYPER3D AI',
  trialBadgeText: '7-Days Trial',
  freeBadgeText: 'Free',
  heroTitle: 'SIMPLIFYING YOUR RESEARCH JOURNEY',
  heroSubtitle: 'Turn complex workflows into streamlined insights in seconds with intuitive interactive tools.',
  heroButtonText: 'Explore Now',
  heroPill1: '1 STOP SOLUTIONS',
  heroPill2: 'Making Your Research Valuable',
  heroPill3: 'Multiple Research Types, One Company',
  tickerItems: [
    '1 STOP SOLUTIONS',
    'ONE STOP SOLUTIONS. Making Your Research Valuable.',
    'MULTIPLE RESEARCH TYPES, ONE COMPANY TO REACH',
  ],
  sloganHighlights: [
    {
      id: 'one-stop',
      title: '1 STOP SOLUTIONS',
      subtitle: 'All Research Support Under One Roof',
      tag: 'Complete Ecosystem',
      description: 'From topic conceptualization to final publication, we eliminate fragmentation with a seamless end-to-end academic support network.',
      features: [
        'Synopsis & Proposal Guidance',
        'Thesis & Manuscript Drafting',
        'Data Analysis & Statistics',
        'Journal Submission & Rebuttals',
      ],
    },
    {
      id: 'making-valuable',
      title: 'ONE STOP SOLUTIONS.',
      subtitle: 'Making Your Research Valuable.',
      tag: 'Maximum Academic Impact',
      description: 'We elevate your raw data into impactful, peer-review ready scientific findings with high citation potential and methodological rigor.',
      features: [
        'Turnitin Plagiarism Polish',
        'PRISMA & Rigorous Methodologies',
        'Publication-Ready Visuals',
        '100% Confidentiality & Data Safety',
      ],
    },
    {
      id: 'multiple-types',
      title: 'MULTIPLE RESEARCH TYPES, ONE COMPANY TO REACH',
      subtitle: 'Universal Methodological Expertise',
      tag: 'All Study Designs',
      description: 'Whether Original Empirical Research, Systematic Reviews, Narrative Synthesis, or Meta-Analysis — our specialized PhD teams handle it all.',
      features: [
        'Original Empirical Studies',
        'PRISMA Systematic Reviews',
        'Narrative Reviews & Articles',
        'Meta-Analysis & Forest Plots',
      ],
    },
  ],
  researchTypes: [
    {
      id: 'original',
      title: 'Original Research',
      tag: 'Empirical Study',
      description: 'Primary investigation and dataset collection addressing novel scientific hypotheses with rigorous methodologies.',
      highlights: [
        'Study Design & Hypotheses',
        'Data Collection Protocols',
        'Primary Statistical Inference',
        'Peer-Review Ready Drafts',
      ],
    },
    {
      id: 'systematic',
      title: 'Systematic Review',
      tag: 'PRISMA Compliant',
      description: 'Comprehensive, structured synthesis of all available literature guided by PRISMA guidelines and protocol registration.',
      highlights: [
        'PRISMA Flow Diagram Creation',
        'Database Searching Strategies',
        'Risk of Bias Assessment',
        'Quality Appraisal Scoring',
      ],
    },
    {
      id: 'narrative',
      title: 'Narrative Review & Article',
      tag: 'Theoretical Synthesis',
      description: 'In-depth analytical overview summarizing existing knowledge, identifying gaps, and outlining future clinical directions.',
      highlights: [
        'Comprehensive Literature Search',
        'Theme Extraction & Synthesis',
        'Critical Discussion & Gaps',
        'Visual Workflow Diagrams',
      ],
    },
    {
      id: 'meta-analysis',
      title: 'Meta-Analysis',
      tag: 'Quantitative Pooling',
      description: 'Advanced statistical pooling of quantitative results across multiple studies to derive high-precision effect sizes.',
      highlights: [
        'Forest & Funnel Plot Generation',
        'Heterogeneity (I²) Analysis',
        'Sensitivity & Subgroup Testing',
        'Publication Bias Diagnostics',
      ],
    },
  ],
  postgraduateServices: [
    {
      id: 'ps-1',
      number: '01',
      title: 'Research Topic & Synopsis Guidance',
      shortDesc: 'Refine problem statements, formulate novel hypotheses, and construct robust synopsis proposals approved by academic committees.',
      details: [
        'Novelty & Gap Analysis Search',
        'Feasibility & Methodology Blueprinting',
        'IRB / Ethical Approval Documentation',
        'Aims, Objectives & Research Questions',
      ],
    },
    {
      id: 'ps-2',
      number: '02',
      title: 'Thesis & Dissertation Assistance',
      shortDesc: 'End-to-end structural formatting, chapter-by-chapter guidance, literature review curation, and scholarly writing support.',
      details: [
        'Structured Chapter Drafting (Ch 1-5)',
        'University Formatting Style Sheets',
        'Referencing (APA, Vancouver, IEEE)',
        'Comprehensive Discussion Synthesis',
      ],
    },
    {
      id: 'ps-3',
      number: '03',
      title: 'Statistical & Data Analysis Help',
      shortDesc: 'Expert data analysis using SPSS, R, Python, and STATA with publication-quality graphs and detailed interpretation reports.',
      details: [
        'Sample Size Calculation (G*Power)',
        'Parametric & Non-Parametric Tests',
        'Regression, ANOVA & Survival Analysis',
        'High-Resolution Charts & Summary Tables',
      ],
    },
    {
      id: 'ps-4',
      number: '04',
      title: 'Plagiarism Removal & Content Polish',
      shortDesc: 'Ensure 100% academic integrity with Turnitin similarity reduction, AI detection mitigation, and native language editing.',
      details: [
        'Turnitin Similarity Index < 10%',
        'Technical & Domain Terminology Polish',
        'Grammatical & Cohesion Enhancement',
        'Detailed Similarity Comparison Certificate',
      ],
    },
    {
      id: 'ps-5',
      number: '05',
      title: 'Presentation & Publication Support',
      shortDesc: 'Convert research into impactful conference slides, scientific posters, and submission-ready journal manuscript packages.',
      details: [
        'Abstracts, Posters & PPT Slides',
        'Target Journal Selection & Formatting',
        'Peer-Review Rebuttal Letter Preparation',
        'Camera-Ready Final Submission Bundles',
      ],
    },
  ],
  guarantees: [
    {
      id: 'ai-free',
      title: 'AI Free Content',
      subtitle: '100% Human Expert Authored',
      badge: 'Human Authentic',
      description: 'Every manuscript, review, and synopsis is crafted by subject-matter academic experts, ensuring zero synthetic hallucination and deep domain nuance.',
      bullets: [
        'Verified PhD & Domain Specialist Authors',
        'Zero AI Hallucination & Synthetic Bias',
        'Turnitin & CopyLeaks AI Detection Pass',
        'Deep Critical Thinking & Clinical Reasoning',
      ],
    },
    {
      id: 'data-privacy',
      title: 'Securing Your Data Privacy',
      subtitle: 'End-to-End Encryption & Confidentiality',
      badge: '100% Confidential',
      description: 'Your research data, patient datasets, raw findings, and proprietary ideas are protected with strict non-disclosure agreements and enterprise encryption.',
      bullets: [
        'Strict Non-Disclosure Agreements (NDA)',
        'ISO 27001 & HIPAA Compliant Data Handling',
        'Encrypted Cloud Vaults & Secure Transfer',
        'No Unintended Data Sharing or Storage',
      ],
    },
    {
      id: 'plagiarism-min',
      title: 'Plagiarism Minimum Permissible',
      subtitle: 'Ultra-Low Similarity Guaranteed',
      badge: '< 5% Similarity',
      description: 'Guaranteed ultra-low similarity index matching your university or journal’s strict guidelines, complete with official Turnitin similarity reports.',
      bullets: [
        'Official Turnitin Similarity Reports Included',
        'Strict Citation & Reference Attribution',
        'Sub-5% Permissible Similarity Threshold',
        'Zero Direct Copying or Paraphrasing Flags',
      ],
    },
    {
      id: 'copyright-free',
      title: 'Copyright Infringement Free Illustration',
      subtitle: 'Custom Vector Graphics & Diagrams',
      badge: 'Original Visuals',
      description: 'High-resolution PRISMA flowcharts, statistical plots, pathway diagrams, and graphical abstracts created completely custom without royalty issues.',
      bullets: [
        'Vector Graphics & High-DPI Publication Renderings',
        '100% Original PRISMA & Methodological Schematics',
        'Royalty-Free Commercial & Journal Rights',
        'Custom Scientific Color Palettes & Labels',
      ],
    },
    {
      id: 'saas-crm',
      title: 'Hassle-Free Experience with SAAS Platform',
      subtitle: 'Dedicated Research Landing & CRM Platform',
      badge: 'Unified CRM & SAAS',
      description: 'Track your thesis milestones, request live edits, communicate with statistical advisors, and manage revision cycles effortless through our cloud portal.',
      bullets: [
        'Real-Time Milestone & Deliverable Tracker',
        'Direct Academic Advisor Messaging Channel',
        'Automated Revision & Quality Control Logs',
        'Centralized Document Storage & Version Control',
      ],
    },
  ],
  contact: {
    brandTitle: 'RK PUBLICATION',
    mainHeadingPrefix: 'JUST CALL...',
    mainHeadingHighlight: 'RK publication',
    description: 'Connect directly with our senior research consultants and statistical specialists. Instant guidance for all your thesis, synopsis, and journal publication needs.',
    phone1Display: '(+91) 95 18 90 58 99',
    phone1Raw: '+919518905899',
    phone1Label: 'Primary Helpline',
    phone1Available: '24/7 Academic Support',
    phone2Display: '(+91) 73 87 77 54 34',
    phone2Raw: '+917387775434',
    phone2Label: 'Direct Advisory Desk',
    phone2Available: 'Mon - Sat (9 AM - 8 PM)',
    bottomBannerText: 'JUST CALL... RK publication — Direct Line Available',
  },
  footerCopyright: '© 2026 Hyper3D. All rights reserved.',
  logoUrl: DEFAULT_LOGO_URL,
};

const STORAGE_KEY = 'custom_website_content_v1';

interface ContentContextType {
  content: AppContent;
  updateContent: (newContent: Partial<AppContent>) => void;
  resetToDefault: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  openAdmin: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<AppContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CONTENT, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to parse saved content', e);
    }
    return DEFAULT_CONTENT;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('rk_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.error('Failed to save content', e);
    }
  }, [content]);

  const updateContent = (newPartial: Partial<AppContent>) => {
    setContent((prev) => ({
      ...prev,
      ...newPartial,
    }));
  };

  const resetToDefault = () => {
    setContent(DEFAULT_CONTENT);
    localStorage.removeItem(STORAGE_KEY);
  };

  const login = (email: string, pass: string): boolean => {
    if (email.trim().toLowerCase() === 'rkresearcher@gmail.com' && pass === 'rkme') {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem('rk_admin_auth', 'true');
      } catch (e) {
        console.error('Session error', e);
      }
      setIsLoginModalOpen(false);
      setIsAdminOpen(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdminOpen(false);
    try {
      sessionStorage.removeItem('rk_admin_auth');
    } catch (e) {
      console.error('Session error', e);
    }
  };

  const openAdmin = () => {
    if (isAuthenticated) {
      setIsAdminOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        resetToDefault,
        isAdminOpen,
        setIsAdminOpen,
        isAuthenticated,
        isLoginModalOpen,
        setIsLoginModalOpen,
        login,
        logout,
        openAdmin,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
