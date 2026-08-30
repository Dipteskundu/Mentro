export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  { name: "Jamie Park", role: "Frontend Engineer", company: "Lumen Works", quote: "Sarah's architecture workshop gave me a language for decisions I was already making by instinct. My next PR was smaller, clearer, and far easier for the team to review.", rating: 5, avatar: "/images/learner-jamie-park.jpg" },
  { name: "Noah Reed", role: "Mobile Developer", company: "Fieldnote", quote: "Marcus did not just show us how to build a screen—he showed us how to make product trade-offs. I left with a prototype and a much stronger point of view.", rating: 5, avatar: "/images/learner-noah-reed.jpg" },
  { name: "Elena Ross", role: "Data Product Analyst", company: "Civic Thread", quote: "Priya made model evaluation feel tangible. The practical exercises helped me move from reporting numbers to asking better questions about the data behind them.", rating: 5, avatar: "/images/learner-elena-ross.jpg" },
  { name: "Omar Hassan", role: "Product Designer", company: "Sonder Health", quote: "Emma's critique process was exceptionally generous and precise. I now have a practical way to bring engineering into our system work from the very first sketch.", rating: 5, avatar: "/images/learner-omar-hassan.jpg" },
  { name: "Maya Patel", role: "Cloud Engineer", company: "Kite Systems", quote: "Alex turned an intimidating platform topic into a series of useful operating habits. The reliability clinic has already changed how our team prepares for releases.", rating: 5, avatar: "/images/learner-maya-patel.jpg" },
  { name: "Lucas Ward", role: "Insights Analyst", company: "Maple & Co.", quote: "The session was thoughtfully paced and deeply practical. I used the notebook structure from the workshop in a stakeholder readout the very next week.", rating: 5, avatar: "/images/learner-lucas-ward.jpg" },
  { name: "Sophia Khan", role: "Platform Engineer", company: "Atlas Ridge", quote: "The delivery workshop was the rare technical class that immediately improved our daily work. We left with a sensible path to fewer manual release steps.", rating: 5, avatar: "/images/learner-sophia-khan.jpg" },
  { name: "Daniel Cho", role: "Full-Stack Developer", company: "Goodwell Studio", quote: "What stood out was the room: thoughtful peers, direct feedback, and time to work through a real problem. Mentro feels more like a studio than a course catalogue.", rating: 5, avatar: "/images/learner-daniel-cho.jpg" },
];
