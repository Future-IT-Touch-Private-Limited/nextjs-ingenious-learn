import { FaAward, FaCoins, FaCompass, FaDice, FaFileAlt, FaLuggageCart, FaRoute, FaSearch, FaSignal, FaTimesCircle, FaUserShield } from "react-icons/fa";
import Image from "next/image";

// import course1 from "/images/course-sprite-32.png"
// import course11 from "/images/acd-sprite.png"

import { faUser, faBookOpen, faUserCheck, faHeart, faCode, faAward, faFile, faHeadphones, faFlowChart, faDatabase, faCompass, faBook, faBriefcase, faTicket, faZap, faStamp, faCodeCompare, faLuggageCart } from '@fortawesome/free-solid-svg-icons';

export const courses = [
  {
    img: "/images/CISSP-min.webp",
    title: "CISSP Certification Training 2024",
    hours: "48 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.5",
    price: "2999",
    category: 'Trending',
    lione: "16 hrs of live instructor-led sessions and experiential workshops",
    litwo: "16 hrs of live instructor-led sessions and experiential workshops"
  },
  {
    img: "/images/CCSP-min.webp",
    title: "CCSP Training & Certification Course",
    hours: "48 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.0",
    price: "3999",
    category: 'New',
    lione: "16 hrs of live instructor-led sessions and experiential workshops",
    litwo: "16 hrs of live instructor-led sessions and experiential workshops"
  },
  {
    img: "/images/CISM-min.webp",
    title: "CISM Certification Training",
    hours: "32 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "5.0",
    price: "4999",
    category: 'Career-Oriented',
    lione: "16 hrs of live instructor-led sessions and experiential workshops",
    litwo: "16 hrs of live instructor-led sessions and experiential workshops"
  },
  {
    img: "/images/CISA-min.webp",
    title: "CISA Certification Training",
    hours: "40 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.9",
    price: "2999",
    category: 'Combo',
    lione: "16 hrs of live instructor-led sessions and experiential workshops",
    litwo: "16 hrs of live instructor-led sessions and experiential workshops"
  },
  {
    img: "/images/CISSP-min.webp",
    title: "ISO/IEC 27001:2022 Lead Implementer",
    hours: "32 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.8",
    price: "8999",
    category: 'Popular',
    lione: "16 hrs of live instructor-led sessions and experiential workshops",
    litwo: "16 hrs of live instructor-led sessions and experiential workshops"
  },
  {
    img: "/images/CCSP-min.webp",
    title: "Security+ Certification Training",
    hours: "40 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.8",
    price: "9999",
    category: 'Free',
    lione: "16 hrs of live instructor-led sessions and experiential workshops",
    litwo: "16 hrs of live instructor-led sessions and experiential workshops"
  },
  {
    img: "/images/CISM-min.webp",
    title: "CIPM Certification Training",
    hours: "32 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "5.0",
    price: "4999",
    category: 'Beginner',
    lione: "16 hrs of live instructor-led sessions and experiential workshops",
    litwo: "16 hrs of live instructor-led sessions and experiential workshops"
  },
  {
    img: "/images/CISA-min.webp",
    title: "CIPP/E European Privacy Online Training",
    hours: "32 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.6",
    price: "2999",
    category: 'Intermediate',
    lione: "16 hrs of live instructor-led sessions and experiential workshops",
    litwo: "16 hrs of live instructor-led sessions and experiential workshops"
  }
];
export const coursesTwo = [
  {
    img: "/images/CISSP-min.webp",
    title: 'MS-4006-A Training Course',
    hours: '08 Hrs',
    trainingType: 'LIVE Instructor-led Training',
    link: '/certified-ethical-hacker-ceh-training#course-description',
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CCSP-min.webp",
    title: 'IC-002T00 Training Course',
    hours: '16 Hours',
    trainingType: 'LIVE Instructor-led Training',
    link: '/certified-ethical-hacker-ceh-training#course-description',
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISM-min.webp",
    title: 'Microsoft DevOps Solutions Online Training | AZ-400T00-A Training',
    hours: '32 Hours',
    trainingType: 'LIVE Instructor-led Training',
    link: '/certified-ethical-hacker-ceh-training#course-description',
    rank: "4.5",
    price: "200",
    price: "200"
  },
  {
    img: "/images/CISA-min.webp",
    title: 'Microsoft Azure MLOps Training Course',
    hours: '16 Hrs',
    trainingType: 'LIVE Instructor-led Training',
    link: '/certified-ethical-hacker-ceh-training#course-description',
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISSP-min.webp",
    title: 'DP-3014 Training Course',
    hours: '08 Hrs',
    trainingType: 'LIVE Instructor-led Training',
    link: '/certified-ethical-hacker-ceh-training#course-description',
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISM-min.webp",
    title: 'Microsoft Office 365 Project Online Professional Training (Cloud Version)',
    hours: '24 Hours',
    trainingType: 'LIVE Instructor-led Training',
    link: '/certified-ethical-hacker-ceh-training#course-description',
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISM-min.webp",
    title: 'Microsoft Project 2019 Online Training',
    hours: '24 Hours',
    trainingType: 'LIVE Instructor-led Training',
    link: '/certified-ethical-hacker-ceh-training#course-description',
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISA-min.webp",
    title: 'Certified in Cybersecurity (CC) Exam Training',
    hours: '16 Hrs',
    trainingType: 'LIVE Instructor-led Training',
    link: '/certified-ethical-hacker-ceh-training#course-description',
    rank: "4.5",
    price: "200"
  }
];

