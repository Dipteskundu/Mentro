export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alex Kim",
    role: "Frontend Developer",
    company: "Stripe",
    quote: "Mentro completely changed my career trajectory. The React workshop with Sarah was hands-down the best learning experience I've had. I landed a frontend role two months later.",
    rating: 5,
  },
  {
    name: "Jordan Lee",
    role: "Mobile Developer",
    company: "Shopify",
    quote: "The 1-on-1 mentorship sessions with Marcus helped me transition from web dev to mobile. The personalized feedback was invaluable — nothing like generic video courses.",
    rating: 5,
  },
  {
    name: "Sam Patel",
    role: "ML Engineer",
    company: "OpenAI",
    quote: "I joined the AI/ML bootcamp as a complete beginner. Priya's teaching style made complex concepts accessible. Now I'm building ML models at work every day.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "UX Designer",
    company: "Figma",
    quote: "Emma's design systems workshop was a game-changer. I went from struggling with component consistency to leading our team's entire design system overhaul.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Cloud Engineer",
    company: "Netflix",
    quote: "The AWS Cloud Practitioner webinar with Alex was incredibly well-structured. I passed my certification on the first attempt and got promoted within three months.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Data Analyst",
    company: "Spotify",
    quote: "The Data Analysis with Python workshop gave me practical skills I use daily. The hands-on projects with real datasets made all the difference in my learning.",
    rating: 4,
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer",
    company: "Microsoft",
    quote: "Alex's CI/CD Pipeline Mastery workshop transformed how our team ships code. We went from manual deployments to fully automated pipelines in two weeks.",
    rating: 5,
  },
  {
    name: "Aisha Rahman",
    role: "Full Stack Developer",
    company: "Airbnb",
    quote: "I've tried Udemy and Coursera, but Mentro's live mentorship is on another level. Being able to ask questions in real-time and get code reviews from industry experts accelerated my growth exponentially.",
    rating: 5,
  },
];
