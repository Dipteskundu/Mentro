"use client";

import Image from "next/image";

interface WallTestimonial {
  name: string;
  role: string;
  company: string;
  transition: string;
  avatar: string;
  quote: string;
  rating: number;
  badge: string;
  tagColor: string;
}

const wallReviewsRow1: WallTestimonial[] = [
  {
    name: "Elena Ross",
    role: "Data Product Analyst",
    company: "Civic Thread",
    transition: "Analyst → ML Lead",
    avatar: "/images/learner-elena-ross.jpg",
    quote: "Priya made machine learning model evaluation feel tangible. The practical exercises helped me move from reporting numbers to asking better questions.",
    rating: 5,
    badge: "✔ Verified Graduate",
    tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300",
  },
  {
    name: "Daniel Cho",
    role: "Frontend Engineer",
    company: "Northstar Studio",
    transition: "Junior → Senior Dev",
    avatar: "/images/learner-daniel-cho.jpg",
    quote: "Sarah's clinic transformed how I think about frontend architecture. I went from firefighting state bugs to designing resilient component systems.",
    rating: 5,
    badge: "🚀 Promoted",
    tagColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300",
  },
  {
    name: "Sophia Khan",
    role: "UX Systems Designer",
    company: "Formline",
    transition: "UI Designer → Systems Director",
    avatar: "/images/learner-sophia-khan.jpg",
    quote: "Emma's design systems workshop gave me the exact blueprint to build scalable Figma libraries. Our team design speed doubled within a month.",
    rating: 5,
    badge: "⭐ Top Reviewer",
    tagColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300",
  },
  {
    name: "Omar Hassan",
    role: "Cloud Platform Dev",
    company: "Aster Cloud",
    transition: "SysAdmin → Platform Lead",
    avatar: "/images/learner-omar-hassan.jpg",
    quote: "Alex showed me how to think about infrastructure as code. I shipped our first Kubernetes cluster and reduced deployment times by 75%.",
    rating: 5,
    badge: "✔ Verified Graduate",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300",
  },
];

const wallReviewsRow2: WallTestimonial[] = [
  {
    name: "Maya Patel",
    role: "Mobile Software Engineer",
    company: "Harbor Labs",
    transition: "Web Dev → React Native Specialist",
    avatar: "/images/learner-maya-patel.jpg",
    quote: "Marcus showed me how to think about mobile as a product, not just code. I shipped our consumer mobile app to 100k active users.",
    rating: 5,
    badge: "🔥 High Impact",
    tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300",
  },
  {
    name: "Noah Reed",
    role: "DevOps Engineer",
    company: "Atlas Ridge",
    transition: "Support Tech → DevOps Specialist",
    avatar: "/images/learner-noah-reed.jpg",
    quote: "The 1-on-1 mentorship sessions were invaluable. Getting direct code review from active staff engineers saved me months of trial and error.",
    rating: 5,
    badge: "✔ Verified Student",
    tagColor: "bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300",
  },
  {
    name: "Lucas Ward",
    role: "Fullstack Developer",
    company: "Fieldnote",
    transition: "Bootcamp Grad → Staff Dev",
    avatar: "/images/learner-lucas-ward.jpg",
    quote: "Unlike theoretical video tutorials, Mentro's live workshops made me build real microservices under mentor guidance. 10/10 experience!",
    rating: 5,
    badge: "🚀 Career Growth",
    tagColor: "bg-pink-100 text-pink-800 dark:bg-pink-950/80 dark:text-pink-300",
  },
  {
    name: "Jamie Park",
    role: "AI Application Engineer",
    company: "Meridian Research",
    transition: "Python Dev → Applied AI Lead",
    avatar: "/images/learner-jamie-park.jpg",
    quote: "The depth of instruction on LLM fine-tuning was unmatched. I implemented our company's first internal AI assistant during the bootcamp.",
    rating: 5,
    badge: "⭐ 5.0 Star Review",
    tagColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/80 dark:text-cyan-300",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ item }: { item: WallTestimonial }) {
  return (
    <div className="w-[360px] sm:w-[420px] flex-shrink-0 p-6 rounded-3xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl hover:shadow-2xl hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <StarRating rating={item.rating} />
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.tagColor}`}>
            {item.badge}
          </span>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic mb-6">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-sm flex-shrink-0">
            <Image src={item.avatar} alt={item.name} fill sizes="44px" className="object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
              {item.name}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
              {item.role} · {item.company}
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
          {item.transition}
        </span>
      </div>
    </div>
  );
}

export default function LearnerWallOfLoveCarousel() {
  const row1Duplicated = [...wallReviewsRow1, ...wallReviewsRow1, ...wallReviewsRow1];
  const row2Duplicated = [...wallReviewsRow2, ...wallReviewsRow2, ...wallReviewsRow2];

  return (
    <section className="py-20 bg-white dark:bg-[#101828] transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-4">
            <span>✨ Wall of Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by 1,000+ Engineers & Designers
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            See how active mentorship and live workshops transformed curiosity into accelerated career growth.
          </p>
        </div>
      </div>

      {/* Dual Marquee Container */}
      <div className="space-y-6">
        
        {/* Row 1: Scroll Left */}
        <div className="group relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
            {row1Duplicated.map((review, idx) => (
              <ReviewCard key={`row1-${review.name}-${idx}`} item={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Scroll Right (Reverse animation feel) */}
        <div className="group relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused] [animation-direction:reverse]">
            {row2Duplicated.map((review, idx) => (
              <ReviewCard key={`row2-${review.name}-${idx}`} item={review} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