export const careerOrientedCourses = [
  {
    img: "/images/CISSP-min.webp",
    title: "PCI-DSS (Payment Card Industry Data Security Standard) Implementation Online Training",
    hours: "24 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISM-min.webp",
    title: "Advanced Penetration Testing Training Course",
    hours: "40 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "5",
    price: "200"
  },
  {
    img: "/images/CISM-min.webp",
    title: "SOC Analyst Training",
    hours: "40 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISA-min.webp",
    title: "Cyber Security Orientation Program (Foundation Level) Online Training",
    hours: "40 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "5",
    price: "200"
  },
  {
    img: "/images/CISSP-min.webp",
    title: "GRC RSA Archer Online Training Course",
    hours: "30 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "5",
    price: "200"
  },
  {
    img: "/images/CISM-min.webp",
    title: "Advanced Cloud Security Governance Training",
    hours: "40 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISM-min.webp",
    title: "Information Systems Implementer Hands-on Online Training",
    hours: "16 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "4.5",
    price: "200"
  },
  {
    img: "/images/CISA-min.webp",
    title: "GRC : (Governance, Risk and Compliance) Hands-on Online Training",
    hours: "40 Hrs",
    trainingType: "LIVE Instructor-led Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    rank: "5",
    price: "200"
  }
];

export const comboCourses = [
  {
    course1: "CIPP/E",
    course2: "CIPM",
    trainingType: "Training + Exam",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    dataText: "CIPP/E + CIPM",
    price: "200"
  },
  {
    course1: "CIPP/E",
    course2: "CIPT",
    trainingType: "Training + Exam",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    dataText: "CIPP/E + CIPT",
    price: "200"
  },
  {
    course1: "Ethical Hacking",
    course2: "SOC",
    trainingType: "Only Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    dataText: "Ethical Hacking + SOC",
    price: "200"
  },
  {
    course1: "Ethical Hacking",
    course2: "Advanced Penetration Testing",
    trainingType: "Only Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    dataText: "Ethical Hacking + APT",
    price: "200"
  },
  {
    course1: "AWS Architect",
    course2: "AWS Security",
    trainingType: "Only Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    dataText: "AWS Architect + AWS Security",
    price: "200"
  },
  {
    course1: "CISSP",
    course2: "CISM",
    trainingType: "Only Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    dataText: "CISSP + CISM",
    price: "200"
  },
  {
    course1: "CCSP",
    course2: "AWS Combo",
    trainingType: "Only Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    dataText: "CCSP + AWS COMBO",
    price: "200"
  },
  {
    course1: "CISSP",
    course2: "CISA",
    trainingType: "Only Training",
    link: "/certified-ethical-hacker-ceh-training#course-description",
    dataText: "CISSP + CISA",
    price: "200"
  }
];



