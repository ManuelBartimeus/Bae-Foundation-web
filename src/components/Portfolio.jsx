import React, { useState, useRef, useEffect } from 'react';
import { useCountUp, useCountUpFromString } from '../hooks/useCountUp';
import './AboutScreen.css';
import './Portfolio.css';
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight, FiExternalLink, FiCalendar, FiMapPin, FiUsers, FiAward } from 'react-icons/fi';
import { FaImages, FaVideo, FaNewspaper, FaGraduationCap, FaHeart, FaHandsHelping, FaLeaf } from 'react-icons/fa';

// Import images from portfolio folders
// Spark It Up - 2016
import sparkCover from '../assets/portfolio/Spark it Up - 2016/f33287936.jpg';
import sparkImg1 from '../assets/portfolio/Spark it Up - 2016/f33293568.jpg';
import sparkImg2 from '../assets/portfolio/Spark it Up - 2016/f33295360.jpg';
import sparkImg3 from '../assets/portfolio/Spark it Up - 2016/f33297408.jpg';
import sparkImg4 from '../assets/portfolio/Spark it Up - 2016/f33302016.jpg';
import sparkImg5 from '../assets/portfolio/Spark it Up - 2016/f33302784.jpg';

// Gospel Merges with Science - Ada 2019
import gmsCover from '../assets/portfolio/Gospel Merges with Science Ada - 2019/IMG_5212.JPG';
import gmsAdaImg1 from '../assets/portfolio/Gospel Merges with Science Ada - 2019/IMG_5213.JPG';
import gmsAdaImg2 from '../assets/portfolio/Gospel Merges with Science Ada - 2019/IMG_5214.JPG';
import gmsAdaImg3 from '../assets/portfolio/Gospel Merges with Science Ada - 2019/IMG_5215.JPG';
import gmsAdaImg4 from '../assets/portfolio/Gospel Merges with Science Ada - 2019/IMG_5216.JPG';

// Gospel Merges with Science - Upper East 2021
import gmsUECover from '../assets/portfolio/Gospel Merges with Science Upper East - 2021/day2.25.jpg';
import gmsUEImg1 from '../assets/portfolio/Gospel Merges with Science Upper East - 2021/day2.26.jpg';
import gmsUEImg2 from '../assets/portfolio/Gospel Merges with Science Upper East - 2021/day2.27.jpg';
import gmsUEImg3 from '../assets/portfolio/Gospel Merges with Science Upper East - 2021/day2.28.jpg';
import gmsUEImg4 from '../assets/portfolio/Gospel Merges with Science Upper East - 2021/day2.29.jpg';

// Salt and Light - KNUST 2022
import saltLightKNUSTCover from '../assets/portfolio/Salt and Light KNUST - 2022/273379491_470417901473252_3224974489427031315_n.jpg';
import saltLightKNUSTImg1 from '../assets/portfolio/Salt and Light KNUST - 2022/273444364_405908048002008_7449093780124342334_n.jpg';

// BaeLentine Project - Lake Bosomtwe 2022
import baeLentineLakeCover from '../assets/portfolio/BaeLentine Project Lake Bosomtwe - 2022/274941862_356388026325472_5042934996861471274_n.jpg';
import baeLentineLakeImg1 from '../assets/portfolio/BaeLentine Project Lake Bosomtwe - 2022/275151446_444071277463068_3854400468390722305_n.jpg';
import baeLentineLakeImg2 from '../assets/portfolio/BaeLentine Project Lake Bosomtwe - 2022/277402272_375535237796248_850569691250874766_n.jpg';
import baeLentineLakeImg3 from '../assets/portfolio/BaeLentine Project Lake Bosomtwe - 2022/277493490_661087015227097_7356619086613534071_n.jpg';
import baeLentineLakeImg4 from '../assets/portfolio/BaeLentine Project Lake Bosomtwe - 2022/277572820_365855968772097_6528147868934305903_n.jpg';

// Time with Series - Verda Annan 2022
import timeWithSeriesCover from '../assets/portfolio/Time with Series - Verda Annan - 2022/verdaannan1.jpg';

// Salt and Light - Accra 2020
import saltLightAccraCover from '../assets/portfolio/Salt and Light Project  Accra- 2020/143233764_2471235606519573_2692205312451538686_n.jpg';
import saltLightAccraImg1 from '../assets/portfolio/Salt and Light Project  Accra- 2020/143598733_837194323529922_7138761947317853754_n.jpg';
import saltLightAccraImg2 from '../assets/portfolio/Salt and Light Project  Accra- 2020/143754675_240391271097897_2951016959396486469_n.jpg';

