import {IconSearch, IconMapPin, IconBriefcase, IconRecharging} from "@tabler/icons-react"

const dropdownData = [
    { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Experience", icon: IconBriefcase, options: ['Entry Level', 'Intermediate', 'Expert'] },
    { title: "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
  ];

const jobList = [
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
    postedDaysAgo: 12,
    description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
  },
  {
    jobTitle: "Sr. UX Designer",
    company: "Netflix",
    applicants: 14,
    experience: "Expert",
    jobType: "Part-Time",
    location: "San Francisco",
    package: "40 LPA",
    postedDaysAgo: 5,
    description: "Netflix is looking for a Sr. UX Designer to enhance our user experience on streaming platforms. Ideal candidates will have extensive experience in user research and interaction design, helping us to deliver engaging content to our global audience."
  },
  {
    jobTitle: "Product Designer",
    company: "Microsoft",
    applicants: 58,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Remote",
    package: "35 LPA",
    postedDaysAgo: 4,
    description: "Join Microsoft as a Product Designer and contribute to our new Lightspeed LA studio. We're looking for designers who can create intuitive and compelling gaming experiences. This is a remote position, offering flexibility and the opportunity to work with a leading technology company."
  },
  {
    jobTitle: "Backend Developer", 
    company: "Google",
    applicants: 21,
    experience: "Entry Level",
    jobType: "Full-Time",
    Location: "Bangalore",
    package: "38 LPA",
    postedDaysAgo: 8,
    description: "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems that power our services. This role requires strong problem-solving skills and experience with modern backend technologies."
  },
  {
    jobTitle: "SMM Manager", 
    company: "Spotify",
    applicants: 73,
    experience: "Intermediate",
    jobType: "Full-Time",
    Location: "Delhi",
    package: "34 LPA",
    postedDaysAgo: 8,
    description: "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems that power our services. This role requires strong problem-solving skills and experience with modern backend technologies."
  },
  {
    jobTitle: "Product Designer", 
    company: "Adobe",
    applicants: 23,
    experience: "Expert",
    jobType: "Part-Time",
    Location: "Toronto",
    package: "33 LPA",
    postedDaysAgo: 22,
    description: "Adobe is seeking a part-Time Product Designer to help us enhance "
  },
  {
    jobTitle: "IOS Developer", 
    company: "Apple",
    applicants: 30,
    experience: "Expert",
    jobType: "Full-Time",
    Location: "Cupertino",
    package: "42 LPA",
    postedDaysAgo: 7,
    description: "Apple is seeking an IOS Developer to join our team in Cuperino. You will work on developing curring-edge applications "
  },
  {
    jobTitle: "Frontend Developer", 
    company: "Amazon",
    applicants: 50,
    experience: "Intermediate",
    jobType: "Full-Time",
    Location: "Seattle",
    package: "36 LPA",
    postedDaysAgo: 10,
    description: "Amazon is seeking for a Frontend Developer to build and maintain our custamer-facing applications."
  }
];
  

export {dropdownData, jobList};  