export const tabs = [
  {
    id: 'ec-council', img: "/images/ecouncil.webp", label: 'EC Council', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CEH v12", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CHFI v10", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CND v2", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CCISO", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "E|CDE", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "EC-Council CPENT", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CSA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ECIH", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ECES", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Disaster Recovery Professional v3", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CASE .Net", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CASE Java", img: "/images/ecouncil.webp" },
    ],
    contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CEH v12", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CHFI v10", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CND v2", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CCISO", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "E|CDE", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "EC-Council CPENT", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CSA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ECIH", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ECES", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Disaster Recovery Professional v3", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CASE .Net", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CASE Java", img: "/images/ecouncil.webp" },
    ]
  },
  {
    id: '(isc)2', img: "/images/isc.webp", label: '(ISC)2', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CISSP", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CCSP", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CISSP-ISSAP", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "SSCP", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CGRC", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CSSLP", img: "/images/ecouncil.webp" },
    ],
    contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CISSP", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CCSP", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CISSP-ISSAP", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "SSCP", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CGRC", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CSSLP", img: "/images/ecouncil.webp" },
    ]
  },
  {
    id: 'isaca', img: "/images/isaca.webp", label: 'ISACA', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CISA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CISM", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CRISC", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CGEIT", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CDPSE", img: "/images/ecouncil.webp" },
    ]
    , contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CISA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CISM", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CRISC", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CGEIT", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CDPSE", img: "/images/ecouncil.webp" },
    ]
  },
  {
    id: 'iapp', img: "/images/iphone-app.webp", label: 'IAPP', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CIPP/E", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CIPM", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CIPT", img: "/images/ecouncil.webp" },
    ], contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CIPP/E", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CIPM", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CIPT", img: "/images/ecouncil.webp" },
    ]
  },
  {
    id: 'iso', img: "/images/iso.webp", label: 'ISO', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 27001 Foundation", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 27001:2022 LA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 27001:2022 LI", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 22301 Foundation", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 22301 LI", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 22301 LA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 20000 Foundation", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 20000 (ITSM) LI", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 20000 (ITSM) LA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 37001 LA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 2000 (ITSM) LI", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 31000: Risk Manager", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 9001 Foundation", img: "/images/ecouncil.webp" },
    ],
    contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 27001 Foundation", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 27001:2022 LA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 27001:2022 LI", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 22301 Foundation", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 22301 LI", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 22301 LA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 20000 Foundation", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 20000 (ITSM) LI", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO/IEC 20000 (ITSM) LA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 37001 LA", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 2000 (ITSM) LI", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 31000: Risk Manager", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "ISO 9001 Foundation", img: "/images/ecouncil.webp" },
    ]
  },
  {
    id: 'comptia', img: "/images/cmptia.webp", label: 'CompTIA', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Security+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA CySA+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA PenTest+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Network+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CASP+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Cloud+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA A+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA IT Fundamentals", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Data+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Security+ SYO-601", img: "/images/ecouncil.webp" },
    ], contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Security+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA CySA+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA PenTest+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Network+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CASP+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Cloud+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA A+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA IT Fundamentals", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Data+", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "CompTIA Security+ SYO-601", img: "/images/ecouncil.webp" },
    ]
  },
  {
    id: 'aws', img: "/images/aws.webp", label: 'Cloud Computing', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Cloud Practitioner", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Solutions Architect - Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Solutions Architect - Professional", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified SysOps Administrator - Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Developer - Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified DevOps Engineer - Professional", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Security - Specialty", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Advanced Networking - Specialty", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Machine Learning - Specialty", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Database - Specialty", img: "/images/ecouncil.webp" },
    ], contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Cloud Practitioner", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Solutions Architect - Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Solutions Architect - Professional", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified SysOps Administrator - Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Developer - Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified DevOps Engineer - Professional", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Security - Specialty", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Advanced Networking - Specialty", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Machine Learning - Specialty", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "AWS Certified Database - Specialty", img: "/images/ecouncil.webp" },
    ]
  },
  {
    id: 'microsoft', img: "/images/5234318.webp", label: 'Web Desinging', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Fundamentals", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Administrator Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Security Engineer Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Solutions Architect Expert", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure DevOps Engineer Expert", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure AI Engineer Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Data Engineer Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Developer Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", img: "/images/ecouncil.webp" },
    ], contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Fundamentals", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Administrator Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Security Engineer Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Solutions Architect Expert", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure DevOps Engineer Expert", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure AI Engineer Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Data Engineer Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Azure Developer Associate", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", img: "/images/ecouncil.webp" },
    ]
  },
  {
    id: 'cisco', img: "/images/cisco.webp", label: 'Cisco', content: [
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Associate (CCNA)", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Enterprise", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Security", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Associate (CCNA) Security", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Collaboration", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Data Center", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Wireless", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Service Provider", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Internetwork Expert (CCIE) Enterprise", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Internetwork Expert (CCIE) Security", img: "/images/ecouncil.webp" },
    ]
    , contentTwo: [
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Associate (CCNA)", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Enterprise", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Security", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Associate (CCNA) Security", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Collaboration", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Data Center", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Wireless", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Network Professional (CCNP) Service Provider", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Internetwork Expert (CCIE) Enterprise", img: "/images/ecouncil.webp" },
      { to: "/certified-ethical-hacker-ceh-training", text: "Cisco Certified Internetwork Expert (CCIE) Security", img: "/images/ecouncil.webp" },
    ]
  },
];




export const marqueeData = [
  {
    category: "BI and Visualization",
    link: "#",
    iconClass: <FaCompass />,
    iconColor: "rgb(252 221 221)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(240 53 86)"
  },
  {
    category: "Programming",
    link: "#",
    iconClass: <FaCoins />,
    iconColor: "rgb(214 232 221)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(53 152 107)"
  },
  {
    category: "IT Service Management",
    link: "#",
    iconClass: <FaRoute />,
    iconColor: "rgb(225 226 255)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(123 110 252)"
  },
  {
    category: "Quality",
    link: "#",
    iconClass: <FaCoins />,
    iconColor: "rgb(246 225 193)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(220 155 0)"
  },
  {
    category: "Business Management",
    link: "#",
    iconClass: <FaFileAlt />,
    iconColor: "rgb(225 226 255)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(123 110 252)"
  },
  {
    category: "Cybersecurity",
    link: "#",
    iconClass: <FaSignal />,
    iconColor: "rgb(252 221 221)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(240 53 86)"
  },
  {
    category: "DevOps",
    link: "#",
    iconClass: <FaLuggageCart />,
    iconColor: "rgb(214 232 221)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(53 152 107)"
  },
  {
    category: "Web Development",
    link: "#",
    iconClass: <FaSearch />,
    iconColor: "rgb(225 226 255)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(123 110 252)"
  },
  {
    category: "Cloud Computing",
    link: "#",
    iconClass: <FaUserShield />,
    iconColor: "rgb(246 225 193)",
    buttonLink: "#",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(220 155 0)"
  },
  {
    category: "Data Science",
    link: "",
    iconClass: <FaAward />,
    iconColor: "text-home-blue-500",
    buttonLink: "",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "red"
  },
  {
    category: "Project Management",
    link: "",
    iconClass: <FaDice />,
    iconColor: "rgb(219 228 255)",
    buttonLink: "",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(93 122 255)"
  },
  {
    category: "Agile Management",
    link: "",
    iconClass: <FaTimesCircle />,
    iconColor: "rgb(252 221 221)",
    buttonLink: "",
    buttonText: "Explore",
    buttonIconColor: "red",
    bgColor: "rgb(240 53 86)"
  }
];