// BAE Valentine Project - REMA Orphanage 2020
import baeValentineCover from '../assets/portfolio/BAE Valentine Project REMA Orphanage - 2020/rema1.jpg';
import baeValentineImg1 from '../assets/portfolio/BAE Valentine Project REMA Orphanage - 2020/rema2.jpg';
import baeValentineImg2 from '../assets/portfolio/BAE Valentine Project REMA Orphanage - 2020/rema3.jpg';

// GOSCCI Virtual Conference 2020
import goscci2020Cover from '../assets/portfolio/GOSCCI Virtual Conference - 2020/gosscivirtualconf.jpg';

// FEM Menstrual Hygiene 2024
import femHygieneCover from '../assets/portfolio/FEM Menstrual Hygience Outreach - 2024/Fem Day2.jpg';
import femHygieneImg1 from '../assets/portfolio/FEM Menstrual Hygience Outreach - 2024/Fem Day2-19.jpg';
import femHygieneImg2 from '../assets/portfolio/FEM Menstrual Hygience Outreach - 2024/Fem Day2-20.jpg';
import femHygieneImg3 from '../assets/portfolio/FEM Menstrual Hygience Outreach - 2024/Fem Day2-21.jpg';
import femHygieneImg4 from '../assets/portfolio/FEM Menstrual Hygience Outreach - 2024/Fem Day2-22.jpg';

// Minds Alive Conference - Ghana 2024
import mindsAliveGhanaCover from '../assets/portfolio/Minds Alive Conference Ghana - 2024/MA.jpg';
import mindsAliveGhanaImg1 from '../assets/portfolio/Minds Alive Conference Ghana - 2024/MA-38.jpg';
import mindsAliveGhanaImg2 from '../assets/portfolio/Minds Alive Conference Ghana - 2024/MA-39.jpg';
import mindsAliveGhanaImg3 from '../assets/portfolio/Minds Alive Conference Ghana - 2024/MA-40.jpg';
import mindsAliveGhanaImg4 from '../assets/portfolio/Minds Alive Conference Ghana - 2024/MA-41.jpg';

// Minds Alive Conference - The Gambia 2024
import mindsAliveGambiaCover from '../assets/portfolio/Minds Alive Conference The Gambia - 2024/IMG_8985.jpg';
import mindsAliveGambiaImg1 from '../assets/portfolio/Minds Alive Conference The Gambia - 2024/IMG_8986.jpg';
import mindsAliveGambiaImg2 from '../assets/portfolio/Minds Alive Conference The Gambia - 2024/IMG_8987.jpg';
import mindsAliveGambiaImg3 from '../assets/portfolio/Minds Alive Conference The Gambia - 2024/IMG_8988.jpg';
import mindsAliveGambiaImg4 from '../assets/portfolio/Minds Alive Conference The Gambia - 2024/IMG_8991.jpg';

// BAE Scholar Program 2024-2025
import baeScholarCover from '../assets/portfolio/BAE Scholar Program - 2024-2025/bae scholar.jpg';
import baeScholarImg1 from '../assets/portfolio/BAE Scholar Program - 2024-2025/bae scholar-26.jpg';
import baeScholarImg2 from '../assets/portfolio/BAE Scholar Program - 2024-2025/bae scholar-27.jpg';
import baeScholarImg3 from '../assets/portfolio/BAE Scholar Program - 2024-2025/bae scholar-28.jpg';
import baeScholarImg4 from '../assets/portfolio/BAE Scholar Program - 2024-2025/bae scholar-29.jpg';

// Minds Alive Conference - KNUST 2025
import mindsAliveKNUSTCover from '../assets/portfolio/Minds Alive Conference KNUST - 2025/MAH-KNUST-125.jpg';
import mindsAliveKNUSTImg1 from '../assets/portfolio/Minds Alive Conference KNUST - 2025/MAH-KNUST-132.jpg';
import mindsAliveKNUSTImg2 from '../assets/portfolio/Minds Alive Conference KNUST - 2025/MAH-KNUST-95.jpg';
import mindsAliveKNUSTImg3 from '../assets/portfolio/Minds Alive Conference KNUST - 2025/MAH-KNUST-96.jpg';
import mindsAliveKNUSTImg4 from '../assets/portfolio/Minds Alive Conference KNUST - 2025/SnP-10.jpg';
import mindsAliveKNUSTImg5 from '../assets/portfolio/Minds Alive Conference KNUST - 2025/SnP-21.jpg';

