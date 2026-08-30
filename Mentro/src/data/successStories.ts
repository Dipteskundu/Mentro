export interface SuccessStory {
  name: string;
  avatar: string;
  previousRole: string;
  currentRole: string;
  company: string;
  workshopId: string;
  workshopTitle: string;
  quote: string;
  rating: number;
  timeframe: string;
}

export const successStories: SuccessStory[] = [
  {
    name: "Jamie Park",
    avatar: "/images/learner-jamie-park.jpg",
    previousRole: "Junior Frontend Developer",
    currentRole: "Senior Frontend Engineer",
    company: "Lumen Works",
    workshopId: "ws-002",
    workshopTitle: "React Architecture for Product Teams",
    quote: "Sarah's architecture workshop gave me the patterns and confidence to lead our frontend migration. Within 6 months, I was promoted to Senior Engineer and now mentor a team of 4.",
    rating: 5,
    timeframe: "6 months",
  },
  {
    name: "Maya Patel",
    avatar: "/images/learner-maya-patel.jpg",
    previousRole: "DevOps Engineer",
    currentRole: "Cloud Architect",
    company: "Kite Systems",
    workshopId: "ws-009",
    workshopTitle: "Kubernetes Reliability Clinic",
    quote: "Alex's clinic transformed how I think about infrastructure. I went from firefighting production issues to designing resilient systems. Our team's uptime went from 99.5% to 99.99%.",
    rating: 5,
    timeframe: "4 months",
  },
  {
    name: "Elena Ross",
    avatar: "/images/learner-elena-ross.jpg",
    previousRole: "Business Analyst",
    currentRole: "Data Product Analyst",
    company: "Civic Thread",
    workshopId: "ws-007",
    workshopTitle: "Data Stories with Python",
    quote: "Priya's workshop opened my eyes to the power of data storytelling. I transitioned from spreadsheets to Python notebooks and now lead our team's analytics initiatives.",
    rating: 5,
    timeframe: "3 months",
  },
  {
    name: "Omar Hassan",
    avatar: "/images/learner-omar-hassan.jpg",
    previousRole: "Graphic Designer",
    currentRole: "Product Designer",
    company: "Sonder Health",
    workshopId: "ws-011",
    workshopTitle: "Interface Design Essentials",
    quote: "Emma's critique process taught me to think beyond aesthetics. I now design with user research and business goals in mind. Got my dream job in product design within 2 months.",
    rating: 5,
    timeframe: "2 months",
  },
  {
    name: "Noah Reed",
    avatar: "/images/learner-noah-reed.jpg",
    previousRole: "React Developer",
    currentRole: "Mobile Lead",
    company: "Fieldnote",
    workshopId: "ws-003",
    workshopTitle: "React Native: From Prototype to Store",
    quote: "Marcus showed me how to think about mobile as a product, not just code. I shipped our first mobile app and now lead a team of 3 mobile developers.",
    rating: 5,
    timeframe: "5 months",
  },
];