export const facultyMembers = [
  {
    name: "Zaid Sabih",
    role: "Ethical Hacker",
    image: "https://d2o2utebsixu4k.cloudfront.net/Expert Images_Zaid-8835ac9a6370457a82777c17f61ccb99.svg",
    logos: [
      "/images/downloader.webp",
      "/images/download2.webp"
    ],
    iconColor: "#fff",
    iconbgColor: "#0dae6b",
    marginTop: "40px",
    animation: "fade-up"
  },
  {
    name: "John Mulligan",
    role: "Node.js developer",
    image: "https://d2o2utebsixu4k.cloudfront.net/Expert Images_John-35a681ddf9304086b1b67ef83af62477.svg",
    logos: [
      "/images/download3.webp",
      "/images/download4.webp"
    ],
    iconColor: "#fff",
    iconbgColor: "#ffcf01"
    ,
    marginTop: "0px",
    animation: "fade-down"

  },
  {
    name: "Lindy Quick",
    role: "SAFe Practice Head - Global",
    image: "https://d2o2utebsixu4k.cloudfront.net/Expert Images_Lindy-de971d2fb519465b9cfb7bcbf580e65c.svg",
    logos: [
      "/images/download5.webp",
      "/images/download6.svg"
    ],
    iconColor: "#fff",
    iconbgColor: "#0dae6b",
    marginTop: "40px",
    animation: "fade-up"
  },
  {
    name: "Kingson Jebaraj",
    role: "Program Director, Cloud",
    image: "https://d2o2utebsixu4k.cloudfront.net/Expert Images_Kingson-d8f1aaf0413b45ef8f690a2b4b6d5c1d.svg",
    logos: [
      "/images/download7.svg",
      "/images/download8.webp"
    ],
    iconColor: "#fff",
    iconbgColor: "#ffcf01",
    marginTop: "0px",
    animation: "fade-down"
  },
  {
    name: "Neil Hays",
    role: "SAFe SPCT",
    image: "https://d2o2utebsixu4k.cloudfront.net/Expert Images_Neil-c37242a65c254cf3ad3834e9c2e0f4cc.svg",
    logos: [
      "/images/download9.webp",
      "/images/download10.webp"
    ],
    iconColor: "#fff",
    iconbgColor: "#0dae6b",
    marginTop: "40px",
    animation: "fade-up"

  }
];
export default facultyMembers;

export const readmoreData = [
  {
    id: 1,
    title: "Economic Times",
    description: "upGrad's 'Bus of Opportunity' Campaign is encouraging India Inc. to upskill with 25+ GenAI Courses",
    imageUrl: "/images/rukti.webp",
    articleUrl: "/blog",
    logoUrl: "/images/download11.webp",
  },
  {
    id: 2,
    title: "Economic Times",
    description: "upGrad's 'Bus of Opportunity' Campaign is encouraging India Inc. to upskill with 25+ GenAI Courses",
    imageUrl: "/images/rukti.webp",
    articleUrl: "/blog",
    logoUrl: "/images/download11.webp",
  },
  {
    id: 3,
    title: "Economic Times",
    description: "upGrad's 'Bus of Opportunity' Campaign is encouraging India Inc. to upskill with 25+ GenAI Courses",
    imageUrl: "/images/rukti.webp",
    articleUrl: "/blog",
    logoUrl: "/images/download11.webp",
  },
  {
    id: 4,
    title: "Economic Times",
    description: "upGrad's 'Bus of Opportunity' Campaign is encouraging India Inc. to upskill with 25+ GenAI Courses",
    imageUrl: "/images/rukti.webp",
    articleUrl: "/blog",
    logoUrl: "/images/download11.webp",
  },
  // Add more entries as needed
];