// Female Power Conference 2025
import femalePowerCover from '../assets/portfolio/Female Power Conference - 2025/FP-83.jpg';
import femalePowerImg1 from '../assets/portfolio/Female Power Conference - 2025/FP-84.jpg';
import femalePowerImg2 from '../assets/portfolio/Female Power Conference - 2025/FP-89.jpg';
import femalePowerImg3 from '../assets/portfolio/Female Power Conference - 2025/FP-91.jpg';
import femalePowerImg4 from '../assets/portfolio/Female Power Conference - 2025/FP-93.jpg';

// She Leads Webinar 2025
import sheLeadsCover from '../assets/portfolio/She Leads Webinar - 2025/sheleadswebinar 1.jpg';

// BaeLentine Love by the Lake 2025
import baeLentineLoveCover from '../assets/portfolio/BaeLentine Love by the Lake - 2025/LBL.jpg';
import baeLentineLoveImg1 from '../assets/portfolio/BaeLentine Love by the Lake - 2025/LBL-129.jpg';
import baeLentineLoveImg2 from '../assets/portfolio/BaeLentine Love by the Lake - 2025/LBL-130.jpg';
import baeLentineLoveImg3 from '../assets/portfolio/BaeLentine Love by the Lake - 2025/LBL-170.jpg';
import baeLentineLoveImg4 from '../assets/portfolio/BaeLentine Love by the Lake - 2025/LBL-171.jpg';

// Hand Hygiene Outreach - Ho 2025
import handHygieneCover from '../assets/portfolio/Hand Hygiene Outreach Ho - 2025/HHo-110.jpg';
import handHygieneImg1 from '../assets/portfolio/Hand Hygiene Outreach Ho - 2025/HHo-111.jpg';
import handHygieneImg2 from '../assets/portfolio/Hand Hygiene Outreach Ho - 2025/HHo-112.jpg';
import handHygieneImg3 from '../assets/portfolio/Hand Hygiene Outreach Ho - 2025/HHo-115.jpg';
import handHygieneImg4 from '../assets/portfolio/Hand Hygiene Outreach Ho - 2025/HHo-116.jpg';

// World Children's Day 360 Event 2025
import worldChildrenDayCover from '../assets/portfolio/World Children\'s Day 360 Event - 2025/WCDC-157.jpg';
import worldChildrenDayImg1 from '../assets/portfolio/World Children\'s Day 360 Event - 2025/WCDC-158.jpg';
import worldChildrenDayImg2 from '../assets/portfolio/World Children\'s Day 360 Event - 2025/WCDC-173.jpg';
import worldChildrenDayImg3 from '../assets/portfolio/World Children\'s Day 360 Event - 2025/WCDC-174.jpg';
import worldChildrenDayImg4 from '../assets/portfolio/World Children\'s Day 360 Event - 2025/WCDC-216.jpg';

// Green Steps Outreach 2025
import greenStepsCover from '../assets/portfolio/Green Steps Outreach - 2025/E Policy Day5.jpg';
import greenStepsImg1 from '../assets/portfolio/Green Steps Outreach - 2025/E Policy Day5-11.jpg';
import greenStepsImg2 from '../assets/portfolio/Green Steps Outreach - 2025/E Policy Day5-12.jpg';
import greenStepsImg3 from '../assets/portfolio/Green Steps Outreach - 2025/E Policy Day5-18.jpg';
import greenStepsImg4 from '../assets/portfolio/Green Steps Outreach - 2025/E Policy Day5-19.jpg';

