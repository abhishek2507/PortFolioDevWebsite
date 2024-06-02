import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { MdTimeline } from "react-icons/md";
import { RiMapPinTimeLine } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { SiChainlink } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";

const timelineDetails = [
  {
    timeline_title: "Techloop Initiative for Zaidyn",
    timeline_description:
      "After brainstroming with my fellow developers and managers. We came across the Zaidyn Techloop Initiative. This dates back to the Techloop session we engaged in during college time. The concept of cyclic teaching remains similar but we will take it on an orgainzation level.",
    timeline_icon: <MdEventAvailable />,
    timeline_place: "Pune, MH",
    timeline_date: "6th March 2023",
    timeline_day: "Monday",
    timeline_hostedby: "ZS",
    timeline_event_link: "https://zs.com",
    timeline_tags: [
      { tag: "Techloop" },
      { tag: "Initiative" },
      { tag: "Session" },
      { tag: "Community" },
      { tag: "Zaidyn" },
    ],
    timeline_card_color: "teal.400",
  },
  {
    timeline_title: "Awarded Project Champions Award by Pfizer CO",
    timeline_description:
      "Was awarded with Project Champions award by Pfizer CO for the best NBE implementation. This was given for solving Pfizer's usecase of Omni-channel Marketing",
    timeline_icon: <MdOutlineEmojiEvents />,
    timeline_place: "Pune, MH",
    timeline_date: "04th September 2021",
    timeline_day: "Saturday",
    timeline_hostedby: "Pfizer",
    timeline_event_link: "https://www.pfizer.com/",
    timeline_tags: [
      { tag: "Award" },
      { tag: "Pfizer" },
      { tag: "Pharmaceutical" },
      { tag: "Project" },
      { tag: "GitHub" },
    ],
    timeline_card_color: "orange.400",
  },
  {
    timeline_title: "Joined as a Software Intern & converted to Full Time @ZS Associates",
    timeline_description:
      "Feeling a mix of excitement and gratitude upon receiving an Internship Offer from ZS Associates, I embarked on my journey as a Software Engineering Intern, primarily focusing on Big Data ETL Pipelines. Eventually, I earned a full-time offer from ZS Associates in July 2021 and transitioned into the role of a Full Stack Software Engineer. As my journey progressed, so did my tech stack, extending to include .NET and Angular technologies.",
    timeline_icon: <IoIosRocket />,
    timeline_place: "Pune, MH",
    timeline_date: "04th January 2021",
    timeline_day: "Monday",
    timeline_hostedby: "ZS Associates",
    timeline_event_link: "https://www.zs.com/",
    timeline_tags: [
      { tag: "Java" },
      { tag: "Big Data" },
      { tag: ".NET" },
      { tag: "Angular" },
      { tag: "Javascript" },
      { tag: "AWS Services" },
      { tag: "Scala" },
      { tag: "Spark" },
      { tag: "Hadoop" },
      { tag: "Internship" },
      { tag: "ETL Pipelines" },
    ],
    timeline_card_color: "cyan.400",
  },
  {
    timeline_title: "Awarded Chancellor's Achievers' Award",
    timeline_description:
    "After constantly participating, representing and winning for my college at Multiple National and International Conference and Hacks, on 1st April 2020 I was awarded the Chancellor's Achievers' Award for 2020.",
    timeline_icon: <SiHiveBlockchain />,
    timeline_place: "VIT Vellore, TN",
    timeline_date: "20th March 2020",
    timeline_day: "Friday",
    timeline_hostedby: "VIT Vellore",
    timeline_event_link: "https://vit.ac.in/",
    timeline_tags: [
      { tag: "Recognition" },
      { tag: "Techloop" },
      { tag: "Community" },
      { tag: "Award" },
      { tag: "Achiever" },
    ],
    timeline_card_color: "teal.400",
  },
  {
    timeline_title: "Awarded Distinguished ML speaker @PES Bengaluru",
    timeline_description:
    "Thanks to our consistent endeavors in the realm of Machine Learning, I was invited by PES Bangalore's Center of Data Science to conduct a Techloop Session on Machine Learning. Subsequently, I was honored by their Dean of Data Science as a gesture of appreciation.",
    timeline_icon: <SiHiveBlockchain />,
    timeline_place: "Bengaluru, KA",
    timeline_date: "06th March 2020",
    timeline_day: "Friday",
    timeline_hostedby: "PES Bengaluru",
    timeline_event_link: "https://pes.edu/",
    timeline_tags: [
      { tag: "Machine Learning" },
      { tag: "Techloop" },
      { tag: "Community" },
      { tag: "Session" },
      { tag: "Award" },
      { tag: "Speaker" },
    ],
    timeline_card_color: "teal.400",
  },
  {
    timeline_title: "Summer Software Intern @TATA Steel",
    timeline_description:
      "Having already completed numerous small/medium startup related internships, this was my first proper MNC level exposure. Interning at TATA Steel taught me a lot about professionalism and accountability of work.",
    timeline_icon: <MdEventNote />,
    timeline_place: "TATA Nagar, JH",
    timeline_date: "01st May 2019",
    timeline_day: "Sunday",
    timeline_hostedby: "TATA Steel",
    timeline_event_link: "https://www.tatasteel.com/",
    timeline_tags: [
      { tag: "SDLC" },
      { tag: "Automation" },
      { tag: "PLC" },
      { tag: "Python" },
      { tag: "C/C++" },
      { tag: "Internship" },
      { tag: "TATA" },
    ],
    timeline_card_color: "orange.400",
  },
  {
    timeline_title: "Winner at Innovators' Quest 2019",
    timeline_description:
      "During the latest Hackathon Season, my team and I geared up to conquer numerous hackathons, emerging victorious in four of them. Among them, the triumph at Innovators' Quest held a unique significance. It marked our inaugural success in tackling a problem statement concerning smart Augmented Reality Goggles tailored for workers laboring in demanding environments such as gas pipelines, conveyor belts, and power grids.",
    timeline_icon: <MdOutlineEmojiEvents />,
    timeline_place: "Chennai, TN",
    timeline_date: "31st March 2019",
    timeline_day: "Sunday",
    timeline_hostedby: "IQuest Team",
    timeline_event_link: "https://www.instagram.com/iquest.vit/",
    timeline_tags: [
      { tag: "AR/VR" },
      { tag: "3D Modelling" },
      { tag: "Game Development" },
      { tag: "Unity" },
      { tag: "PTC/Vuforia" },
      { tag: "C#" },
      { tag: "Hackathon" },
      { tag: "Innovation" },
    ],
    timeline_card_color: "blue.400",
  },
  {
    timeline_title: "Hosted IEEE Techloop Hack 2019",
    timeline_description:
      "I lead the organizing team for IEEE Techloop Hacka 20189. An 72 Hour Hackathon, with over 1000+ Participant form over 35 institutes of India. The event focus on building meaningful solution form scratch during the 72 hour window, along with sessions and conferences spanning over 3 days.",
    timeline_icon: <RiMapPinTimeLine />,
    timeline_place: "Vellore, TN",
    timeline_date: "17th March 2019",
    timeline_day: "Sunday",
    timeline_hostedby: "IEEE",
    timeline_event_link: "https://www.ieee.org/",
    timeline_tags: [
      { tag: "Conference" },
      { tag: "Open-Source" },
      { tag: "Research" },
      { tag: "Patents" },
      { tag: "Meetup" },
      { tag: "Projects" },
    ],
    timeline_card_color: "purple.400",
  },
  {
    timeline_title: "Winner at HackOverflow 2018",
    timeline_description:
      "In my second year of undergraduate studies, following a rejuvenating summer break, I achieved a significant milestone by winning my first hackathon. Our winning project, CardiBuddy, utilized machine learning to create a smart electronic band capable of detecting cardiac arrest before its onset. This experience not only enhanced my technical skills but also provided valuable insights into UI design and effective idea pitching.",
    timeline_icon: <VscSymbolEvent />,
    timeline_place: "VIT Vellore, TN",
    timeline_date: "01st September 2018",
    timeline_day: "Saturday",
    timeline_hostedby: "CSED",
    timeline_event_link: "https://www.linkedin.com/company/csedvit/",
    timeline_tags: [
      { tag: "IOT" },
      { tag: "Hackathon" },
      { tag: "Pitch" },
      { tag: "Event" },
      { tag: "Machine Learning" },
    ],
    timeline_card_color: "teal.400",
  },
  {
    timeline_title: "Hosted IEEE Techloop Congress 2018",
    timeline_description:
      "I speakerheaded the organizing team for IEEE Techloop Congress 2018. An event focus on research and development, with sessions and conferences spanning over 4 days. It also provides platform for new innovation including research papers and patents.",
    timeline_icon: <MdEvent />,
    timeline_place: "Vellore, TN",
    timeline_date: "03rd August 2018",
    timeline_day: "Friday",
    timeline_hostedby: "IEEE",
    timeline_event_link: "https://www.ieee.org/",
    timeline_tags: [
      { tag: "Conference" },
      { tag: "Open-Source" },
      { tag: "Research" },
      { tag: "Patents" },
      { tag: "Meetup" },
      { tag: "Projects" },
    ],
    timeline_card_color: "purple.400",
  },
  {
    timeline_title: "Honoured to be part of IEEE",
    timeline_description:
      "I joined IEEE Region 10, as a young professional. IEEE is the largest technical professional organization",
    timeline_icon: <MdEventAvailable />,
    timeline_place: "Chennai, TN",
    timeline_date: "05th December 2017",
    timeline_day: "Tuesday",
    timeline_hostedby: "IEEE",
    timeline_event_link: "https://www.ieee.org/",
    timeline_tags: [
      { tag: "Technology" },
      { tag: "Research" },
      { tag: "Open Source" },
      { tag: "Projects" },
      { tag: "Community" },
    ],
    timeline_card_color: "orange.400",
  },
  {
    timeline_title: "Undergraduate @ VIT Vellore",
    timeline_description:
      "I started my undergraduate at VIT Vellore, where i found like-minded people and with a thrive to explore technology",
    timeline_icon: <MdOutlineEmojiEvents />,
    timeline_place: "Vellore, TN",
    timeline_date: "01st July 2017",
    timeline_day: "Saturday",
    timeline_hostedby: "VIT Vellore",
    timeline_event_link: "https://vit.ac.in/",
    timeline_tags: [
      { tag: "Bachelors" },
      { tag: "VIT Vellore" },
      { tag: "Undergraduate" },
    ],
    timeline_card_color: "cyan.400",
  },
];

export { timelineDetails };