export const reviewData = [
  {
    title: "Amazing Instructors!",
    rating: 5,
    content: "Very good and insightful training facilitated by KnowledgeHut. The instructor was on top of it and could explain the concepts lucidly. Instructors’ real-life experiences were the key. Live examples were another excellent feature in the training. ",
    author: {
      name: "Nilesh Khemkar",
      role: "Product Manager",
      imageUrl: "/images/Avatar_Review_Male.svg",
      image: "/images/LinkedIn.svg",
      profileLink: ""
    }
  },
  {
    title: "Amazing Instructors!",
    rating: 5,
    content: "Very good and insightful training facilitated by KnowledgeHut. The instructor was on top of it and could explain the concepts lucidly. Instructors’ real-life experiences were the key. Live examples were another excellent feature in the training. ",
    author: {
      name: "Nilesh Khemkar",
      role: "Product Manager",
      imageUrl: "/images/Avatar_Review_Male.svg",
      image: "/images/Google.svg",
      profileLink: ""
    }
  },
  {
    title: "Amazing Instructors!",
    rating: 5,
    content: "Very good and insightful training facilitated by KnowledgeHut. The instructor was on top of it and could explain the concepts lucidly. Instructors’ real-life experiences were the key. Live examples were another excellent feature in the training. ",
    author: {
      name: "Nilesh Khemkar",
      role: "Product Manager",
      imageUrl: "/images/Avatar_Review_Male.svg",
      image: "/images/Google.svg",
      profileLink: ""
    }
  },
  {
    title: "Amazing Instructors!",
    rating: 5,
    content: "Very good and insightful training facilitated by KnowledgeHut. The instructor was on top of it and could explain the concepts lucidly. Instructors’ real-life experiences were the key. Live examples were another excellent feature in the training. ",
    author: {
      name: "Nilesh Khemkar",
      role: "Product Manager",
      imageUrl: "/images/Avatar_Review_Male.svg",
      image: "/images/LinkedIn.svg",
      profileLink: ""
    }
  },
  {
    title: "Amazing Instructors!",
    rating: 5,
    content: "Very good and insightful training facilitated by KnowledgeHut. The instructor was on top of it and could explain the concepts lucidly. Instructors’ real-life experiences were the key. Live examples were another excellent feature in the training. ",
    author: {
      name: "Nilesh Khemkar",
      role: "Product Manager",
      imageUrl: "/images/Avatar_Review_Male.svg",
      image: "/images/Google.svg",
      profileLink: ""
    }
  },
  {
    title: "Amazing Instructors!",
    rating: 5,
    content: "Very good and insightful training facilitated by KnowledgeHut. The instructor was on top of it and could explain the concepts lucidly. Instructors’ real-life experiences were the key. Live examples were another excellent feature in the training. ",
    author: {
      name: "Nilesh Khemkar",
      role: "Product Manager",
      imageUrl: "/images/LinkedIn.svg",
      image: "/images/Google.svg",
      profileLink: ""
    }
  },

];


export const faqs = [
  {
    title: '1. What is DevSecOps certification?',
    content: `<strong>DevSecOps certification</strong> is a professional certification that validates an individual’s knowledge and skills in applying security practices within the DevOps framework. It demonstrates proficiency in integrating security into the software development and deployment lifecycle, emphasizing collaboration and automation to ensure secure applications and infrastructure.`,
  },
  {
    title: '2. What is the format of the E|CDE exam?',
    content: `Exam Type: Multiple-choice questions (MCQ)
Number of Questions: 100
Duration: 4 hours
Passing Score: 70%`,
  },
  {
    title: '3. What is the eligibility criteria to apply for the EC-Council Certified DevSecOps Engineer (E|CDE)?',
    content: `The eligibility criteria to apply for the EC-Council Certified DevSecOps Engineer (E|CDE) certification are as follows:
- Good understanding of Linux OS and basic Linux commands
- Understanding of one of the Cloud Service Providers like AWS or Azure or GCP
- Understanding of security concepts and architecture
- Basic understanding of SDLC Lifecycle and automation`,
  },
  {
    title: '4. How many questions are there in the E|CDE exam?',
    content: 'The E|CDE exam consists of 100 multiple-choice questions.',
  },
  {
    title: '5. What is the duration of the exam?',
    content: 'The E|CDE exam lasts 4 hours.',
  },
  {
    title: '6. What is the passing percentage of the exam?',
    content: 'The passing percentage for the E|CDE exam is 70%.',
  },
  {
    title: '7. Why is DevSecOps gaining popularity and DevOps struggling?',
    content: `Leading organizations today are adopting DevSecOps to minimize data breach risks and boost business agility.

Organizations that have not effectively implemented DevSecOps often encounter the following challenges:
- Increased security vulnerabilities
- Reactive security measures
- Compliance and regulatory issues
- Lack of collaboration and communication
- Slower time-to-market
- Increased remediation costs
- Limited trust and customer confidence`,
  },
  {
    title: '8. Why choose Certified DevSecOps Engineer Certification?',
    content: `Choosing a Certified DevSecOps Engineer Certification offers the following benefits:
- Enhanced skills
- Industry recognition
- Career advancement
- Risk mitigation
- Competitive advantage`,
  },
  {
    title: '9. What are the roles and responsibilities of DevSecOps engineers?',
    content: `DevSecOps engineers have the following roles and responsibilities:
- Integrate security practices throughout the SDLC.
- Automate security processes using tools and technologies.
- Perform threat modeling to identify security threats.
- Evaluate and implement security tools and technologies.`,
  },
];

