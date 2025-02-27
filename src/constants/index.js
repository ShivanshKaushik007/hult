import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  hult,
  vineet,
  affan,
  seeta,
  whatsapp,
  linkedin
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Events",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "FAQ",
    url: "#features",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  {
    id: "5",
    title: "Register",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdGaMXXBeNfSAw93LLgw-cDJAfPb1xnVMFgWKsNx6gOx1N_dA/viewform",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];


export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Orientation",
    text: "Orientation is an introductory event designed to give participants an overview of the Hult Prize journey, including its mission, goals, and the impact they can create. Attendees will learn about the competition's structure, gain insights into each event, and receive guidance on developing innovative solutions. It's the perfect start for teams to connect, explore ideas, and prepare for the challenges ahead.",
    date: "16/11/2024",
    venue: "Venue : Kalam Hall",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Auctum",
    text: "Auctum is an event where participants act as social entrepreneurs, using strategic thinking and negotiation to bid on impactful project ideas. Teams must create compelling investment cases that balance profitability with social impact, showcasing their ability to pitch sustainable solutions in a competitive environment.",
    date: "27/11/2024",
    venue: "Venue : Kalam Hall",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "AdMad",
    text: "AdMad is a dynamic event where creativity meets purpose. Participants are tasked with designing innovative marketing campaigns for fictional social enterprises, showcasing their advertising skills and strategic thinking. This fast-paced challenge pushes teams to create compelling ads that convey strong social messages, blending creativity with impact in a competitive setting.",
    date: "07/02/2025",
    venue: "Venue : Kalam Hall",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "SharkTank",
    text: "SharkTank is an exciting event where participants pitch their innovative business ideas to a panel of expert judges, known as sharks. The goal is to present sustainable, impactful solutions to real-world problems, demonstrating feasibility and potential for success. This event tests participants creativity, business acumen, and persuasive communication skills in a high-stakes, competitive setting.",
    date: "27/02/2025",
    venue: "Venue: Kalam Hall",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "IIC Chairman",
    nam:"Dr. Seethalekshmi K",
    picture: seeta,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Director",
    nam:"Prof. Vineet Kansal",
    picture: vineet,
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Campus Director",
    nam:"Affan Ali",
    picture: affan,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Auctum",
    text: "Auctum challenges participants to act as social entrepreneurs, strategically bidding and pitching sustainable solutions that balance profitability with social impact.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    rulebook:"https://drive.google.com/file/d/1hwFuviu8KBGu3wA9s75LF8hQCylNIlmr/view?usp=sharing",
    
  },
  {
    id: "1",
    title: "Admad",
    text: "AdMad is a creative challenge where participants design innovative marketing campaigns for fictional social enterprises, blending advertising skills with impactful social messaging.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    rulebook:"https://drive.google.com/file/d/1YahWdexqXZ1Wu6n-RY_uM_qPRIalLNLC/view?usp=drive_link",
  },
  {
    id: "2",
    title: "SharkTank",
    text: "SharkTank challenges participants to pitch innovative, sustainable business ideas to expert judges, showcasing creativity, business acumen, and persuasive communication.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    rulebook:"https://www.linkedin.com/company/hult-prize-iet-lucknow/posts/?feedView=all",
  },
  {
    id: "3",
    title: "Idea Generation Workshop",
    text: "The Idea Generation Workshop in the Hult Prize fosters creative brainstorming, mentorship, and collaboration to develop and refine impactful startup ideas.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    rulebook:"https://www.instagram.com/hultprize_ietlko?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "Whatsapp",
    iconUrl: whatsapp,
    url: "https://chat.whatsapp.com/IdcBxchDQeN2HzamTXLL9r",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/hult-prize-iet-lucknow/posts/?feedView=all",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/hultprize_ietlko?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  // {
  //   id: "3",
  //   title: "Twitter",
  //   iconUrl: twitter,
  //   url: "https://www.facebook.com/HultPrizeIETLKO/",
  // },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/HultPrizeIETLKO/",
  },
];