// Nakaaba Initiative 2025
import nakaabaCover from '../assets/portfolio/Nakaaba Initiative - 2025/nakaaba init.jpg';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeGallery, setActiveGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef(null);

  // Count-up animations for portfolio stats
  const majorProjects = useCountUp(22, 2000);
  const livesTransformed = useCountUpFromString('12K+', 2000);
  const communitiesServed = useCountUpFromString('2', 2000);
  const focusAreas = useCountUp(6, 2000);

  const portfolioCategories = [
    { id: 'all', name: 'All Work', icon: <FaImages /> },
    { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
    { id: 'community', name: 'Community', icon: <FaHandsHelping /> },
    { id: 'events', name: 'Events', icon: <FaNewspaper /> },
    { id: 'programs', name: 'Programs', icon: <FaHeart /> }
  ];

  const portfolioItems = [
    // GHANA - Education Projects
    {
      id: 1,
      title: "Spark It Up – School Empowerment Program",
      category: "education",
      type: "photo",
      description: "A foundational school empowerment initiative equipping young learners with purpose-driven education, leadership values, and inspiration for academic excellence.",
      mainImage: sparkCover,
      gallery: [sparkCover, sparkImg1, sparkImg2, sparkImg3, sparkImg4, sparkImg5],
      stats: {
        beneficiaries: "600+",
        locations: "Multiple Schools, Ghana"
      },
      achievements: ["Delivered motivational sessions", "Early purpose discovery framework", "First structured school outreach model"],
      date: "2016"
    },
    {
      id: 2,
      title: "Gospel Merges with Science – Ada",
      category: "education",
      type: "photo",
      description: "An interdisciplinary outreach integrating faith, science, and critical thinking to inspire holistic student development.",
      mainImage: gmsCover,
      gallery: [gmsCover, gmsAdaImg1, gmsAdaImg2, gmsAdaImg3, gmsAdaImg4],
      stats: {
        beneficiaries: "1,000+",
        locations: "Ada, Ghana"
      },
      achievements: ["Bridged faith-based values with scientific inquiry", "Donated full Science Apparatus set", "Distributed 1,000 Bibles and stationery"],
      date: "2019"
    },
    {
      id: 3,
      title: "Gospel Merges with Science – Upper East Region",
      category: "education",
      type: "photo",
      description: "A regional expansion of the Gospel–Science integration model targeting underserved communities in Northern Ghana.",
      mainImage: gmsUECover,
      gallery: [gmsUECover, gmsUEImg1, gmsUEImg2, gmsUEImg3, gmsUEImg4],
      stats: {
        beneficiaries: "1,600+",
        locations: "Upper East Region, Ghana"
      },
      achievements: ["Extended STEM-faith engagement to rural schools", "Full Science Apparatus donation", "Increased access in marginalized areas"],
      date: "2021"
    },
    {
      id: 4,
      title: "Salt and Light – KNUST",
      category: "education",
      type: "photo",
      description: "A campus-based values and leadership activation empowering students to become change agents.",
      mainImage: saltLightKNUSTCover,
      gallery: [saltLightKNUSTCover, saltLightKNUSTImg1],
      stats: {
        beneficiaries: "250+",
        locations: "KNUST, Kumasi, Ghana"
      },
      achievements: ["Engaged tertiary students in ethical leadership", "Encouraged service-oriented initiatives", "Strengthened campus-community linkages"],
      date: "2022"
    },
    {
      id: 5,
      title: "Minds Alive Conference – KNUST",
      category: "education",
      type: "photo",
      description: "A student-focused innovation conference equipping young people to transform ideas into sustainable ventures.",
      mainImage: mindsAliveKNUSTCover,
      gallery: [mindsAliveKNUSTCover, mindsAliveKNUSTImg1, mindsAliveKNUSTImg2, mindsAliveKNUSTImg3, mindsAliveKNUSTImg4, mindsAliveKNUSTImg5],
      stats: {
        beneficiaries: "40+",
        locations: "KNUST, Ghana"
      },
      achievements: ["Delivered hands-on ideation training", "Connected students to mentors", "Strengthened entrepreneurial mindset"],
      date: "2025"
    },
    {
      id: 6,
      title: "BAE Scholar Program",
      category: "education",
      type: "photo",
      description: "A structured leadership, research, and ethics development program for selected senior high school students.",
      mainImage: baeScholarCover,
      gallery: [baeScholarCover, baeScholarImg1, baeScholarImg2, baeScholarImg3, baeScholarImg4],
      stats: {
        beneficiaries: "50+",
        locations: "Ghana"
      },
      achievements: ["Trained in leadership and ethics", "Mentored future ethical leaders", "Built pipeline for academic excellence"],
      date: "2024 - 2025"
    },
    {
      id: 7,
      title: "Female Power Conference",
      category: "education",
      type: "photo",
      description: "A transformational conference empowering young women with leadership, confidence, and purpose.",
      mainImage: femalePowerCover,
      gallery: [femalePowerCover, femalePowerImg1, femalePowerImg2, femalePowerImg3, femalePowerImg4],
      stats: {
        beneficiaries: "30+",
        locations: "The Gambia"
      },
      achievements: ["Inspired female leadership", "Addressed gender equity", "Built networks of empowered women"],
      date: "2025"
    },
    {
      id: 8,
      title: "TIME WITH SERIES – Verda Annan",
      category: "education",
      type: "photo",
      description: "A leadership and empowerment webinar supporting women in leadership and personal growth.",
      mainImage: timeWithSeriesCover,
      gallery: [timeWithSeriesCover],
      stats: {
        beneficiaries: "1,300+",
        locations: "Online (Global)"
      },
      achievements: ["Delivered leadership sessions", "Built confidence and capacity", "Supported women leaders globally"],
      date: "2022",
      externalLink: "https://www.instagram.com/p/CjDEHAADtN4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      id: 9,
      title: "She Leads Webinar",
      category: "education",
      type: "photo",
      description: "A leadership and empowerment webinar supporting women in leadership and personal growth.",
      mainImage: sheLeadsCover,
      gallery: [sheLeadsCover],
      stats: {
        beneficiaries: "1,300+",
        locations: "Online (Global)"
      },
      achievements: ["Delivered leadership development sessions", "Built confidence and capacity", "Expanded digital gender programming"],
      date: "2025",
      externalLink: "https://www.instagram.com/p/DNEDapIqUp7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    // GHANA - Community Projects
    {
      id: 10,
      title: "BAE Valentine Project – REMA Orphanage",
      category: "community",
      type: "photo",
      description: "A compassion-driven outreach delivering love, care, and essential support to orphaned children.",
      mainImage: baeValentineCover,
      gallery: [baeValentineCover, baeValentineImg1, baeValentineImg2],
      stats: {
        beneficiaries: "300+",
        locations: "Kumasi, Ghana"
      },
      achievements: ["Provided food and care items", "Fostered dignity and belonging", "Strengthened partnerships with institutions"],
      date: "2020"
    },
    {
      id: 11,
      title: "Salt and Light Project – Accra",
      category: "community",
      type: "photo",
      description: "A community impact initiative promoting ethical leadership, service, and positive social influence.",
      mainImage: saltLightAccraCover,
      gallery: [saltLightAccraCover, saltLightAccraImg1, saltLightAccraImg2],
      stats: {
        beneficiaries: "100+",
        locations: "Accra, Ghana"
      },
      achievements: ["Mobilized youth for community service", "Reinforced values of integrity", "Expanded urban engagement footprint"],
      date: "2020"
    },
    {
      id: 12,
      title: "BaeLentine Project – Lake Bosomtwe",
      category: "community",
      type: "photo",
      description: "A community-centered outreach blending compassion, giving, and relationship-building in lakeside communities.",
      mainImage: baeLentineLakeCover,
      gallery: [baeLentineLakeCover, baeLentineLakeImg1, baeLentineLakeImg2, baeLentineLakeImg3, baeLentineLakeImg4],
      stats: {
        beneficiaries: "500+",
        locations: "Lake Bosomtwe, Ghana"
      },
      achievements: ["Delivered relief and support activities", "Fostered social inclusion", "Strengthened rural outreach presence"],
      date: "2022"
    },
    {
      id: 13,
      title: "BaeLentine Love by the Lake",
      category: "community",
      type: "photo",
      description: "A relationship and community engagement experience promoting love, values, and social connection.",
      mainImage: baeLentineLoveCover,
      gallery: [baeLentineLoveCover, baeLentineLoveImg1, baeLentineLoveImg2, baeLentineLoveImg3, baeLentineLoveImg4],
      stats: {
        beneficiaries: "600+",
        locations: "Lake Bosomtwe, Ghana"
      },
      achievements: ["Reinforced community bonding", "Delivered relief items", "Supported water polo club"],
      date: "2025"
    },
    {
      id: 14,
      title: "Hand Hygiene Outreach – Ho",
      category: "community",
      type: "photo",
      description: "A public health outreach improving hygiene awareness and preventive health practices.",
      mainImage: handHygieneCover,
      gallery: [handHygieneCover, handHygieneImg1, handHygieneImg2, handHygieneImg3, handHygieneImg4],
      stats: {
        beneficiaries: "1,000+",
        locations: "Ho, Volta Region, Ghana"
      },
      achievements: ["Educated on hygiene and disease prevention", "Distributed hygiene materials", "Supported local health efforts"],
      date: "2025"
    },
    {
      id: 15,
      title: "World Children's Day 360° Event",
      category: "community",
      type: "photo",
      description: "A holistic children-centered celebration amplifying child rights, well-being, and empowerment through immersive engagement.",
      mainImage: worldChildrenDayCover,
      gallery: [worldChildrenDayCover, worldChildrenDayImg1, worldChildrenDayImg2, worldChildrenDayImg3, worldChildrenDayImg4],
      stats: {
        beneficiaries: "700+",
        locations: "Ghana"
      },
      achievements: ["Reached children through education and fun", "Promoted child protection awareness", "Delivered multi-dimensional celebration"],
      date: "2025"
    },
    {
      id: 16,
      title: "FEM Menstrual Hygiene Outreach",
      category: "community",
      type: "photo",
      description: "A dignity-focused outreach improving menstrual health awareness and access for secondary school girls.",
      mainImage: femHygieneCover,
      gallery: [femHygieneCover, femHygieneImg1, femHygieneImg2, femHygieneImg3, femHygieneImg4],
      stats: {
        beneficiaries: "300+",
        locations: "The Gambia"
      },
      achievements: ["Educated on menstrual hygiene management", "Distributed sanitary materials", "Promoted school attendance"],
      date: "2024"
    },
    {
      id: 17,
      title: "Green Steps Outreach – Environmental Awareness",
      category: "community",
      type: "photo",
      description: "An environmental education outreach promoting climate responsibility and sustainable practices in schools.",
      mainImage: greenStepsCover,
      gallery: [greenStepsCover, greenStepsImg1, greenStepsImg2, greenStepsImg3, greenStepsImg4],
      stats: {
        beneficiaries: "700+",
        locations: "The Gambia"
      },
      achievements: ["Raised environmental awareness", "Engaged in climate action conversations", "Supported sustainability advocacy"],
      date: "2025"
    },
    // GHANA/GAMBIA - Events & Conferences
    {
      id: 18,
      title: "Minds Alive Conference – Ghana",
      category: "events",
      type: "photo",
      description: "An entrepreneurship, innovation, and leadership conference igniting youth creativity, purpose, and sustainable thinking.",
      mainImage: mindsAliveGhanaCover,
      gallery: [mindsAliveGhanaCover, mindsAliveGhanaImg1, mindsAliveGhanaImg2, mindsAliveGhanaImg3, mindsAliveGhanaImg4],
      stats: {
        beneficiaries: "30+",
        locations: "Ghana"
      },
      achievements: ["Convened youth leaders across countries", "Promoted innovation and sustainability", "Sparked entrepreneurial mindset"],
      date: "2024"
    },
    {
      id: 19,
      title: "Minds Alive Conference – The Gambia",
      category: "events",
      type: "photo",
      description: "An entrepreneurship, innovation, and leadership conference igniting youth creativity, purpose, and sustainable thinking.",
      mainImage: mindsAliveGambiaCover,
      gallery: [mindsAliveGambiaCover, mindsAliveGambiaImg1, mindsAliveGambiaImg2, mindsAliveGambiaImg3, mindsAliveGambiaImg4],
      stats: {
        beneficiaries: "30+",
        locations: "The Gambia"
      },
      achievements: ["Convened youth leaders across countries", "Promoted innovation and sustainability", "Expanded regional impact"],
      date: "2024"
    },
    {
      id: 20,
      title: "GOSCCI Virtual Conference",
      category: "events",
      type: "photo",
      description: "A global virtual conference delivering faith, innovation, leadership, and purpose-driven conversations online.",
      mainImage: goscci2020Cover,
      gallery: [goscci2020Cover],
      stats: {
        beneficiaries: "1,200+",
        locations: "Online (Global)"
      },
      achievements: ["Reached international audiences", "Facilitated virtual learning", "Expanded digital outreach capacity"],
      date: "2020",
      externalLink: "https://www.instagram.com/p/CDjMXgHh-Ly/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      id: 21,
      title: "Nakaaba Initiative – Youth-Led Climate Roundtable",
      category: "events",
      type: "photo",
      description: "A policy-oriented climate dialogue platform amplifying youth voices in environmental decision-making.",
      mainImage: nakaabaCover,
      gallery: [nakaabaCover],
      stats: {
        beneficiaries: "2,000+",
        locations: "Online (Africa-focused)"
      },
      achievements: ["Convened youth climate policy discussions", "Generated actionable insights", "Strengthened youth participation"],
      date: "2025",
      externalLink: "https://www.instagram.com/p/DIYqrRytD7l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openGallery = (item, imageIndex = 0) => {
    setActiveGallery(item);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) => 
        prev === activeGallery.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? activeGallery.gallery.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (activeGallery) {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [activeGallery]);

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>
          Explore our impactful work across Africa and beyond. From educational initiatives 
          to community development projects, witness the transformation we've created together 
          with our partners and beneficiaries.
        </p>
      </section>

      {/* Filter Categories */}
      <section className="portfolio-filter">
        <div className="filter-tabs">
          {portfolioCategories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        <div className="portfolio-container">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image" onClick={() => !item.externalLink && openGallery(item)}>
                <img src={item.mainImage} alt={item.title} />
                {item.externalLink ? (
                  <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="view-gallery follow-link">
                    <FiExternalLink /> Follow Link
                  </a>
                ) : (
                  <button className="view-gallery">
                    <FaImages /> View Gallery
                  </button>
                )}
              </div>
              
              <div className="portfolio-details">
                <div className="portfolio-meta">
                  <span className="portfolio-date">
                    <FiCalendar /> {item.date}
                  </span>
                  <span className="portfolio-category">
                    {portfolioCategories.find(cat => cat.id === item.category)?.icon}
                    {portfolioCategories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
                
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                
                <div className="portfolio-stats">
                  <div className="stat">
                    <FiUsers className="stat-icon" />
                    <span>{item.stats.beneficiaries}</span>
                    <small>Beneficiaries</small>
                  </div>
                  <div className="stat">
                    <FiMapPin className="stat-icon" />
                    <span>{item.stats.locations}</span>
                    <small>Locations</small>
                  </div>
                </div>
                
                <div className="portfolio-achievements">
                  <h4><FiAward /> Key Achievements</h4>
                  <ul>
                    {item.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Modal */}
      {activeGallery && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close" onClick={closeGallery}>×</button>
            
            <div className="gallery-header">
              <h3>{activeGallery.title}</h3>
              <span>{currentImageIndex + 1} / {activeGallery.gallery.length}</span>
            </div>
            
            <div className="gallery-main">
              <button className="gallery-nav prev" onClick={prevImage}>
                <FiChevronLeft />
              </button>
              
              <div className="gallery-image">
                <img src={activeGallery.gallery[currentImageIndex]} alt={activeGallery.title} />
              </div>
              
              <button className="gallery-nav next" onClick={nextImage}>
                <FiChevronRight />
              </button>
            </div>
            
            <div className="gallery-thumbnails">
              {activeGallery.gallery.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`${activeGallery.title} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Impact Summary */}
      <section className="portfolio-impact">
        <h2>Portfolio Impact Summary</h2>
        <div className="impact-overview">
          <div className="impact-item">
            <span className="impact-number" ref={majorProjects.ref}>{majorProjects.count}</span>
            <span className="impact-label">Major Projects</span>
          </div>
          <div className="impact-item">
            <span className="impact-number" ref={livesTransformed.ref}>{livesTransformed.count}</span>
            <span className="impact-label">Lives Transformed</span>
          </div>
          <div className="impact-item">
            <span className="impact-number" ref={communitiesServed.ref}>{communitiesServed.count}</span>
            <span className="impact-label">Countries Reached</span>
          </div>
          <div className="impact-item">
            <span className="impact-number" ref={focusAreas.ref}>{focusAreas.count}</span>
            <span className="impact-label">Thematic Focus Areas</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta">
        <div className="cta-content">
          <h2>Want to Be Part of Our Next Project?</h2>
          <p>
            Join us in creating more inspiring stories and transforming lives 
            across Africa. Your support makes these achievements possible.
          </p>
          <div className="cta-buttons">
            <button className="donate">Fund a Project</button>
            <button className="volunteer">Volunteer</button>
            <button className="contact">Get in Touch</button>
          </div>
        </div>
      </section>
    </main>
  );
}