export const training = [
  {
    courseName: "CISSP - Certified Information Systems Security Professional",
    startDate: "01 July 2024",
    endDate: "01 August 2024",
    time: "08:00 / 10:00 IST",
    batchType: "Weekday",
    trainingMode: "Online"
  },
  {
    courseName: "CISSP - Certified Information Systems Security Professional",
    startDate: "04 August 2024",
    endDate: "14 September 2024",
    time: "19:00 / 23:00 IST",
    batchType: "Weekday",
    trainingMode: "Online"
  },
  // Add more training objects as needed
];


export const eventsData = [
  {
    id: 1,
    title: "Cultivating a CISSP Mindset: 10 Questions to Elevate Your Expertise",
    date: "3 July (Wed)",
    time: "6:30 – 7:30 PM IST",
    imgSrc: "/images/The-Road.webp",
    link: "",
    registered: 355,
  },
  {
    id: 2,
    title: "The Road To CC – Getting Certified in Cybersecurity (ISC2)",
    date: "4 July (Thur)",
    time: "8 – 9 PM (IST)",
    imgSrc: "/images/Cultivating.webp",
    link: "",
    registered: 300,
  },
  {
    id: 3,
    title: "Mastering Cloud Security: Essential Practices and Tools",
    date: "5 July (Fri)",
    time: "5:00 – 6:00 PM IST",
    imgSrc: "/images/The-Road.webp",
    link: "",
    registered: 450,
  },
  {
    id: 4,
    title: "Understanding Ethical Hacking: A Comprehensive Guide",
    date: "6 July (Sat)",
    time: "4:00 – 5:00 PM IST",
    imgSrc: "/images/Cultivating.webp",
    link: "",
    registered: 500,
  },
  {
    id: 5,
    title: "Cybersecurity Trends in 2024: What You Need to Know",
    date: "7 July (Sun)",
    time: "3:00 – 4:00 PM IST",
    imgSrc: "/images/Cultivating.webp",
    link: "",
    registered: 600,
  },
  {
    id: 6,
    title: "Building a Career in Cybersecurity: Tips and Strategies",
    date: "8 July (Mon)",
    time: "2:00 – 3:00 PM IST",
    imgSrc: "/images/The-Road.webp",
    link: "",
    registered: 400,
  },
  {
    id: 7,
    title: "Advanced Network Security Techniques",
    date: "9 July (Tue)",
    time: "1:00 – 2:00 PM IST",
    imgSrc: "/images/Cultivating.webp",
    link: "",
    registered: 350,
  },
  {
    id: 8,
    title: "Introduction to Cyber Threat Intelligence",
    date: "10 July (Wed)",
    time: "12:00 – 1:00 PM IST",
    imgSrc: "/images/The-Road.webp",
    link: "",
    registered: 450,
  },
  {
    id: 9,
    title: "Securing Your IoT Devices: Best Practices",
    date: "11 July (Thur)",
    time: "11:00 AM – 12:00 PM IST",
    imgSrc: "/images/Cultivating.webp",
    link: "",
    registered: 500,
  },
  {
    id: 10,
    title: "Incident Response Planning and Execution",
    date: "12 July (Fri)",
    time: "10:00 – 11:00 AM IST",
    imgSrc: "/images/The-Road.webp",
    link: "",
    registered: 600,
  }
];


export
  const webinarEvents = [
    {
      id: 1,
      title: "Unveiling Threat Hunting",
      date: "27 Feb (Tue)",
      time: "8:00 -10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/y-kFlJ9-eaw",
    },
    {
      id: 2,
      title: "How to clear CIPT in the first attempt",
      date: "23 Feb (Fri)",
      time: "8:00 -10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/lsg3DwSAkmY",
    },
    {
      id: 3,
      title: "Introduction to DevSecOps: Integration of Security into DevOps Practices",
      date: "21 Feb (Wed)",
      time: "8:00 -10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/EUQIynVO_fE",
    },
    {
      id: 4,
      title: "How to Prepare for CSSLP?",
      date: "16 Feb (Fri)",
      time: "8:00 -10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/CqwD9DM8Abw",
    },
    {
      id: 5,
      title: "CIPP/E Mock Q&A Session",
      date: "15 Feb (Thu)",
      time: "8:00 – 9:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/k4ESP_ovSIk",
    },
    {
      id: 6,
      title: "CISA Exam Preparation Strategy",
      date: "12 Feb (Mon)",
      time: "9:00 – 10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/HjvIxoK6TiY",
    },
    {
      id: 7,
      title: "Mastering Azure Security Bootcamp: Fortifying Your Cloud Skills in AZ-500",
      date: "25 to 26 Nov (Sat-Sun)",
      time: "8:00-10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/qyATh50nOjU",
    },
    {
      id: 8,
      title: "CCSP Q&A Session",
      date: "23 Nov (Thu)",
      time: "8:00-9:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/7oU7GfoyFBg",
    },
    {
      id: 9,
      title: "New Course Launch : Cloud Security Governance",
      date: "22 Nov (Wed)",
      time: "8:00 -09:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/P62EW82i5iI",
    },
    {
      id: 10,
      title: "Security Operations Center (SOC) Masterclass",
      date: "7th- 9th Nov 2023",
      time: "8-10 PM IST",
      videoSrc: "https://www.youtube.com/embed/VDAHUOY8tdw",
    },
    {
      id: 1,
      title: "Unveiling Threat Hunting",
      date: "27 Feb (Tue)",
      time: "8:00 -10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/y-kFlJ9-eaw",
    },
    {
      id: 2,
      title: "How to clear CIPT in the first attempt",
      date: "23 Feb (Fri)",
      time: "8:00 -10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/lsg3DwSAkmY",
    },
    {
      id: 3,
      title: "Introduction to DevSecOps: Integration of Security into DevOps Practices",
      date: "21 Feb (Wed)",
      time: "8:00 -10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/EUQIynVO_fE",
    },
    {
      id: 4,
      title: "How to Prepare for CSSLP?",
      date: "16 Feb (Fri)",
      time: "8:00 -10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/CqwD9DM8Abw",
    },
    {
      id: 5,
      title: "CIPP/E Mock Q&A Session",
      date: "15 Feb (Thu)",
      time: "8:00 – 9:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/k4ESP_ovSIk",
    },
    {
      id: 6,
      title: "CISA Exam Preparation Strategy",
      date: "12 Feb (Mon)",
      time: "9:00 – 10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/HjvIxoK6TiY",
    },
    {
      id: 7,
      title: "Mastering Azure Security Bootcamp: Fortifying Your Cloud Skills in AZ-500",
      date: "25 to 26 Nov (Sat-Sun)",
      time: "8:00-10:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/qyATh50nOjU",
    },
    {
      id: 8,
      title: "CCSP Q&A Session",
      date: "23 Nov (Thu)",
      time: "8:00-9:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/7oU7GfoyFBg",
    },
    {
      id: 9,
      title: "New Course Launch : Cloud Security Governance",
      date: "22 Nov (Wed)",
      time: "8:00 -09:00 PM (IST)",
      videoSrc: "https://www.youtube.com/embed/P62EW82i5iI",
    },
    {
      id: 10,
      title: "Security Operations Center (SOC) Masterclass",
      date: "7th- 9th Nov 2023",
      time: "8-10 PM IST",
      videoSrc: "https://www.youtube.com/embed/VDAHUOY8tdw",
    }
  ];

export const practiceTests = [
  {
    title: 'Free Penetration Testing Mock Test',
    imageUrl: "/images/box.webp",
    questions: '20 Questions | 30 Min',
    url: ''
  },
  {
    title: 'Free Vulnerability Analyst Mock Test',
    imageUrl: "/images/box.webp",
    questions: '20 Questions | 30 Min',
    url: ''
  },
  {
    title: 'Free Incident Responder Mock Test',
    imageUrl: "/images/box.webp",
    questions: '20 Questions | 30 Min',
    url: ''
  },
  {
    title: 'Free DevOps Mock Test',
    imageUrl: "/images/box.webp",
    questions: '20 Questions | 30 Min',
    url: ''
  },
  {
    title: 'Free Threat Hunting Mock Test',
    imageUrl: "/images/box.webp",
    questions: '20 Questions | 30 Min',
    url: ''
  },
  {
    title: 'Free AWS Mock Test',
    imageUrl: "/images/box.webp",
    questions: '20 Questions | 30 Min',
    url: ''
  },
  {
    title: 'Free AWS Architect Mock Test',
    imageUrl: "/images/box.webp",
    questions: '15 Questions | 18 Min',
    url: ''
  },
  {
    title: 'Free Certified Ethical Hacker (CEH) Practice Tests',
    imageUrl: "/images/box.webp",
    questions: '20 Questions | 30 Min',
    url: ''
  },
  {
    title: 'Free CompTIA Security+ Practice Tests',
    imageUrl: "/images/box.webp",
    questions: '15 Questions | 25 Min',
    url: ''
  },
  {
    title: 'Free SOC Analyst L1 Practice Tests',
    imageUrl: "/images/box.webp",
    questions: '20 Questions | 30 Min',
    url: 's'
  },
  {
    title: 'Free SOC Analyst L2 Practice Tests',
    imageUrl: "/images/box.webp",
    questions: '15 Questions | 20 Min',
    url: ''
  },
  {
    title: 'Free SOC Analyst L3 Practice Tests',
    imageUrl: "/images/box.webp",
    questions: '15 Questions | 25 Min',
    url: ''
  },
  // Add more practice tests as needed
];

export const blogData = [
  {
    title: "Everything You Need To Know About Nodejs!",
    category: "Nodejs",
    date: "Sep 23, 2020",
    content:
      "Node.js is a fast, scalable runtime for server-side JavaScript, ideal for real-time applications, built on Chrome's V8 engine.",
    image: "/images/blog-dg-1.60f5b04791b56d59fe5c.webp",
    bgColor: "dg-bg2",
  },
  {
    title: "Exploring the Key Features of Laravel 7 Framework",
    category: "Laravel",
    date: "Sep 24, 2020",
    content:
      "Node.js is a fast, scalable runtime for server-side JavaScript, ideal for real-time applications, built on Chrome's V8 engine.",
    image: "/images/Key-Components-of-Microsoft-Sentinel-300x159.webp",
    bgColor: "bg-gradient12",
  },
  {
    title: "Best Technology for Mobile Application Development",
    category: "Mobile Application",
    date: "Sep 25, 2020",
    content:
      "Node.js is a fast, scalable runtime for server-side JavaScript, ideal for real-time applications, built on Chrome's V8 engine.",
    image: "/images/blog2.webp",
    bgColor: "dg-bg2",
  },
  {
    title: "Everything You Need To Know About Nodejs!",
    category: "Nodejs",
    date: "Sep 23, 2020",
    content:
      "Node.js is a fast, scalable runtime for server-side JavaScript, ideal for real-time applications, built on Chrome's V8 engine.",
    image: "/images/blog-dg-1.60f5b04791b56d59fe5c.webp",
    bgColor: "dg-bg2",
  },
  {
    title: "Exploring the Key Features of Laravel 7 Framework",
    category: "Laravel",
    date: "Sep 24, 2020",
    content:
      "Node.js is a fast, scalable runtime for server-side JavaScript, ideal for real-time applications, built on Chrome's V8 engine.",
    image: "/images/Key-Components-of-Microsoft-Sentinel-300x159.webp",
    bgColor: "bg-gradient12",
  },
  {
    title: "Best Technology for Mobile Application Development",
    category: "Mobile Application",
    date: "Sep 25, 2020",
    content:
      "Node.js is a fast, scalable runtime for server-side JavaScript, ideal for real-time applications, built on Chrome's V8 engine.",
    image: "/images/blog2.webp",
    bgColor: "dg-bg2",
  },
];
export const categories = [
  { id: 8412, name: 'Auditing', link: '' },
  { id: 159, name: 'AWS', link: '' },
  { id: 509, name: 'Career Oriented Courses', link: '' },
  { id: 66, name: 'CCSP', link: '' },
  { id: 70, name: 'Checkpoint', link: '' },
  { id: 1560, name: 'CheckPoint', link: '' },
  { id: 24, name: 'CISA', link: '' },
  { id: 559, name: 'CISCO', link: '' },


];


export const awsData = [
  {
    icon: faUser,
    title: '32 Hours',
    description: 'Instructor-Led Training by Dustin Brimberry',
  },
  {
    icon: faBookOpen,
    title: '24 Hours',
    description: 'Self-Paced Course by Tom Carpenter and Mike Meyers',
  },
  {
    icon: faUserCheck,
    title: '3 Simulation Exams and 9 Mock Exams with 65 Questions',
  },
  {
    icon: faHeart,
    title: 'Extensive Question Bank with 300+ Practice Questions',
  },
  {
    icon: faCode,
    title: '69 Real-World Simulations on Browser-Based Cloud Labs',
  },
  {
    icon: faAward,
    title: 'Build 4 Real-World Capstone Projects',
  },
  {
    icon: faFile,
    title: 'First-Attempt AWS SAA-CO3 Success Strategy Guide',
  },
  {
    icon: faHeadphones,
    title: 'AWS Exam Guide and Annotated Lecture Slides',
  },
  {
    icon: faDatabase,
    title: '28 Activity Guides for Easy Learning',
  },
];
export const knowledgeHut = [
  {
    icon: faCompass,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faBook,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faUserCheck,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faBriefcase,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faTicket,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faZap,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faHeadphones,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faStamp,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faCodeCompare,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
  {
    icon: faLuggageCart,
    title: 'Learn from the Best',
    description: 'Undergo instructor-led training from top trainers to prepare for the exam and real-world challenges.',
  },
];


export const projectCards = [
  {
    id: 1,
    imgAlt: "Project card image",
    imgSrc: "/images/knowledge.webp",
    category: "E-Commerce",
    title: "Build High-Availability Architecture",
    description: "Design architecture using AWS services as a Solutions Architect in an e-commerce company.",
    logoAlt: "logo image",
    logoSrc: "/images/logokn.webp"
  },
  {
    id: 2,
    imgAlt: "Project card image",
    imgSrc: "/images/knowledge2.webp",
    category: "Cloud",
    title: "Optimize Cost & Resource Management",
    description: "Analyze infrastructures and suggest cost-saving strategies as a Cloud Cost Analyst.",
    logoAlt: "logo image",
    logoSrc: "/images/logokn2.webp"
  },
  {
    id: 3,
    imgAlt: "Project card image",
    imgSrc: "/images/knowledge.webp",
    category: "Healthcare",
    title: "Design Disaster Recovery and Business ",
    description: "Design a robust backup strategy as a Disaster Recovery Specialist in a healthcare company.",
    logoAlt: "logo image",
    logoSrc: "/images/logokn3.webp"
  },

  {
    id: 5,
    imgAlt: "Project card image",
    imgSrc: "/images/knowledge.webp",
    category: "Education",
    title: "Enhance Learning Management System",
    description: "Develop and integrate features for an LMS as a Full-Stack Developer in an education company.",
    logoAlt: "logo image",
    logoSrc: "/images/logo4.webp"
  },

];
